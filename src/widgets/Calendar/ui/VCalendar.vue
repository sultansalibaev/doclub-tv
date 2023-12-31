<template>
    <div class="border border-neutral-300 rounded-xl overflow-hidden select-none min-w-[326px]">
        <table class="
            rounded-xl border-[1px] overflow-hidden
            w-full bg-white

            [&_th]:w-[calc(100%/7)]
            [&_th]:text-neutral-500

            [&_tr>*]:border
            [&_tr>*]:border-neutral-300
            [&_tr>*]:h-[clamp(52px,72px,72px)]
            [&_tr>*]:font-normal

            [&_td]:text-center
            [&_td]:text-500
        ">
            <thead>
                <tr>
                    <th v-for="(week_day, i) in thead" :key="i">{{ week_day }}</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(curr_date, i) in current_date" :key="i">
                    <template v-for="date in curr_date" :key="date">
                        <td
                            class="relative"
                            :class="{
                                '!text-100 pointer-events-none': month != date.DATE.format('Y-m'),
                                '!bg-neutral-300 !text-primary-600': currentDateValueOf === date.DATE.valueOf(),
                            }"
                        >
                            {{ date.DATE.getDate() }}
                            <div class="absolute top-2 right-2 w-2 h-2 rounded-full bg-primary-600" v-if="events[date.DATE.valueOf()]"></div>
                        </td>
                    </template>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script setup lang="ts">
import { defineOptions, PropType, watch, reactive, ref } from "vue"

defineOptions({
    name: 'v-calendar',
})

const thead = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
const date = new Date('2023-09-03'); // new Date().format("Y-m-d")
const current_date = reactive(ref([]));
const currentDateValueOf = date.valueOf();

const props = defineProps({
    month: {
        type: String,
        required: false,
        default: new Date('2023-09-03').format("Y-m"),
    },
    events: {
        type: Object as PropType<Record<number, true>>,
        required: true,
    },
});


function createCurrentDateRange() {
    
    current_date.value = [];
    let temp_current_date = new Date(new Date(props.month).format("Y-m"));
    
    let minus_days = temp_current_date.getDay()
    
    if (minus_days == 0) minus_days = 7
    temp_current_date.minus('date', minus_days)
    
    for (let i = 0; i < 6; i++) {
        let week_dates = [];
        for (let i = 0; i < 7; i++) {
            let date = temp_current_date.plus('date', 1).format("Y-m-d");
            
            let temp_obj = {
                date,
                DATE: new Date(date),
                // selected: this.between_dates[date] ?? null,
            };
            
            week_dates.push(temp_obj)
        }
        current_date.value.push(week_dates)
    }

    if (current_date.value.at(-1).every(date => (props.month != date.DATE.format('Y-m')))) {
        current_date.value.pop()
    }
}

createCurrentDateRange();

watch(() => props.month, () => {
    createCurrentDateRange();
})



</script>