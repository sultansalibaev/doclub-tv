<template>
    <div class="flex flex-col gap-4">
        <v-img
            only-bg
            class="w-full h-[235px] rounded-xl"
            :src="card.src"
        >
            <div class="flex gap-3 mt-auto p-5 uppercase">
                <v-badge
                    v-for="(badge, i) in card.badges"
                    :key="i"
                    :badge="badge"
                />
            </div>
        </v-img>
        <h4 class="text-500 line-clamp-2 my-3.5" :title="card.title">{{ card.title }}</h4>
        <span
            class=" text-lg leading-6"
            :class="card.viewed ? 'text-success-600' : 'text-200'"
        >
            {{ card.viewed ? 'Viewed' : 'Not viewed' }}
        </span>
    </div>
</template>

<script setup lang="ts">
import { PropType } from "vue"

defineOptions({
    name: 'news-card',
})

const props = defineProps({
    card: Object,
});

</script>
