<template>
    <div class="listHot">
        <slot name="title"></slot>
        <swiper :options="swiperOption">
            <swiper-slide v-for="(item, index) in contents" v-bind:key="index">
                <router-link class="link" v-bind:to="{ name: 'playVideo' }" v-on:click.native="changeContainer({videoId:item.id, channelId:item.channelId, title:item.title})">
                    <p class="wrapImg">
                        <img v-bind:src="item.img_src" alt="">
                        <span class="playTime">{{item.duration}}</span>
                    </p>
                    <p class="tit">{{item.title}}</p>
                    <p class="channelTit">{{item.channelTitle}}</p>
                    <p class="date">{{item.date}}</p>
                </router-link>
            </swiper-slide>
            <div class="swiper-button-prev" slot="button-prev"><i class="fas fa-angle-left"></i></div>
            <div class="swiper-button-next" slot="button-next"><i class="fas fa-angle-right"></i></div>
        </swiper>
    </div>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
    props : ['contents'],
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
            }
        }
    },

    components: {
        swiper,
        swiperSlide
    },

    methods: {

        changeContainer : function(obj){
            this.$router.push({name:'playVideo', params: {videoId: obj.videoId, channelId: obj.channelId}});
            
            // this.$store.commit('changeContainer', {
            //     currentVideoId: obj.videoId,
            //     currentChannelId: obj.channelId,
            //     currentVideoTitle: obj.title,
            //     containerValue: 'playVideo'
            // });
        }
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

.wrapImg{
    position: relative;
}

.wrapImg:after{
    content:'';
    display: block;
    position: absolute;
    top:0;
    left:0;
    width:200px;
    height:120px;
    background-color:rgba(0, 0, 0, 0.25);
    border-radius: 5px;
}

.wrapImg img{
    width:200px;
    height:120px;
    border-radius: 5px;
}

.wrapImg .playTime{
    position: absolute;
    bottom:10px;
    right:10px;
    display: inline-block;
    padding:3px;
    color:#fff;
    font-size:11px;
    background:rgba(0, 0, 0, 0.6);
    border-radius:3px;
}

.link{
    text-decoration:none;
    cursor: pointer;
}

.link .tit{
    margin-top:5px;
    line-height:18px;
    color:#000;
    font-size:14px;
    font-weight:bold;
    max-height:36px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp:2;
    -webkit-box-orient: vertical;
    word-wrap:break-word; 
}

.link .channelTit{
    line-height:18px;
    margin-top:5px;
    padding-right:20px;
    color:#848c9c;
    font-size:12px;
    height:18px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp:1;
    -webkit-box-orient: vertical;
    word-wrap:break-word; 
}

.link .date{
    line-height:12px;
    margin-top:5px;
    padding-right:20px;
    color:#848c9c;
    font-size:12px;
    height:12px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp:1;
    -webkit-box-orient: vertical;
    word-wrap:break-word; 
}
</style>
