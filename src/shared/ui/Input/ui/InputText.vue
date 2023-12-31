<template>
    <div class="flex flex-col w-full gap-4">
        <span class="text-400" v-if="label != ''">{{ label }}</span>
        <div
            class="flex gap-2 h-11 items-center px-4 rounded-xl border-[1px] [&_svg]:min-w-[16px]"
            :class="{
                'flex-row-reverse': icon == 'right',
                '[&:has(input:focus)]:border-primary-600 border-neutral-400': !disabled && !error,
                'border-danger-500 bg-danger-100 text-danger-700 [&_svg]:!text-danger-700': error && !disabled,
                'border-neutral-300 bg-neutral-100 text-200 [&_svg]:!text-200': disabled,
            }"
        >
            <slot v-if="icon != undefined">
                <icon-svg
                    name="search"
                    class="text-neutral-700"
                    :class="{
                        'text-danger-700': error && !disabled
                    }"
                />
            </slot>
            <input
                :type="type"
                :disabled="disabled || textDisabled"
                class="w-full focus:outline-none truncate bg-inherit"
                :class="{
                    'placeholder-danger-300': error && !disabled,
                    'placeholder-neutral-300': disabled,
                }"
                placeholder="Placeholder"
                :value="value"
                @input="$emit('update:value')"
            >
        </div>
    </div>
</template>

<script lang="ts">
import { InputTypeHTMLAttribute, PropType } from 'vue';
import { IconType } from '../../Badge';

export default {
    name: 'input-otp',
    props: {
        icon: {
            type: String as PropType<IconType>,
            required: false,
            default: 'left',
        },
        label: {
            type: String,
            required: false,
            default: '',
        },
        type: {
            type: String as PropType<InputTypeHTMLAttribute>,
            required: false,
            default: 'text',
        },
        disabled: {
            type: Boolean,
            required: false,
            default: false,
        },
        textDisabled: {
            type: Boolean,
            required: false,
            default: false,
        },
        error: {
            type: Boolean,
            required: false,
            default: false,
        },
        value: String,
    },
}
</script>