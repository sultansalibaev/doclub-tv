<template>
    <button
        @click.stop="toggleLanguageModal"
        v-click-outside="hideLanguageModal"
        class="flex items-center cursor-pointer focus:outline-none outline-primary-500 [&:focus>svg]:text-primary-500 [&:focus>small]:text-primary-500"
    >
        <icon-svg
            name="angle-down"
            class="mr-[7px] pt-px items-center h-[6px] max-w-[10px] transition-colors"
            :class="
                disabled ? 'text-200' : 'text-400 hover:text-500 focus:text-primary-500'
            "
        />
        <small
            class="select-none transition-colors"
            :class="
                disabled ? 'text-200' : 'text-400 hover:text-500 focus:text-primary-500'
            "
        >{{ languages[selected_language] }}</small>
        <v-dropdown
            :class="selectPosition + ' w-[270px] mx-auto text-left'"
            @hide-dropdown="hideLanguageModal"
            @select-option="selectLanguage"
            :options="languages"
            title="🏳️  Select a language"
            :modal="language_modal"
        />
    </button>
</template>

<script>
import { languages, selected_language, language_modal } from "../model/slice/language"

export default {
    name: 'select-language',
    props: {
        disabled: {
            type: Boolean,
            default: false
        },
        selectPosition: {
            type: String,
            default: 'mt-2 top-full right-0'
        },
    },
    setup: () => ({
        languages,
        selected_language,
        language_modal,
    }),
    methods: {
        toggleLanguageModal() {
            this.language_modal = !this.language_modal;
        },
        hideLanguageModal() {
            this.language_modal = false;
        },
        selectLanguage(_, index) {
            this.selected_language = index;
        },
    },
}
</script>