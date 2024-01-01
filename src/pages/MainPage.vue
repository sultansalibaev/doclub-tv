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
                    <div class="pt-4">
                        <h4 class="text-500 mb-6">Stories</h4>
                        <v-stories />
                    </div>
                    <div class="py-4">
                        <h4 class="text-500 mb-6">Navigation</h4>
                        <div class="flex gap-[30px] [@media(max-width:1650px)]:flex-wrap [&>*]:h-full">
                            <v-card
                                mode="nav-card"
                                to="/education"
                                icon-name="list"
                                title="Education"
                                description="All modules"
                                icon-class="bg-warning-400 text-white"
                            />
                            <v-card
                                mode="nav-card"
                                to="/events"
                                icon-name="event"
                                title="Events"
                                description="Coming events"
                                icon-class="bg-danger-300 text-neutral-700"
                            />
                            <v-card
                                mode="nav-card"
                                to="/media"
                                icon-name="media"
                                title="Media"
                                description="Event notes"
                                icon-class="bg-primary-300 text-neutral-700"
                                @click="$refs.media.scrollIntoView({ behavior: 'smooth' });"
                            />
                        </div>
                        <h4 class="text-500 mb-6 mt-8">Your modules</h4>
                        <div class="flex gap-[30px] [@media(max-width:1650px)]:flex-wrap [&>*]:max-w-[615px]">
                            <v-card
                                mode="module-card"
                                :badges="badges"
                                icon="right"
                                title="Antibacterial therapy. Pediatric pulmonology"
                            >
                                <span class="text-300">Online test</span>
                                <icon-svg name="bullet" class="text-300" />
                                <span class="text-300">materials</span>
                            </v-card>
                            <v-card
                                mode="module-card"
                                :badges="badges"
                                title="Antibacterial therapy. Pediatric pulmonology"
                            >
                                <span class="text-300">Online test</span>
                                <icon-svg name="bullet" class="text-300" />
                                <span class="text-300">materials</span>
                            </v-card>
                        </div>
                    </div>
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
                    <div class="py-4" ref="media">
                        <div class="flex justify-between items-center mb-6">
                            <h4 class="text-500">Recommended media</h4>
                            <router-link to="/media" class="text-500 underline">Read more</router-link>
                        </div>
                        <card-news-list />
                    </div>
                </div>
                <right-sidebar class="[@media(max-width:1205px)]:max-w-none [@media(max-width:1205px)]:ml-0  [@media(max-width:1205px)]:mt-8 [@media(max-width:500px)]:!mx-[-32px] [@media(max-width:500px)]:!w-[100vw]" />
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
        }
    },
    data() {
        return {
            badges: [
                {
                    name: 'Pediatrics',
                    mode: 'online',
                },
                {
                    name: 'Pulmonology',
                    mode: 'new',
                },
            ]
        };
    },
};
</script>
