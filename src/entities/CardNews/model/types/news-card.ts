import { BadgesType } from "@/shared/ui/Badge";
import { reactive, ref } from "vue";

export interface NewsCardSchema {
    src: string,
    title: string,
    badges: BadgesType[],
    viewed: boolean,
}
