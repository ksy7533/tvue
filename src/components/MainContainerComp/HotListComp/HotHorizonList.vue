<template>
    <div class="listHot">
        <slot name="title"></slot>
        <!-- <swiper :options="swiperOption">
            <swiper-slide v-for="(item, index) in arrData" v-bind:key="index">
                <VideoItem v-bind:itemData="item"></VideoItem>
            </swiper-slide>
            <div class="swiper-button-prev" slot="button-prev"><i class="fas fa-angle-left"></i></div>
            <div class="swiper-button-next" slot="button-next"><i class="fas fa-angle-right"></i></div>
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper> -->

        <ul class="list">
            <li v-for="(item, index) in arrData" v-bind:key="index"><VideoItem v-bind:itemData="item"></VideoItem></li>
        </ul>

        <a href="#n" class="btnMore" v-on:click.prevent="goPage()">더보기</a>    
    </div>
</template>

<script>
import 'swiper/dist/css/swiper.css'
// import { swiper, swiperSlide } from 'vue-awesome-swiper'
import { loadData } from '../../../mixins/loadData.js'
import VideoItem from '../../CommonComp/videoItem.vue'

var YOUTUBE_API = "AIzaSyBQ1G-JhjIMd0bGr9IeF49NKeQ29roBttY";
// var video_url = "https://www.googleapis.com/youtube/v3/videos";
var search_url = "https://www.googleapis.com/youtube/v3/search";

export default {
    props : ['contents'],
    mixins: [loadData],
    mounted(){
        this.getSearchData(search_url, {
            key : YOUTUBE_API,
            regionCode : 'KR',
            part : 'snippet',
            maxResults : '6',
            type : 'video',
            order : this.contents.order,
            q : this.contents.q
        }, this.arrData);
    },

    data(){
        return {
            // swiperOption: {
            //     slidesPerView: 6,
            //     slidesPerGroup: 6,
            //     loopedSlides: 6,
            //     loop: true,
            //     speed: 500,
            //     spaceBetween: 10,

                
            //     loopFillGroupWithBlank: true,
            //     navigation: {
            //         nextEl: '.swiper-button-next',
            //         prevEl: '.swiper-button-prev'
            //     },
            //     pagination: {
            //         el: '.swiper-pagination',
            //         type: 'bullets'
            //     },

            //     preloadImages: false,
            //     lazy: true
            // },

            arrData : []
        }
    },

    methods : {
        goPage : function() {
            // console.log(this.contents)
            this.$router.push({ name: 'totalVideoHot', params: { query : this.contents.q, order : this.contents.order } });
        }
    },
    
    components: {
        // swiper,
        // swiperSlide,
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

.list:after{
    content:'';
    display:block;
    clear: both;
}

.list li{
    float:left;
    margin-left:5px;
    width:198px;
    height:200px;
}

.list li:first-child{
    margin-left:0;
}

.btnMore{
    text-decoration: none;
    position: absolute;
    top:25px;
    right:25px;
    color:#999;
    font-size:12px;
}

.btnMore:hover{
    text-decoration: underline;
}

/* .swiper-container{
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

.swiper-pagination{
    position: absolute;
    top:20px;
    left:auto;
    right:10px;
    width:100px;
    height:20px;
} */
</style>
