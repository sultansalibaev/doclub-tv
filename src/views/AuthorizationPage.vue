<template>
    <div class="flex h-full">
        <div class="flex flex-col max-w-[390px] w-full mx-auto py-[56px] sm-modal:pt-[47px] sm-modal:pb-8 relative scrollbar-hide xl-modal:overflow-y-scroll">
            <div class="media-auth">
                <h4>docmed.space</h4>
                <h1 class="my-8"><span class="text-primary-600">Closed</span><br>Evidence-based Medicine Club</h1>
                <div class="text-400" v-if="!secretCode.value">
                    <label class="mb-4 inline-block">Phone number</label>
                    
                    <vue-phone-input
                        class="text-neutral-400 h-[44px] border-current border-[1px] rounded-xl py-3 px-4"
                        :class="{
                            'border-primary-600': valueValid
                        }"
                        v-if="!secretCode.value"
                        v-focus
                        v-model="value"
                        :inputOptions="{
                            placeholder: ''
                        }"
                        :defaultCountry="defaultCountryCode" 
                        :dropdownOptions="{ showFlags: false, showDialCodeInSelection: true, showDialCodeInList: true }" 
                        @country-changed="setCountryCode"
                        @validate="validateNumber"
                        @keydown.enter="sendCode"
                    >
                        <template v-slot:arrow-icon>
                            <img svg-inline src="@/assets/svg/angle-down.svg" alt="angle-down" class="text-neutral-700 ml-[7px] pt-px items-center h-[6px] max-w-[10px]"  />
                        </template>
                    </vue-phone-input>
                    
                    <button
                        class="
                            flex justify-center items-center w-full h-[44px] rounded-xl my-7 transition-all duration-100
                        "
                        :class="{
                            'bg-primary-600 text-white': valueValid,
                            'bg-primary-200 text-primary-300 pointer-events-none': !valueValid,
                        }"
                        @click="sendCode"
                    >Send code</button>

                    <p class="lin leading-6">I hereby agree to the <u>Terms of processing of my personal data</u>.</p>
                </div>
                <div class="text-400" v-else>
                    <div class="mb-4 inline-flex">
                        <label class="inline-block">The code was sent.</label>
                        <button class="text-primary-600 underline ml-2" @click="resetSecretCode">Change the number</button>
                    </div>
                    <div class="flex gap-4" v-focus @keydown.enter="sendCode">
                        <input
                            type="number"
                            :min="0"
                            :max="9"
                            required
                            class="
                                text-center focus:outline-none w-full appearance-none border-primary-600 text-black border-[1px] rounded-xl py-3 px-4
                            "
                            :class="{
                                '!border-danger-500 bg-danger-100 text-danger-700': secretCodeIsInvalid
                            }"
                            @focus="allPreviousIsNull($event, index)"
                            :value="code"
                            @input="update_OTP_code($event, index)"
                            @keydown="handleInput"
                            v-for="(code, index) in OTP_code"
                            :key="index"
                        >
                    </div>
                    
                    
                    <button
                        class="
                            flex justify-center items-center w-full h-[44px] rounded-xl mt-7 mb-8 transition-colors duration-100
                        "
                        :class="{
                            'bg-primary-600 text-white': retryTimeout <= 0,
                            'bg-primary-200 text-primary-300 pointer-events-none': retryTimeout > 0,
                            '!mb-2': wrongNumberError
                        }"
                        @click="updateRetryTimeout"
                    >{{ retryTimeout <= 0 ? 'Get a new code' : `New code in ${retryTimeout} seconds.` }}</button>
                    <button
                        v-if="wrongNumberError"
                        class="
                            flex justify-center items-center w-full h-[44px] rounded-xl mb-8 transition-colors duration-100 bg-neutral-100 text-500
                        "
                        @click="toggleInfoModal"
                    >Code did not come</button>

                    <span class="text-danger-600 flex items-center" v-if="secretCodeIsInvalid">
                        <img svg-inline src="@/assets/svg/alert-danger.svg" alt="alert-danger" class="mr-[5px]" />
                        Invalid code
                    </span>

                </div>
            </div>
            <div class="flex justify-center max-w-[370px] media-auth mt-auto mx-auto">
                <ContactUs class="">
                    <span>ООО МЕДТЕХ</span>
                    <span>Personal data protection</span>
                </ContactUs>
            </div>
            <v-popup :visibleTimout="4" title="🍪 We use cookies" class="sm-modal:bottom-8 md-modal:bottom-14 right-0 left-0 mx-auto">
                <p class="text-400">Cookies help us deliver the best experience on our website. By using our website, you agree to the use of cookies.</p>
            </v-popup>
        </div>
        <div class="inline-flex relative">
            <div @click.stop="showLanguageModal" class="absolute top-[30px] left-[-93.3px] flex items-center cursor-pointer">
                <img svg-inline src="@/assets/svg/angle-down.svg" alt="angle-down" class="text-primary-500 mr-[7px] pt-px items-center h-[6px] max-w-[10px]"/>
                <small class="text-primary-500">{{ languages[selected_language] }}</small>
                <v-popup @hide-popup="hideLanguageModal" :modal="language_modal" title="🏳️  Select a language"  class="mt-2 top-full w-[270px] right-0 mx-auto">
                    <ul class="mt-4 space-y-4 text-400">
                        <ol v-for="(lang, index) in languages" @click="selected_language = index">{{ lang }}</ol>
                    </ul>
                </v-popup>
            </div>
            <v-img :image="AuthPageImg" :imgClass="'object-cover'" />
        </div>
        <v-modal @toggle-modal="toggleInfoModal" :show="showInfo"/>
    </div>
