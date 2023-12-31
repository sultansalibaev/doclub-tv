<template>
    <label class="mb-4 inline-block">Phone number</label>

    <vue-tel-input
        class="h-[44px] border-current text-neutral-700 border-[1px] rounded-xl py-3 px-4"
        :class="{
            'border-neutral-400 [&:has(input:focus)]:border-primary-600': phone.valid === undefined,
            'border-primary-600': phone.valid === true,
            'focus:border-danger-500 border-danger-500 bg-danger-100 !text-danger-700': phone.valid === false,
        }"
        v-focus
        v-model="phone.value"
        :inputOptions="{
            placeholder: ''
        }"
        :defaultCountry="phone.defaultCountryCode"
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
    </vue-tel-input>
</template>

<script>
import VueTelInput from "./VueTelInput.vue"
import { sendCode, phone } from "@/features/authorization/input-number"


export default {
    name: 'input-phone-number',
    components: {
        VueTelInput,
    },
    setup: () => ({
        sendCode,
        phone
    }),
    methods: {
        setCountryCode(country) {
            this.phone.defaultCountryCode = country.dialCode;
        },
        validateNumber(phone) {
            this.phone.valid = phone.valid;
        },
    },
}

</script>