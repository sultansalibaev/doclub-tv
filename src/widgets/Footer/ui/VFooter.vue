<template>
    <footer
        class="
            hidden fixed bottom-0 left-0 right-0 pb-5 bg-white
            items-center justify-around h-[80px] shadow-footer rounded-[24px_24px_0_0]
        "
    >
        <icon-svg
            :name="`footer/${icon.name}`"
            v-for="icon in icons"
            :key="icon.name"
            class="transition-colors cursor-pointer"
            @click="selectFooterTab(icon)"
            :class="{
                'text-neutral-400 hover:text-primary-400': icon.name != selected_tab,
                '!text-primary-600 hover:!text-primary-600': icon.name == selected_tab,
            }"
        />
    </footer>
</template>

<script>
import { selected_tab } from "../model/slice/footer"
import { menu_modal } from "@/widgets/Sidebar"

export default {
    name: 'v-footer',
    setup: () => ({
        selected_tab,
        menu_modal,
    }),
    data: () => ({
        icons: [
            {
                name: 'menu',
                to: undefined,
            },
            {
                name: 'home',
                to: '/main',
            },
            {
                name: 'calendar',
                to: '/calendar',
            },
            {
                name: 'person',
                to: '/profile',
            },
        ],
    }),
    methods: {
        selectFooterTab(icon) {
            if (icon.name == 'menu') {
                if (this.selected_tab == 'menu') {
                    this.selected_tab = this.icons.find(icon => icon.to == this.currentPath)?.name ?? '';
                    this.menu_modal = false;
                    return;
                }
                else {
                    this.menu_modal = true;
                }
            }
            this.selected_tab = icon.name;
            if (icon.to != undefined) {
                this.menu_modal = false;
                this.$router.push(icon.to);
            }
        },
    },
    computed: {
        currentPath() {
            return this.$router.currentRoute.value.path
        }
    },
}
</script>