</template>

<script>
import { defineComponent } from 'vue'
import AuthPageImg from '@/assets/img/authorization-page.jpg'
import VuePhoneInput from '@/components/shared/ui/VuePhoneInput.vue'
import VModal from '@/components/shared/ui/VModal.vue'
import ContactUs from '@/components/ContactUs.vue'

export default defineComponent({
    name: 'AuthorizationPage',
    components: {
        VuePhoneInput,
        VModal,
        ContactUs,
    },
    data () {
        return {
            AuthPageImg,
            value: '',
            defaultCountryCode: 971,
            showInfo: false,
            valueValid: false,
            secretCode: {
                errors: new Set(),
                count: 0,
                value: null,
            },
            OTP_code: [null, null, null, null],
            retryTimeout: 0,
            languages: ['English', 'German', 'Spanish'],
            selected_language: 0,
            language_modal: false,
        }
    },
    methods: {
        showLanguageModal() {
            this.language_modal = true;
        },
        hideLanguageModal() {
            this.language_modal = false;
        },
        updateRetryTimeout() {
            
            this.updateSecretCode();
            this.retryTimeout = 5;
            
            let interval = setInterval(() => {
                this.retryTimeout--;
                if (this.retryTimeout <= 0) clearInterval(interval);
            }, 1000);

            this.updateSecretCodeInput()
        },
        updateSecretCodeInput() {

            let oldSecretCode = this.secretCode.value;
            this.secretCode.value = null;

            this.$nextTick(() => {
                this.secretCode.value = oldSecretCode;
            });
        },
        getRandomArbitrary(min, max) {
            return Math.floor(Math.random() * (max - min) + min);
        },
        updateSecretCode() {
            this.secretCode.value = Array(4).fill(null).map(_ => this.getRandomArbitrary(0, 9)).join('');
            this.secretCode.count++;
            console.log('new secretCode', this.secretCode.value);
            this.OTP_code = [null, null, null, null]
        },
        setCountryCode(country) {
            console.log('country', country);
            this.defaultCountryCode = country.dialCode
        },
        validateNumber(phone) {
            this.valueValid = phone.valid;
        },
        sendCode() {
            this.updateSecretCode()
        },
        handleInput(e) {
            if (e.key === "Backspace" || e.key === "Delete") {
                if (e.target.value != '') return;
                if (e.target.previousElementSibling) e.target.previousElementSibling.focus();
            }
        },
        update_OTP_code({ target }, index) {
            let { value } = target;
            if (value == '') {
                this.OTP_code[index] = null;
                if (target.previousElementSibling) target.previousElementSibling.focus();
                return;
            }
            this.OTP_code[index] = value;
            value = parseInt(this.OTP_code[index]);
            this.OTP_code[index] = value > 9 ? parseInt((''+value).at(-1)) : value;

            if (target.nextElementSibling) target.nextElementSibling.focus();
        },
        allPreviousIsNull(event, index) {
            let isNull = this.OTP_code.slice(0, index).some(num => num == null);

            if (isNull && event.target.previousElementSibling) event.target.previousElementSibling.focus();
        },
        resetSecretCode() {
            this.secretCode.value = null;
        },
        toggleInfoModal() {
            this.showInfo = !this.showInfo;
        },
    },
    computed: {
        fullPhoneNumber() {
            return `+${defaultCountryCode} ${value}`;
        },
        secretCodeIsInvalid() {
            return this.OTP_code.join('').length == 4 && this.OTP_code.join('') != this.secretCode.value
        },
        wrongNumberError() {
            return (this.secretCode.errors.size == 2 && this.retryTimeout <= 0) || (this.secretCode.errors.size >= 2 && this.secretCode.count >= 3)
        },
    },
    watch: {
        OTP_code: {
            handler(newCode) {
                let tempValue = newCode.join('');
                if (tempValue.length == 4) {
                    if (tempValue == this.secretCode.value) {
                        this.$router.push('/about');
                    }
                    else {
                        this.secretCode.errors.add(this.secretCode.value);
                    }
                }
            },
            deep: true
        },
    },
})
</script>
