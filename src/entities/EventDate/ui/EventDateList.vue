<template>
    <template v-if="currentDate.valueOf() == getDateValueOf(events[0]?.date)">
        <h4 class="text-500">Events</h4>
        <h5 class="text-500">
            {{ events[0]?.date?.format('d', true) }} {{ events[0]?.date.getMonthName() }}
        </h5>
        <event-date :event_card="event_card" :date="events[0]?.date" v-for="(event_card, i) in events[0].cards" :key="i"/>
    </template>
    <template v-if="events.length > 1">
        <h4 class="text-500">Coming events</h4>
        <template v-for="(event, i) in events.slice(1)" :key="i">
            <h5 class="text-500">
                {{ event?.date?.format('d', true) }} {{ event?.date.getMonthName() }}
            </h5>
            <event-date :event_card="event_card" :date="event?.date" v-for="(event_card, i) in event.cards" :key="i"/>
        </template>
    </template>
</template>

<script setup lang="ts">
import EventDate from "./EventDate.vue"
import { events } from "../model/slice/event-dates"

defineOptions({
    name: 'event-date-list',
})

function getDateValueOf(date: Date): number {
    if (date instanceof Date) {
        return new Date(date.format("Y-m-d")).valueOf();
    }
    return 0;
}

const currentDate = new Date('2023-09-03');

</script>

<style>

.text-calendar-event-description {
    color: #9F98B3;
}

</style>