<template>
    <div class="flex flex-col gap-5 p-8 pb-5 rounded-2xl w-full border-[1px] border-neutral-300">
        <div class="flex items-center gap-3">
            <v-badge v-for="(badge, i) in badges" :key="i" :badge="badge" />
        </div>
        <h5 class="text-500 font-semibold line-clamp-2" :title="title">{{ title }}</h5>
        <div class="flex items-center gap-3">
            <slot></slot>
        </div>
    </div>
</template>

<script lang="ts">
import { PropType } from 'vue';

import { BadgesType } from '@/shared/ui/Badge'


export default {
    name: 'module-card',
    props: {
        badges: {
            type: Array as PropType<BadgesType[]>,
            required: true,
        },
        title: {
            type: String,
            required: true,
        },
    }
}

</script>