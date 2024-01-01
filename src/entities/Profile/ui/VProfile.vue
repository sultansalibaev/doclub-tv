<template>
    <div class="flex items-center gap-4">
        <span class="text-500 mobile-screen:hidden">{{ profile.full_name }}</span>
        <v-img name="avatar/profile-avatar.png" class="w-8 h-8" />
        <span class="relative">
            <icon-svg name="bell" class="text-accent-1" />
            <icon-svg v-if="profile.notification.length" name="notice" class="absolute top-[-2px] right-[-2px] text-danger-600" />
        </span>
    </div>
</template>


<script setup lang="ts">
import { profile } from "../model/slice/profileSlice"

defineOptions({
    name: 'v-profile',
})

</script>