<template>
    <section class="wrapMainHot">
        <MainVideo v-bind:item="currentVideo"></MainVideo>

        <div class="hotList">
            <!-- <button class="arrow prev"><i class="fas fa-angle-left"></i></button> -->
            <ul class="list">
                <li v-for="(item, index) in arrData" v-bind:key="index" v-bind:class="{on : onCurrent(item.id)}">
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
        },

        onCurrent(itemId){
            if(itemId === this.currentVideo.id){
                return true
            };
            return false;
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
                width:10%;

                &:first-child{
                    margin-left:0;
                }

                &.on{
                    a{
                        &:after{
                            z-index:1;
                            content: '';
                            display:block;
                            position: absolute;
                            top:0;
                            left:0;
                            width:100%;
                            height:100%;
                            line-height:100%;
                            background-color:rgba(0,0,0,0.4);
                        }

                        &:before{
                            z-index:10;
                            position: absolute;
                            top:50%;
                            left:50%;

                            transform:translate(-50%, -50%);

                            content:'\f144';
                            color:$blue-color;
                            font-family: "Font Awesome 5 Free";
                            font-weight: 900;
                            font-size:40px;
                        }
                    }
                }

                a{
                    display:block;
                    position: relative;
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