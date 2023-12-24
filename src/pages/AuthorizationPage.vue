<template>
    <div class="flex h-full">
        <div
            class="flex flex-col max-w-[390px] w-full mx-auto py-[56px] sm-screen:pt-[47px] sm-screen:pb-8 relative scrollbar-hide xl-screen:overflow-y-scroll">
            <div class="media-auth">
                <div class="flex items-center justify-between">
                    <h4>docmed.space</h4>
                    <v-select-language class="relative md-auth-screen:hidden" />
                </div>
                <h1 class="my-8"><span class="text-primary-600">Closed</span><br>Evidence-based Medicine Club</h1>
                <div class="text-400" v-if="!hasSecretCode">
                    <label class="mb-4 inline-block">Phone number</label>

                    <vue-phone-input
                        class="h-[44px] border-current text-neutral-700 border-[1px] rounded-xl py-3 px-4"
                        :class="{
                            'border-neutral-400 [&:has(input:focus)]:border-primary-600': valueValid === undefined,
                            'border-primary-600': valueValid === true,
                            'focus:border-danger-500 border-danger-500 bg-danger-100 !text-danger-700': valueValid === false,
                        }"
                        v-focus
                        v-model="value"
                        :inputOptions="{
                            placeholder: ''
                        }"
                        :defaultCountry="defaultCountryCode"
                        :dropdownOptions="{
                            showFlags: false,
                            showDialCodeInSelection: true,
                            showDialCodeInList: true
                        }"
                        @country-changed="setCountryCode"
                        @validate="validateNumber"
                        @keydown.enter="sendCode"
                    >
                        <template v-slot:arrow-icon>
                            <icon-svg
                                name="angle-down"
                                class="!text-inherit ml-[7px] pt-px items-center h-[6px] max-w-[10px]"
                            />
                        </template>
                    </vue-phone-input>

                    <v-button
                        :disabled="!valueValid"
                        class="w-full my-7"
                        text="Send code"
                        @click="sendCode"
                    />

                    <p class="lin leading-6">I hereby agree to the <u>Terms of processing of my personal data</u>.</p>
                </div>
                <div class="text-400" v-else>
                    <code-input />

                    <v-button
                        :disabled="retryTimeout > 0"
                        class="w-full mt-7"
                        :class="wrongNumberError ? 'mb-2' : 'mb-8'"
                        :text="retryTimeout <= 0 ? 'Get a new code' : `New code in ${retryTimeout} seconds.`"
                        @click="updateRetryTimeout"
                    />

                    <v-button
                        v-if="wrongNumberError"
                        class="w-full mb-8"
                        mode="secondary"
                        text="Code did not come"
                        @click="toggleInfoModal"
                    />

                    <v-alert
                        v-if="secretCodeIsInvalid"
                        type="danger"
                        message="Invalid code"
                    />

                </div>
            </div>
            <div class="flex justify-center max-w-[370px] media-auth mt-auto mx-auto">
                <ContactUs class="">
                    <span>ООО МЕДТЕХ</span>
                    <span>Personal data protection</span>
                </ContactUs>
            </div>
            <v-popup :visibleTimout="4" title="🍪 We use cookies"
                class="sm-screen:bottom-8 md-screen:bottom-14 right-0 left-0 mx-auto">
                <p class="text-400">Cookies help us deliver the best experience on our website. By using our website, you
                    agree to the use of cookies.</p>
            </v-popup>
        </div>
        <div class="inline-flex relative">

            <v-select-language class="absolute top-[30px] left-[-93.3px] sm-auth-screen:hidden" />
            <v-img :image="AuthPageImg" :imgClass="'object-cover'" />
        </div>
        <v-modal @toggle-modal="toggleInfoModal" :show="showInfo" />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import AuthPageImg from '@/assets/img/authorization-page.jpg'
import VuePhoneInput from '@/shared/ui/VuePhoneInput.vue'
import ContactUs from '@/shared/ui/ContactUs.vue'

import {
    secretCode,
    OTP_code,
    updateSecretCode,
    secretCodeIsInvalid,
    retryTimeout,
    updateRetryTimeout
} from "@/features/authorization"

export default defineComponent({
    name: 'AuthorizationPage',
    components: {
        VuePhoneInput,
        ContactUs,
    },
    setup: () => ({
        secretCode,
        OTP_code,
        updateSecretCode,
        secretCodeIsInvalid,
        retryTimeout,
        updateRetryTimeout
    }),
    data() {
        return {
            AuthPageImg,
            value: '',
            defaultCountryCode: 971,
            showInfo: false,
            valueValid: false,
        }
    },
    methods: {
        setCountryCode(country: any) {
            this.defaultCountryCode = country.dialCode
        },
        validateNumber(phone: any) {
            this.valueValid = phone.valid;
        },
        sendCode() {
            this.updateSecretCode()
        },
        toggleInfoModal() {
            this.showInfo = !this.showInfo;
        },
    },
    computed: {
        hasSecretCode() {
            return this.secretCode.value != null && this.value != '';
        },
        phoneNumber() {
            return `+${this.defaultCountryCode} ${this.value}`;
        },
        wrongNumberError() {
            if (this.secretCode.errors.size > 2) return true;
            const lastErrorCode = Array.from(this.secretCode.errors).pop();
            return this.secretCode.errors.size == 2 && (
                this.retryTimeout <= 0 || (
                    lastErrorCode != this.secretCode.value
                )
            )
        },
    },
    watch: {
        OTP_code: {
            handler(newCode) {
                let tempValue = newCode.join('');
                if (tempValue.length == 4) {
                    if (tempValue == this.secretCode.value) {
                        this.$router.push('/main');
                    }
                    else {
                        console.log('error', this.secretCode.value);
                        this.secretCode.errors.add(this.secretCode.value);
                    }
                }
            },
            deep: true
        },
    },
})
</script>
