<template>
    <div class="dialog md-modal:[&>*]:max-w-[770px] sm-modal:[&>*]:h-full" v-show="show" @click="toggleModal">
        <dialog open class="w-full md-modal:rounded-xl md-modal:!p-[40px] sm-modal:!px-[32px] sm-modal:!pt-[47px]"  @click.stop>
            <div class="flex justify-between items-start">
                <h4 class="text-500">What should I do if the code doesn't arrive?</h4>
                <button @click.stop="toggleModal" class="cursor-pointer ml-[12px]">
                    <img svg-inline src="@/assets/svg/close.svg" alt="close" class="min-w-[28px] min-h-[28px]" />
                </button>
            </div>
            <ul class="list-disc my-[32px] pl-[20px] space-y-[20px] text-400">
                <ol class="list-item">You may have entered the wrong number or made a mistake in the number. Check everything again.</ol>
                <ol class="list-item">The problem may be on the part of your mobile operator. Contact customer support.</ol>
            </ul>
            <ContactUs/>
        </dialog>
    </div>
</template>

<script>
import ContactUs from '@/components/ContactUs.vue'

export default {
    components: {
        ContactUs,
    },
    props: {
        show: {
            type: Boolean,
            required: true
        }
    },
    methods: {
        toggleModal() {
            this.$emit('toggle-modal');
        },
    },
}
</script>

<style>

.dialog {
    background: rgba(0, 0, 0, 0.25);
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
}

</style>

