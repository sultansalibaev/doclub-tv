<template>
    <div
        class="inline-flex items-center gap-2 rounded-xl py-[6px] px-2.5"
        :class="modes[badge.mode] + (badge.icon == 'right' ? ' flex-row-reverse' : '')"
    >
        <slot v-if="badge.icon != undefined">
            <icon-svg name="placeholder" />
        </slot>
        <small>{{ badge.name }}</small>
    </div>
</template>

<script lang="ts">
import { PropType } from 'vue';
import { BadgesType } from '../model/types/badge'



export default {
    name: 'v-badge',
    props: {
        badge: {
            type: Object as PropType<BadgesType>,
            required: true
        }
    },
    data() {
        return {
            modes: {
                new: 'bg-neutral-200 text-neutral-500',
                special: 'bg-warning-300 text-warning-600',
                speciality: 'bg-danger-100 text-danger-400',
                premium: 'bg-accent-1 text-warning-200',
                more: 'bg-white text-neutral-500',
                online: 'bg-primary-200 text-primary-600',
                expert: 'bg-500 text-100',
            }
        };
    },
}
</script>