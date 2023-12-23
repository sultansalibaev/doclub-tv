<template>
    <div
        @click.stop="toggleLanguageModal"
        v-click-outside="hideLanguageModal"
        class="flex items-center cursor-pointer"
    >
        <icon-svg
            name="angle-down"
            class="text-primary-500 mr-[7px] pt-px items-center h-[6px] max-w-[10px]"
        />
        <small class="text-primary-500 select-none">{{ languages[selected_language] }}</small>
        <v-dropdown
            class="mt-2 top-full w-[270px] right-0 mx-auto"
            @hide-dropdown="hideLanguageModal"
            @select-option="selectLanguage"
            :options="languages"
            title="🏳️  Select a language"
            :modal="language_modal"
        />
    </div>
</template>

<script>
import { languages, selected_language, language_modal } from "@/entities/language"

export default {
    name: 'v-select-language',
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