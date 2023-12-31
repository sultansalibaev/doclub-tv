<template>
    <component :is="mode">
        <template v-for="(value, name) in $slots" :[name]="value">
            <slot :name="name"></slot>
        </template>
    </component>
</template>

<script lang="ts">
import { PropType } from 'vue';
import NavCard from './NavCard.vue';
import ModuleCard from './ModuleCard.vue';

type CardMode = 'nav-card' | 'module-card'

export default {
    name: 'v-card',
    components: {
        NavCard,
        ModuleCard,
    },
    props: {
        mode: {
            type: String as PropType<CardMode>,
            required: true,
        },
    },
}

</script>