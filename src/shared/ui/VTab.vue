<template>
    <button
        class="rounded-xl transition-colors font-normal py-3 px-5"
        :class="{
            'bg-neutral-200 text-300 hover:bg-neutral-300 hover:text-400': !active,
            'bg-primary-200 text-primary-600 hover:bg-primary-300 hover:text-primary-700': active,
        }"
    >
        <slot></slot>
    </button>
</template>

<script lang="ts">

export default {
    name: 'v-tab',
    props: {
        active: {
            type: Boolean,
            required: false,
            default: false,
        },
    }
}

</script>