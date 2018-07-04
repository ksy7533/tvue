<template>
    <div class="categoryList" v-if="!isEmptyPlayList">
        <h3><i class="fas fa-indent"></i> {{categoryObj.title}}</h3>
        <ul class="list">
            <li v-for="(item, index) in playList" v-bind:key="index">
               <VideoItem v-bind:itemData="item"></VideoItem>
            </li>
        </ul>
        <a href="#n" class="btnMore" v-if="isNextPage" v-on:click.prevent="addListData()"><i class="fas fa-angle-down"></i></a>
    </div>
</template>

<script>
import VideoItem from '../../CommonComp/videoItem.vue'

import loadData from 'mixins/loadData.js'
import ytDurationFormat from 'youtube-duration-format'
import Constant from 'constant'

export default {
    props : [
        'categoryObj'
    ],

    mixins: [loadData],

    mounted(){
        this.getSearchData(Constant.PLAYLIST_URL, {
            key : Constant.YOUTUBE_API_KEY,
            part : "snippet,contentDetails",
            playlistId : this.categoryObj.id,
            maxResults : 12
        }, this.playList)
    },

    data() {
        return {
            playList : [],
            isNextPage : false,
            tokenNextPage : '',
            isEmptyPlayList : false
        }
    },

    methods : {
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
                    tempData.push(item.contentDetails.videoId);
                });

                tempData.forEach(function(videoId){
                    that.getData(Constant.VIDEO_URL, {
                        key : Constant.YOUTUBE_API_KEY,
                        regionCode : 'kr',
                        part : 'snippet,contentDetails,statistics',
                        id : videoId
                    }, arrData);
                });

                
            }).catch((ex) => {
                console.log("ERROR !", ex);
            })
        },

        addListData : function(){
            this.getSearchData(Constant.PLAYLIST_URL, {
                key : Constant.YOUTUBE_API_KEY,
                part : "snippet,contentDetails",
                playlistId : this.categoryObj.id,
                maxResults : 12,
                pageToken : this.tokenNextPage
            }, this.playList)
        }
    },

    components: {
        VideoItem
    }

}
</script>

<style lang="scss" scoped>
@import "../../../styles/variables";
@import "../../../styles/mixin";
@import "../../../styles/extend";

.categoryList{
    margin-top:20px;
    border-bottom:1px solid #d9d9d9;

    h3{
        margin-bottom:20px;
        font-size:18px;
        font-weight:bold;
    }

    .list{
        padding-bottom:20px;

        &:after{
            @extend .clear;
        }

        li{
            float:left;
            margin:0 10px 20px 0;
            width:200px;
            height:200px;
        }
    }

    .btnMore{
        text-align: center;
        display: block;
        padding:15px;
        font-size:20px;
        color:#999;
        font-weight:normal;

        &:hover{
            color:#2282f2;
        }
    }
}
</style>
