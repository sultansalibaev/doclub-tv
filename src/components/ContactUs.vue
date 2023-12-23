<template>
    <div class="flex flex-wrap text-300 gap-[24px] min-w-[311px]">
        <a href="mailto:help@decmed.space" target="_blank" class="inline-flex">
            <icon-svg name="mail" class="h-full min-w-[13.67px] mr-[14px]" />
            help@decmed.space
        </a>
        <a href="#" target="_blank" class="inline-flex">
            <icon-svg name="telegram" class="h-full min-w-[13.67px] mr-[14px]" />
            Chatbot
        </a>
        <slot></slot>
    </div>
</template>

<script>

export default {
}

</script>