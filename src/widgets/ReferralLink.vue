<template>
    <div class="flex flex-col gap-7 p-8 rounded-2xl border-[1px] border-neutral-300">
        <h4 class="text-500">Referral link</h4>

        <p class="text-400">Invite your colleagues and get bonuses to your bonus account for their registration</p>
        
        <div class="flex gap-4">
            <v-input
                text-disabled
                icon="right"
                :value="referral_link"
                class="[&_svg]:!text-neutral-700"
            >
                <icon-svg name="edit-alt" class="w-4 h-4 cursor-pointer" />
            </v-input>
            <v-button
                text="Copy link"
                class="mt-auto"
                @click="copyClipboard(referral_link)"
            />
        </div>
    </div>
</template>

<script setup lang="ts">
import { profile, VProfile } from "@/entities/Profile"
import { copyClipboard } from "@/shared/utils";
import { reactive, ref } from "vue";

defineOptions({
    name: 'referral-link',
});

const referral_link = reactive(ref('docmed.space/doc/Giselle#ref_8s7'))

</script>