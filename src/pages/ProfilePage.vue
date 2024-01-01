<template>
    <div class="flex">
        <v-sidebar />
        <div class="
            flex flex-col w-full pb-[50px] pr-[42px] pl-15 pt-[22px] h-[100vh]
            overflow-y-scroll overflow-x-hidden main-scrollbar
            border-[10px] border-l-[0px] [@media(max-width:500px)]:border-r-0 border-transparent
            mobile-screen:p-[10px_22px_22px_32px] [@media(max-width:500px)]:pr-8 mobile-screen:border-b-[80px]"
            :class="{
                '!w-0 !border-0 !p-0': menu_modal
            }"
        >
            <v-header class="mb-8" />
            <div class="flex [@media(max-width:1205px)]:flex-wrap">
                <div class="flex flex-col gap-8 w-full">
                    <div class="py-4">
                        <h4 class="text-500 mb-6">Your page</h4>
                        <div class="flex gap-8 [@media(max-width:1650px)]:flex-wrap">
                            <div class="flex flex-col w-full gap-8">
                                <v-personal />
                                <referral-link />
                            </div>
                            <div class="flex flex-col w-full">
                                <v-rating />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <v-footer class="mobile-screen:flex" />
        </div>
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
    name: 'MainPage',
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
