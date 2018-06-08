<template>
    <div class="listHot">
        <slot name="title"></slot>
        <swiper :options="swiperOption">
            <swiper-slide v-for="(item, index) in arrData" v-bind:key="index">
                <VideoItem v-bind:itemData="item"></VideoItem>
            </swiper-slide>
            <div class="swiper-button-prev" slot="button-prev"><i class="fas fa-angle-left"></i></div>
            <div class="swiper-button-next" slot="button-next"><i class="fas fa-angle-right"></i></div>
        </swiper>
    </div>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import { loadData } from '../../../mixins/loadData.js'
import VideoItem from '../../CommonComp/videoItem.vue'

var YOUTUBE_API = "AIzaSyBQ1G-JhjIMd0bGr9IeF49NKeQ29roBttY";
var video_url = "https://www.googleapis.com/youtube/v3/videos";
var search_url = "https://www.googleapis.com/youtube/v3/search";

export default {
    props : ['contents'],
    mixins: [loadData],
    created(){
        if(this.contents.url === "video"){
            this.getData(video_url, {
                key : YOUTUBE_API,
                chart : 'mostPopular',
                regionCode : 'kr',
                part : 'snippet,contentDetails,statistics',
                maxResults : '30'
            }, this.arrData);
        }else if(this.contents.url === "search"){
            this.getSearchData(search_url, {
                key : YOUTUBE_API,
                regionCode : 'kr',
                part : 'snippet',
                maxResults : '30',
                type : 'video',

                order : this.contents.order,
                q : this.contents.q

            }, this.arrData);
        }
    },

    data(){
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
            },

            arrData : []
        }
    },

    components: {
        swiper,
        swiperSlide,
        VideoItem
    }
}
</script>

<style scoped>
h2{
    margin-bottom:20px;
    font-size:18px;
    font-weight:600
}

.listHot{
    position: relative;
    padding:20px;
    border-top:1px solid #d9d9d9;
}

.listHot:first-child{
    border-top:none;
}

.swiper-container{
    position: static;
}

.listHot:hover .swiper-button-prev, .listHot:hover .swiper-button-next{
    display: block;
    width:50px;
    height:80px;
    transition: all 0.2s;
}

.swiper-button-prev, .swiper-button-next{
    z-index:100;
    display: none;
    top:115px;
    text-align:center;
    width:0px;
    height:0px;
    line-height:80px;
    font-size:50px;
    font-weight:normal;
    background-color:#fff;
    background-image: none;
    border:1px solid #d9d9d9;
    border-radius: 5px;
    box-shadow: 0px 5px 10px 0px rgba(217,217,217,1);
}

.swiper-button-prev{
    left:-20px;
}

.swiper-button-next{
    right:-20px;
}
</style>
