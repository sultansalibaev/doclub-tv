export function randomNumber(min: number, max: number) {
    return Math.floor(Math.random() * (max - min) + min);
}

export function copyClipboard(text: string) {
    navigator.clipboard.writeText(text);
}