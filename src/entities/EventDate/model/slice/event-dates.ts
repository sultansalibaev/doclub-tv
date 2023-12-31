import { computed, reactive, ref } from "vue"
import { EventDateSchema } from "../types/event-date-cards"

export const month = reactive(ref<Date>(new Date('2023-09-03')));
export const events = computed<EventDateSchema[]>(() => event_dates.value[month.value.format("Y-m")] ?? []);
export const event_dates = reactive(ref<Record<string, EventDateSchema[]>>({
    '2023-09': [
        {
            date: new Date('2023-09-03'),
            cards: [
                {
                    badges: [
                        {
                            mode: 'online',
                            name: 'Offline',
                        },
                        {
                            mode: 'new',
                            name: 'Cardiology',
                        },
                    ],
                    title: 'Patient with AF and diabetes mellitus. How to improve the life prognosis of a comorbid patient?',
                    description: 'Webinar: "Direct line with an expert". The influence of the modern nature of nutrition on cardiovascular complications: Russian accents of the section "Epidemiology and prevention"',
                    from_to: '10:00 - 18:00',
                },
            ]
        },
        {
            date: new Date('2023-09-04'),
            cards: [
                {
                    badges: [
                        {
                            mode: 'online',
                            name: 'Offline',
                        },
                        {
                            mode: 'new',
                            name: 'Cardiology',
                        },
                    ],
                    title: 'Patient with AF and diabetes mellitus. How to improve the life prognosis of a comorbid patient?',
                    description: 'Webinar: "Direct line with an expert". The influence of the modern nature of nutrition on cardiovascular complications: Russian accents of the section "Epidemiology and prevention"',
                    from_to: '10:00 - 18:00',
                },
                {
                    badges: [
                        {
                            mode: 'online',
                            name: 'Offline',
                        },
                        {
                            mode: 'new',
                            name: 'Cardiology',
                        },
                    ],
                    title: 'How to improve the life prognosis of a comorbid patient?',
                    description: 'Webinar: "Direct line with an expert". The influence of the modern nature of nutrition on cardiovascular complications: Russian accents of the section "Epidemiology and prevention"',
                    from_to: '10:00 - 18:00',
                },
            ]
        },
    ],
}));
