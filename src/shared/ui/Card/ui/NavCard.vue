<template>
    <div class="flex flex-col gap-3 p-4 rounded-2xl w-full border-[1px] border-neutral-300">
        <div class="flex justify-center items-center w-8 h-8 rounded-full" :class="iconClass">
            <icon-svg :name="iconName" />
        </div>
        <div class="flex flex-col gap-[6px]">
            <span class="text-500 font-semibold">{{ title }}</span>
            <span class="text-400 truncate" :title="description">{{ description }}</span>
        </div>
        <router-link :to="to" class="flex justify-between items-center" :class="{
            '[&>*]:text-link-default [&:visited>*]:text-link-visited': linkColor
        }">
            <span class="text-500">Open</span>
            <icon-svg name="arrow-right" class="text-neutral-700 min-w-[16px] min-h-[16px]" />
        </router-link>
    </div>
</template>

<script lang="ts">

export default {
    name: 'nav-card',
    props: {
        iconName: {
            type: String,
            required: true,
        },
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        iconClass: {
            type: String,
            required: true,
        },
        to: {
            type: String,
            required: true,
        },
        linkColor: {
            type: Boolean,
            required: false,
            default: true,
        },
    }
}

</script>