import { reactive, ref } from "vue";

const languages = reactive(ref(['English', 'German', 'Spanish']))
const selected_language = reactive(ref(0))
const language_modal = reactive(ref(false))

export {
    languages,
    selected_language,
    language_modal,
}