<template>
    <div class="flex">
        <v-sidebar />
        <right-sidebar
            class="
                w-full mobile-screen:!border-b-[80px] ml-0 h-[100vh] max-w-[750px] !mx-auto
                aside-scrollbar [&>*]:rounded-none [&>*]:p-[18px_18px_18px_32px]
                border-r-[6px] border-t-[6px] border-neutral-100 bg-neutral-100
            "
            :class="{
                '!w-0 !border-0 !p-0': menu_modal
            }"
        />
        <v-footer class="mobile-screen:flex" />
    </div>
</template>

<script lang="ts">
import { VSidebar, menu_modal } from "@/widgets/Sidebar"
import VHeader from "@/widgets/VHeader.vue"
import RightSidebar from "@/widgets/RightSidebar.vue";
import VPersonal from "@/widgets/VPersonal.vue";
import { VFooter } from "@/widgets/Footer";
import VRating from "@/widgets/VRating.vue";
import ReferralLink from "@/widgets/ReferralLink.vue";
import { CardNewsList } from "@/entities/CardNews";

export default {
    name: 'SidebarPage',
    components: {
        VSidebar,
        VHeader,
        RightSidebar,
        VPersonal,
        VFooter,
        VRating,
        ReferralLink,
        CardNewsList,
    },
    setup() {
        return {
            menu_modal,
        };
    },
};
</script>
