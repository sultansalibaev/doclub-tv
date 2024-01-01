<template>
    <div class="flex justify-between items-center">
        <router-link to="/main" class="desktop-screen:hidden">
            <icon-svg name="docmed.space" class="min-h-[23px]" />
        </router-link>
        <h2 class="text-500 whitespace-nowrap mobile-screen:hidden">{{ pageName }}</h2>
        <v-profile has-notification />
    </div>
</template>

<script setup lang="ts">
import { VProfile } from "@/entities/Profile"

const props = defineProps({
    pageName: {
        type: String,
        default: 'Main page'
    },
});

</script>