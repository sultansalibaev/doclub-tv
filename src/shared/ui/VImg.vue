<template>
    <div class="inline-flex">
        <img class="h-full select-none" :class="imgClass" :src="image" :alt="alternative">
    </div>
</template>

<script>
export default {
    name: 'v-img',
    props: {
        image: {
            type: String,
            required: true
        },
        alternative: {
            type: String,
            required: false,
            default: 'Картинка не найден!'
        },
        imgClass: {
            type: String,
            required: false,
            default: ''
        }
    }
}
</script>
