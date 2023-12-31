<template>
    <router-link :to="to" class="transition-colors font-normal inline-flex items-center h-10 rounded-xl px-4" :class="{
        'bg-primary-200 !text-primary-600 hover:bg-primary-300 hover:!text-primary-700': !disabled && active,
        '!text-500 hover:!text-400':  !disabled && !active,
        '!text-200': disabled,
    }">
        <slot></slot>
    </router-link>
</template>

<script lang=ts>

export default {
    name: 'nav-item',
    props: {
        active: {
            type: Boolean,
            required: false,
            default: false,
        },
        to: {
            type: String,
            required: true
        },
        disabled: {
            type: Boolean,
            required: false,
            default: false,
        },
    }
}

</script>