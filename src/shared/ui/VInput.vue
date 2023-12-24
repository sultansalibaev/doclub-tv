<template>
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
</template>

<script setup lang="ts">
import { PropType } from 'vue';

type InputMode = 'text' | 'phone'

const props = defineProps({
    mode: {
        type: String as PropType<InputMode>,
        required: false,
        default: 'text'
    },
    label: {
        type: String,
        required: true,
    }
})

</script>