<template>
    <div class="flex justify-between items-center">
        <h2 class="text-500">{{ pageName }}</h2>
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