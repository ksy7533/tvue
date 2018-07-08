<template>
    <section class="wrapMainHot">
        <MainVideo v-bind:item="currentVideo"></MainVideo>

        <div class="hotList">
            <!-- <button class="arrow prev"><i class="fas fa-angle-left"></i></button> -->
            <ul class="list">
                <li v-for="(item, index) in arrData" v-bind:key="index">
                    <a v-on:click="setCurrentVideo(item)">
                        <span class="wrapImg"><img v-bind:src="item.img_src" alt=""></span>
                    </a>
                </li>
            </ul>
            <!-- <button class="arrow next"><i class="fas fa-angle-right"></i></button> -->
        </div>
    </section>
</template>

<script>
import MainVideo from './MainVideo.vue'
import loadData from 'mixins/loadData.js'
import Constant from 'constant'

export default {
    mixins: [loadData],

    mounted(){
        this.getData(Constant.VIDEO_URL, {
            key : Constant.YOUTUBE_API_KEY,
            chart : 'mostPopular',
            regionCode : 'kr',
            part : 'snippet,contentDetails,statistics',
            maxResults : '10'
        }, this.arrData);
    },

    watch :{
        arrData : function(data){
            this.currentVideo = data[0];
        }
    },

    data(){
        return {
            arrData : [],
            currentVideo : {}
        }
    },

    methods: {
        setCurrentVideo(data){
            this.currentVideo = data;
        }
    },

    components : {
        MainVideo
    }
}
</script>

<style lang="scss" scoped>
@import "../../../styles/variables";
@import "../../../styles/mixin";
@import "../../../styles/extend";

.wrapMainHot{
    padding:0 40px;
    background-color:#000;

    .hotList{
        position: relative;
        box-sizing: border-box;
        margin:0 auto;
        // width:1260px;

        .arrow{
            position: absolute;
            top:40px;
            color:#fff;
            font-size:60px;
            background-color:#000;
            border:0;

            &.prev{
                left:0px;
            }

            &.next{
                right:0px;
            }
        }

        .list{
            &:after{
                @extend .clear;
            }

            li{
                float:left;
                // margin-left:.32%;
                // width:16.4%;
                width:10%;
                // max-height:100%;

                &:first-child{
                    margin-left:0;
                }

                a{
                    .wrapImg{

                        img{
                            width:100%;
                            height:100%;
                        }
                    }
                }
            }
        }
    }
}
</style>