<template>
    <button
        class="
            flex justify-center items-center rounded-xl transition-all duration-100
        "
        :class="modes[mode][disabled ? 'disabled' : 'default'] + (mode != 'text' ? ' h-11 py-2.5 px-5' : ' h-5 ')"
        :disabled="disabled"
        @click="sendCode"
    >
        <img
            v-if="loading"
            svg-inline
            src="@/assets/svg/loading.svg"
            alt="loading"
            :class="defaultIconClassList + ' animate-spin'"
        />
        <slot
            v-else-if="icon != false"
            name="icon"
            :classList="defaultIconClassList"
        ></slot>
        <!-- <img
            v-if="icon != false"
            svg-inline
            src="@/assets/svg/angle-down.svg"
            alt="angle-down"
        /> -->
        <span>
            <template v-if="text != undefined">{{ text }}</template>
            <slot v-else name="text"></slot>
        </span>
    </button>
</template>

<script>
export default {
    name: 'v-button',
    props: {
        mode: {
            type: String,
            require: false,
            default: 'primary'
        },
        text: {
            type: String,
            require: false,
            default: undefined,
        },
        disabled: {
            type: Boolean,
            require: false,
            default: false
        },
        loading: {
            type: Boolean,
            require: false,
            default: false
        },
        icon: {
            type: Boolean,
            require: false,
            default: false
        },
    },
    data: () => ({
        modes: {
            primary: {
                color: 'text-white',
                'color-disabled': 'text-primary-300',
                default: 'bg-primary-600 text-white hover:bg-primary-700 focus:border-primary-600 focus:border-[1px]',
                disabled: 'bg-primary-200 text-primary-300 pointer-events-none',
            },
            secondary: {
                color: 'text-500',
                'color-disabled': 'text-200',
                default: 'bg-neutral-100 text-500 hover:bg-neutral-200 focus:border-primary-600 focus:border-[1px]',
                disabled: 'bg-neutral-100 text-200 pointer-events-none',
            },
            success: {
                color: 'text-white',
                'color-disabled': 'text-success',
                default: 'bg-success-500 text-white hover:bg-success-600 focus:border-primary-600 focus:border-[1px]',
                disabled: 'bg-success-200 text-success-400 pointer-events-none',
            },
            danger: {
                color: 'text-white',
                'color-disabled': 'text-danger-400',
                default: 'bg-danger-500 text-white hover:bg-danger-600 focus:border-primary-600 focus:border-[1px]',
                disabled: 'bg-danger-300 text-danger-400 pointer-events-none',
            },
            outline: {
                color: 'text-500',
                'color-disabled': 'text-neutral-300',
                default: 'border-neutral-300 text-500 hover:border-neutral-300 focus:border-primary-400 border-[1px]',
                disabled: 'border-neutral-300 text-neutral-300 border-[1px] pointer-events-none',
            },
            text: {
                color: 'text-neutral-700',
                'color-disabled': 'text-200',
                default: 'text-neutral-700 hover:text-400 focus:text-500',
                disabled: 'text-200 pointer-events-none',
            },
        }
    }),
    computed: {
        defaultIconClassList() {
            const sizes = (this.mode == 'text' ? 'h-4 w-4 ' : 'h-6 w-6 ');
            const color = this.modes[this.mode][this.disabled ? 'color-disabled' : 'color'];
            return 'mr-3 ' + sizes + color
        }
    },
}
</script>