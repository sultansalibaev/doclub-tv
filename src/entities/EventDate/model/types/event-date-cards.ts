import { BadgesType } from "@/shared/ui/Badge";

export interface EventDateCard {
    badges: BadgesType[],
    title: string,
    description: string,
    from_to: string,
}
export interface EventDateSchema {
    date: Date,
    cards: EventDateCard[],
}