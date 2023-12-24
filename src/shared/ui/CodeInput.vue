<template>
    <div class="text-400 mb-4 flex">
        <label for="phone-number">The code was sent.</label>
        <button class="text-primary-600 underline ml-2" @click="resetSecretCode">Change the number</button>
    </div>
    <div class="flex gap-4 text-400 [&:has(*:focus)>*]:border-primary-600" tabindex="0" v-focus @keydown.enter="updateRetryTimeout" @keydown.esc="resetSecretCode">
        <input type="number" id="phone-number" :min="0" :max="9" required class="
            text-center focus:outline-none w-full appearance-none border-[1px] rounded-xl py-3 px-4 transition-colors duration-100
        " :class="secretCodeIsInvalid ? '!border-danger-500 bg-danger-100 text-danger-700' : 'border-neutral-300 text-neutral-600'
            "
            @focus="allPreviousIsNull($event, index)" :value="code"
            @input="update_OTP_code($event, index)" @keydown="handleInput" v-for="(code, index) in OTP_code"
            :key="index">
    </div>
</template>

<script>
import { secretCode, OTP_code, resetSecretCode, secretCodeIsInvalid, updateRetryTimeout } from "@/features/authorization"
export default {
    name: 'code-input',
    setup: () => ({
        secretCode,
        OTP_code,
        resetSecretCode,
        secretCodeIsInvalid,
        updateRetryTimeout,
    }),
    methods: {
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
            let temp_value = value;
            value = parseInt(temp_value);
            this.OTP_code[index] = value > 9 ? parseInt(('' + value).at(-1)) : value;

            if (target.nextElementSibling) target.nextElementSibling.focus();
        },

        allPreviousIsNull(event, index) {
            let isNull = this.OTP_code.slice(0, index).some(num => num == null);

            if (isNull && event.target.previousElementSibling) event.target.previousElementSibling.focus();
        },
    },
}
</script>