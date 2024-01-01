<template>
    <div class="flex flex-wrap gap-8">
        <card-news
            v-for="(card, i) in news_card_list"
            :key="i"
            :card="card"
            class="w-[calc(50%-16px)] [@media(max-width:1650px)]:w-full"
        />
    </div>
</template>

<script setup lang="ts">
import CardNews from "./CardNews.vue"
import { news_card_list } from "../model/slice/newsCardListSlice"

defineOptions({
    name: 'card-news-list',
})


</script>