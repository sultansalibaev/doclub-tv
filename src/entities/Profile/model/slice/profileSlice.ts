import { reactive, ref } from "vue"
import { ProfileSchema } from "../types/profile"

export const profile = reactive(ref<ProfileSchema>({
    full_name: "Giselle Saint Claire",
    notification: ['some notificatino'],
}));