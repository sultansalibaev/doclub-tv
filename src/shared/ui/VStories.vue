<template>
    <div class="flex h-[136px] !!max-w-[334px] adaptive-max-w">
        
        <swiper
            :style="{
                '--swiper-pagination-color': '#413663',
                '--swiper-pagination-bullet-inactive-color': '#E5E5F8',
                '--swiper-pagination-bullet-inactive-opacity': '1',
                '--swiper-pagination-bullet-size': '12px',
                '--swiper-pagination-bullet-horizontal-gap': '12px',
                '--swiper-pagination-top': '120px',
                'padding-bottom': '16px',
            }"
            :modules="modules"
            :slidesPerView="'auto'"
            :space-between="32"
            :pagination="{ clickable: true }"
            @swiper="onSwiper"
            @slideChange="onSlideChange"
            class="mySwiper"
        >
            <swiper-slide v-for="n in 5" :key="n">
                <v-img :name="`stories/story-${n}.png`" class="min-w-[120px]" />
            </swiper-slide>
        </swiper>
    </div>
</template>

<script>
  // import Swiper core and required modules
  import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from 'swiper/vue';

  // Import Swiper styles
  import 'swiper/css';
  import 'swiper/css/navigation';
  import 'swiper/css/pagination';
  import 'swiper/css/scrollbar';

  // Import Swiper styles
  export default {
    name: 'v-stories',
    components: {
      Swiper,
      SwiperSlide,
    },
    setup() {
      const onSwiper = (swiper) => {
        console.log(swiper);
      };
      const onSlideChange = () => {
        console.log('slide change');
      };
      return {
        onSwiper,
        onSlideChange,
        modules: [Navigation, Pagination, Scrollbar, A11y],
      };
    },
  };
</script>

<style lang="scss">

@mixin adaptiv-font($from, $to, $screenFrom, $screenTo, $className) {
    $addSize: $to - $from;
    $screenTo: $screenTo - $screenFrom;
    .#{$className} {
        max-width: calc(#{$from + px} + #{$addSize} * ((100vw - #{$screenFrom + px}) / #{$screenTo}));
    }
}
@mixin media-width($from, $to) {
  @media (min-width: #{$from}px) and (max-width: #{$to}px) {
    @content; // Вставляем содержимое, переданное при вызове миксина
  }
}
@include media-width(1205, 1920) {
    @include adaptiv-font(334, 968, 1205, 1920, 'adaptive-max-w');
}


.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.swiper-slide {
  width: 120px;
}

/* .swiper-slide:nth-child(2n) {
  width: 120px;
}

.swiper-slide:nth-child(3n) {
  width: 120px;
} */

</style>