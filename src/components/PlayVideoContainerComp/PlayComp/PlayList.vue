<template>
    <div class="listPlay" ref="listPlay">
        <p class="tit"><i class="fas fa-align-left"></i> 관련 비디오 리스트</p>
        <ul class="list">
            <li v-for="(item, index) in arrData" v-bind:key="index">
                <a class="link" v-on:click="goPage(item)">
                    <span class="wrapImg"><img v-bind:src="item.img_src" alt=""></span>
                    <span class="txt">
                        <span class="tit">{{item.videoTitle}}</span>
                        <span class="date">{{item.date}}</span>
                    </span>
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
import { loadData } from '../../../mixins/loadData.js'
import moment from 'moment';

var YOUTUBE_API = "AIzaSyBQ1G-JhjIMd0bGr9IeF49NKeQ29roBttY";
var search_url = "https://www.googleapis.com/youtube/v3/search";
var video_url = "https://www.googleapis.com/youtube/v3/videos";

export default {
    mixins: [loadData],

    mounted(){
        const eleList = document.querySelector('.listPlay .list')
        eleList.addEventListener('scroll', (e) => {
            this.isBottom = this.goBottom(e.target);
        });

        this.getSearchData(search_url, {
            key : YOUTUBE_API,
            regionCode : 'kr',
            part : 'snippet',
            maxResults : '30',
            type : 'video',
            relatedToVideoId : this.$route.params.videoId
        }, this.arrData);
    },

    methods : {
        goBottom : function(target){
            const eleList = document.querySelector('.listPlay .list')
            let isBottom = false;
            let scrollY = target.scrollTop;
            let visibleHeight = eleList.clientHeight;
            let totalHeight = eleList.scrollHeight;

            if(totalHeight === scrollY + visibleHeight){
                isBottom = true;
                return isBottom;
            }

            return isBottom;
        },

         getSearchData : function(url, params, arrData){
            var that = this;
            this.$axios.get(url, {
                params
            }).then((response) => {
                if(response.data.nextPageToken){
                    this.isNextPage = true;
                    this.tokenNextPage = response.data.nextPageToken;
                }else{
                    this.isNextPage = false;
                    this.tokenNextPage = "";
                }

                var tempData = [];
                var items = response.data.items;

                if(items.length === 0){
                    this.isEmptyPlayList = true;
                    return;
                }

                items.forEach(function(item){
                    tempData.push(item.id.videoId);
                });

                tempData.forEach(function(videoId){
                    that.getData(video_url, {
                        key : YOUTUBE_API,
                        regionCode : 'kr',
                        part : 'snippet,contentDetails,statistics',
                        id : videoId
                    }, arrData);
                });

            }).catch((ex) => {
                console.log("ERROR !", ex);
            })
        }
    },

    data(){
        return {
            arrData : [],
            isBottom : false,
            tokenNextPage : '',
            isEmptyPlayList : false
        }
    },

    watch :{
        isBottom : function(val){
            if(val === true){
                this.getSearchData(search_url, {
                    key : YOUTUBE_API,
                    regionCode : 'kr',
                    part : 'snippet',
                    maxResults : '30',
                    type : 'video',
                    relatedToVideoId : this.$route.params.videoId,
                    pageToken : this.tokenNextPage
                }, this.arrData)
            }
        }
    }
}
</script>

<style lang="scss" scoped>
@import "../../../styles/variables";
@import "../../../styles/mixin";
@import "../../../styles/extend";

.listPlay{
    float:left;
    width:538px;
    background-color:#F7F8FA;
    border:1px solid #d9d9d9;

    &>.tit{
        z-index:10;
        position: relative;
        padding:15px;
        font-weight:bold;
        box-shadow:0 1px 0 0 rgba(215,219,224,.5), 0 1px 3px 0 rgba(0,0,0,.08);
    }

    .list{
        overflow-y:auto;
        height:357px;

        li{
            .link{
                display: block;
                margin-top:5px;
                padding:0 15px;
                cursor: pointer;

                &:after{
                    @extend .clear;
                }

                &:hover .tit{
                    text-decoration:underline;
                }

                .wrapImg{
                    float:left;
                    display: block;
                    position: relative;

                    &:after{
                        content:'';
                        display: block;
                        position: absolute;
                        top:0;
                        left:0;
                        width:100px;
                        height:60px;
                        background-color:rgba(0, 0, 0, 0.25);
                        border-radius: 5px;
                    }

                    img{
                        width:100px;
                        height:60px;
                        border-radius: 5px;
                    }

                    .playTime{
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
                }

                .txt{
                    float:left;
                    display: block;
                    margin-left:15px;
                    width:370px;

                    .tit{
                        display: block;
                        font-size:14px;
                        @include txt_ellipse(18px, 2);
                    }

                    .date{
                        display: block;
                        margin-top:5px;
                        color:#999;
                        font-size:12px;
                    }
                }
            }

            &:first-child{
                .link{
                    margin-top:15px;
                }
            }

             &:last-child{
                .link{
                    margin-bottom:15px;
                }
            }
        }
    }
}
</style>