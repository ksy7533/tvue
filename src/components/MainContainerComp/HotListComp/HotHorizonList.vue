<template>
    <div class="listHot">
        <slot name="title"></slot>
        <swiper :options="swiperOption">
            <swiper-slide v-for="item in contents" v-bind:key="item.id">
                <a v-bind:href="item.id" class="link">
                    <p class="wrap_img"><img v-bind:src="item.img_src" alt=""></p>
                    <p class="tit">{{item.title}}</p>
                </a>
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
                slidesPerView: 6,
                slidesPerGroup: 6,
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
    margin-bottom:20px;
    font-size:18px;
    font-weight:600
}
.listHot{
    padding:15px 20px;
    border-top:1px solid #d9d9d9;
}

.listHot:first-child{
    border-top:none;
}

.wrap_img img{
    width:200px;
    height:120px;
}
.link{
    text-decoration:none;
}
.link .tit{
    line-height:18px;
    color:#000;
    font-size:14px;
    max-height:36px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp:2;
    -webkit-box-orient: vertical;
    word-wrap:break-word; 
}
</style>
