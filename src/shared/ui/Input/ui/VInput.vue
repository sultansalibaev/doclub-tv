<template>
    <KeepAlive>
        <component :is="modes[mode]" v-bind="$props" @input="$emit('update:value')">
            <template v-for="(value, name) in $slots" :[name]="value">
                <slot :name="name"></slot>
            </template>
        </component>
    </KeepAlive>
</template>

<script setup lang="ts">
import { PropType, defineOptions } from 'vue';
import InputPhoneNumber from "./InputPhoneNumber.vue"
import InputText from "./InputText.vue"
import InputOTP from "./InputOTP.vue"

defineOptions({
    name: 'v-input',
})

const modes = {
    'text': InputText,
    'phone': InputPhoneNumber,
    'OTP-code': InputOTP,
};

type InputMode = 'text' | 'phone' | 'OTP-code'

const props = defineProps({
    mode: {
        type: String as PropType<InputMode>,
        required: false,
        default: 'text'
    },
    label: {
        type: String,
        required: false,
        default: ''
    },
    value: {
        type: String,
        required: false,
        default: ''
    },
})

</script>