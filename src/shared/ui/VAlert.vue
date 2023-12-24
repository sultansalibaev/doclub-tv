<template>
    <span :class="`${classes[type]} flex items-center`">
        <slot>
            <icon-svg :name="type == 'success' ? 'alert-success' : 'alert-danger'" class="mr-[5px]" />
        </slot>
        {{ message ?? type }}
    </span>
</template>

<script setup lang="ts">
import { PropType, ref } from 'vue';

type AlertType = 'danger' | 'warning' | 'info' | 'success'

defineOptions({
    name: 'v-alert',
})

const props = defineProps({
    message: String,
    type: {
        type: String as PropType<AlertType>,
        required: true
    }
})

const classes = ref<Record<AlertType, string>>({
    danger: 'text-danger-600',
    warning: 'text-warning-700',
    info: 'text-accent-2',
    success: 'text-success-600',
})
</script>