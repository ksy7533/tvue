<template>
    <div class="listHot">
        <slot name="title"></slot>
        <swiper :options="swiperOption">
            <swiper-slide v-for="item in contents" v-bind:key="item.no">
                <p>{{item.title}}</p>
            </swiper-slide>
            <div class="swiper-button-prev" slot="button-prev"></div>
            <div class="swiper-button-next" slot="button-next"></div>
        </swiper>
    </div>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
    props : ['contents'],
    data() {
        return {
            swiperOption: {
                slidesPerView: 3,
                slidesPerGroup: 3,
                loop: true,
                speed: 500,
                loopFillGroupWithBlank: true,
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev'
                }
            }
        }
    },

    components: {
        swiper,
        swiperSlide
    }
}
</script>

<style>
h2{
    font-size:18px
}
.listHot{
    padding:20px;
}
</style>
