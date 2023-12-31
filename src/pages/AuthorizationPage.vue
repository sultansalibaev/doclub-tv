<template>
    <div class="flex h-full">
        <div
            class="flex flex-col max-w-[390px] w-full mx-auto py-[56px] sm-screen:pt-[47px] sm-screen:pb-8 relative scrollbar-hide xl-screen:overflow-y-scroll">
            <div class="media-auth">
                <div class="flex items-center justify-between">
                    <h4>docmed.space</h4>
                    <select-language class="relative md-auth-screen:hidden" />
                </div>
                <h1 class="my-8"><span class="text-primary-600">Closed</span><br>Evidence-based Medicine Club</h1>
                <div class="text-400" v-if="!hasSecretCode">

                    <v-input mode="phone" />

                    <v-button :disabled="!phone.valid" class="w-full my-7" text="Send code" @click="sendCode" />

                    <p class="lin leading-6">I hereby agree to the <u>Terms of processing of my personal data</u>.</p>
                </div>
                <div class="text-400" v-else>
                    <v-input mode="OTP-code" />

                    <v-button :disabled="retryTimeout > 0" class="w-full mt-7" :class="wrongNumberError ? 'mb-2' : 'mb-8'"
                        :text="retryTimeout <= 0 ? 'Get a new code' : `New code in ${retryTimeout} seconds.`"
                        @click="updateRetryTimeout" />

                    <v-button v-if="wrongNumberError" class="w-full mb-8" mode="secondary" text="Code did not come"
                        @click="toggleInfoModal" />

                    <v-alert v-if="secretCodeIsInvalid" type="danger" message="Invalid code" />

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

            <select-language class="absolute top-[30px] left-[-93.3px] sm-auth-screen:hidden" />
            <v-img name="authorization-page.jpg" :imgClass="'object-cover'" />
        </div>
        <v-modal @toggle-modal="toggleInfoModal" :show="showInfo" />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ContactUs from '@/shared/ui/ContactUs.vue'
import { SelectLanguage } from '@/features/language'

import {
    secretCode,
    OTP_code,
    updateSecretCode,
    secretCodeIsInvalid,
    retryTimeout,
    updateRetryTimeout,
    wrongNumberError,
} from "@/features/authorization/secret-code"
import { sendCode, phone } from "@/features/authorization/input-number"

export default defineComponent({
    name: 'AuthorizationPage',
    components: {
        ContactUs,
        SelectLanguage,
    },
    setup: () => ({
        secretCode,
        OTP_code,
        updateSecretCode,
        secretCodeIsInvalid,
        retryTimeout,
        updateRetryTimeout,
        wrongNumberError,
        sendCode,
        phone,
    }),
    data() {
        return {
            showInfo: false,
        }
    },
    methods: {
        toggleInfoModal() {
            this.showInfo = !this.showInfo;
        },
    },
    computed: {
        hasSecretCode() {
            return this.secretCode.value != null && this.phone.value != '';
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
