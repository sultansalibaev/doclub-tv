import { computed, reactive, ref } from "vue";
import { updateSecretCode } from "./secret-code";

export interface PhoneType {
    value: string;
    defaultCountryCode: number;
    valid: boolean | undefined;
}

export const phone = reactive(ref<PhoneType>({
    value: '',
    defaultCountryCode: 971,
    valid: undefined,
}));

export const phoneNumber = computed(() => {
    return `+${phone.value.defaultCountryCode} ${phone.value.value}`;
})

export function sendCode() {
    updateSecretCode()
}

