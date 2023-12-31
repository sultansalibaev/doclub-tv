<template>
    <div class="flex h-[120px] gap-8 max-w-[326px]">
        <v-img v-for="n in 5" :key="n" :name="`stories/story-${n}.png`" class="min-w-[120px] rounded-lg overflow-hidden" />
    </div>
</template>

<script>

export default {
    name: 'v-stories'
}

</script>