<template>
    <aside class=" w-full max-w-[470px] ml-8">
        <div class="flex flex-col rounded-2xl bg-neutral-100 p-8 gap-8">
            <div class="flex justify-between items-center">
                <button @click="previousMonth">
                    <icon-svg name="angle-left" class="text-neutral-600" />
                </button>
                <h4 class="text-500 capitalize">{{ month.getMonthName() }}, {{ month.getFullYear() }}</h4>
                <button @click="nextMonth">
                    <icon-svg name="angle-right" class="text-neutral-600" />
                </button>
            </div>
            <v-calendar :month="month?.format('Y-m')" :events="events_by_date" />
            <event-date-list />
        </div>
    </aside>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { VCalendar } from "./Calendar"
import { events, month, EventDateList } from "@/entities/EventDate"

defineOptions({
    name: 'right-sidebar',
})

function previousMonth(): void {
    month.value = month.value.minus('month', 1);
}   
function nextMonth(): void {
    month.value = month.value.plus('month', 1);
}

const events_by_date = computed(() => {
    return events.value.reduce(
        (obj, event) => ({...obj, [event.date.valueOf()]: true}),
        {}
    );
})

</script>