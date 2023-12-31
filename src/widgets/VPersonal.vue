<template>
    <div class="flex flex-col gap-7 p-8 rounded-2xl border-[1px] border-neutral-300">
        <div class="flex gap-3">
            <v-img name="avatar/profile-avatar.png" class="min-w-[60px] w-15 h-15" />
            <div class="flex flex-col">
                <h5 class="text-500 mb-2">Giselle Saint Claire</h5>
                <small class="text-400">Uzbekistan, Tashkent</small>
            </div>
            <icon-svg name="edit-alt" class="text-neutral-700 ml-auto cursor-pointer" />
        </div>
        <div class="flex gap-4">
            <v-button text="Open" />
            <v-button text="Unpublish profile" mode="secondary" />
        </div>
        <div class="flex gap-4">
            <v-input
                label="Link to your profile"
                text-disabled
                icon="right"
                :value="profile_link"
                @input="updateProfileLink"
                class="[&_svg]:!text-neutral-700"
            >
                <icon-svg name="edit-alt" class="w-4 h-4 cursor-pointer" />
            </v-input>
            <v-button
                text="Copy link"
                mode="secondary"
                class="mt-auto"
                @click="copyClipboard(profile_link)"
            />
        </div>
    </div>
</template>

<script>
import { copyClipboard } from '@/shared/utils';

export default {
    name: 'v-personal',
    setup: () => ({
        copyClipboard,
    }),
    data: () => ({
        profile_link: 'docmed.space/mikheeva_olga'
    }),
    methods: {
        updateProfileLink(event) {
            this.profile_link = event.target.value;
        },
    },
}

</script>