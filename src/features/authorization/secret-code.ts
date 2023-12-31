import { randomNumber } from "@/shared/utils";
import { computed, nextTick, reactive, ref } from "vue";

interface SecretCodeType {
    errors: Set<unknown> & Omit<Set<unknown>, keyof Set<any>>;
    count: number;
    value: string | null;
}

export const secretCode = reactive(ref<SecretCodeType>({
    errors: new Set(),
    count: 0,
    value: null,
}));

type OTPCodeType = (number | null)[]

export const OTP_code = reactive(ref<OTPCodeType>([null, null, null, null]));
export const retryTimeout = reactive(ref<number>(0));

export function resetSecretCode() {
    secretCode.value = {
        errors: new Set(),
        count: 0,
        value: null,
    };
}

export function updateSecretCode() {
    secretCode.value.value = Array(4).fill(null).map(_ => randomNumber(0, 9)).join('');
    secretCode.value.count++;
    console.log('new secretCode', secretCode.value.value);
    OTP_code.value = [null, null, null, null];
    retryTimeout.value = 0;
}

export const secretCodeIsInvalid = computed(() => {
    return OTP_code.value.join('').length == 4 && OTP_code.value.join('') != secretCode.value.value
})

export function updateRetryTimeout() {

    if (retryTimeout.value > 0) return;

    updateSecretCode();
    retryTimeout.value = 5;

    let interval = setInterval(() => {
        retryTimeout.value--;
        if (retryTimeout.value <= 0) clearInterval(interval);
    }, 1000);

    updateSecretCodeInput()
}

export function updateSecretCodeInput() {
    let oldSecretCode = secretCode.value.value;
    secretCode.value.value = null;

    nextTick(() => {
        secretCode.value.value = oldSecretCode;
    });
}

export const wrongNumberError = computed(() => {
    if (secretCode.value.errors.size > 2) return true;
    const lastErrorCode = Array.from(secretCode.value.errors).pop();
    return secretCode.value.errors.size == 2 && (
        retryTimeout.value <= 0 || (
            lastErrorCode != secretCode.value.value
        )
    )
});
