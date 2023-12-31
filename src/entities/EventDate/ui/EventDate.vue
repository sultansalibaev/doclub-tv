<template>
    <div class="flex flex-col w-full gap-5 p-8 bg-white rounded-2xl">
        <div class="flex gap-3 uppercase">
            <v-badge
                v-for="(badge, i) in event_card.badges"
                :key="i"
                :badge="badge"
            />
        </div>
        <h5 class="text-500">{{ event_card.title }}</h5>
        <span class="text-calendar-event-description">{{ event_card.description }}</span>
        <div class="flex items-center gap-3 text-300">
            <span>
                {{ date?.get_dmY() }}
            </span>
            <icon-svg name="bullet" />
            <span>{{ event_card.from_to }}</span>
        </div>
        <div class="flex">
            <v-button
                mode="outline"
                text="View details"
            />
        </div>
    </div>
</template>

<script setup lang="ts">
import { PropType } from 'vue';
import { EventDateCard } from "../model/types/event-date-cards"

defineOptions({
    name: 'event-date',
})

const props = defineProps({
    event_card: {
        type: Object as PropType<EventDateCard>,
        required: true,
    },
    date: {
        type: Date,
        required: true,
    },
});

</script>

<style>

.text-calendar-event-description {
    color: #9F98B3;
}

</style>