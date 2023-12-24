<template>
    <div class="bg-white shadow-default absolute max-w-[370px] p-4 rounded-xl" :class="{
        'opacity-1': timout < visibleTimout,
        'opacity-0': timout == visibleTimout,
        '!opacity-0': timout <= 0,
        'duration-500 transition-opacity': timout > -1,
        'pointer-events-none': timout < 0,
    }" @mouseleave.stop="startIntarval" @mouseenter.stop="stopIntarval">

        <div class="flex justify-between items-center h-[28px] mb-[8px]">
            <h5 class="text-500">{{ title }}</h5>
            <button @click.stop="hidePopup" class="cursor-pointer ml-[12px]">
                <icon-svg name="close" class="text-neutral-700" />
            </button>
        </div>
        <slot></slot>
    </div>
</template>

<script>

export default {
    name: 'v-popup',
    props: {
        visibleTimout: {
            type: Number,
            required: false,
            default: undefined
        },
        modal: {
            type: Boolean,
            required: false,
            default: undefined
        },
        title: {
            type: String,
            required: true
        },
    },
    data() {
        this.interval = setInterval(() => {
            if (!this.hovered) this.timout--;
            if (this.timout <= 0) clearInterval(this.interval);
        }, 1000);
        return {
            timout: this.visibleTimout,
            interval: 0,
            hovered: false,
        }
    },
    methods: {
        startIntarval() {
            this.hovered = false;
        },
        stopIntarval() {
            this.hovered = true;
            this.timout = 2;
        },
        hidePopup() {
            this.timout = -1;
            return;
        },
    },
}
</script>

