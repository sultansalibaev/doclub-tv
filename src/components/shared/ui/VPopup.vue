<template>
    <div
        class="popup absolute max-w-[370px] p-4 rounded-xl "
        :class="{
            'duration-500': visibleTimout != undefined,
            'hidden': modal === false,
            'opacity-1': (timout < visibleTimout && visibleTimout != undefined) || modal === true,
            'opacity-0': (timout == visibleTimout && visibleTimout != undefined) || modal === false,
            '!opacity-0 pointer-events-none': timout <= 0 && visibleTimout != undefined,
            'transition-opacity': visibleTimout != undefined,
        }"
        @mouseleave.stop="startIntarval"
        @mouseenter.stop="stopIntarval"
        v-click-outside="visibleTimout == undefined ? hidePopup : false"
    >
        
        <div class="flex justify-between items-center h-[28px] mb-[8px]">
            <h5 class="text-500">{{ title }}</h5>
            <button @click.stop="hidePopup" class="cursor-pointer ml-[12px]">
                <img svg-inline src="@/assets/svg/close.svg" alt="close" class="text-neutral-700" />
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
        if (this.visibleTimout != undefined) {
            this.interval = setInterval(() => {
                if (!this.hovered) this.timout--;
                if (this.timout <= 0) clearInterval(this.interval);
            }, 1000);
        }
        return {
            timout: this.visibleTimout,
            interval: 0,
            hovered: false,
        }
    },
    methods: {
        startIntarval() {
            if (this.visibleTimout == undefined) return;
            this.hovered = false;
        },
        stopIntarval() {
            if (this.visibleTimout == undefined) return;
            this.hovered = true;
            this.timout = 2;
        },
        hidePopup() {
            if (this.visibleTimout != undefined) {
                this.timout = 0;
                return;
            }
            this.$emit('hidePopup')
        },
    },
}
</script>

<style>

.popup {
    background: white;
    box-shadow: 0px 0px 15px 0px rgba(153, 153, 153, 0.20);
}

</style>

