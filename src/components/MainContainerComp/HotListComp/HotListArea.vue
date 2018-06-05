<template>
    <section class="areaHotList">
        <HotHorizonList v-bind:contents=hotLiveContents>
            <h2 slot="title">인기 동영상</h2>
        </HotHorizonList>
        <HotHorizonList v-bind:contents=foodVideoContents>
            <h2 slot="title">먹방 최신동영상</h2>
        </HotHorizonList>
        <HotHorizonList v-bind:contents=hotFoodVideoContents>
            <h2 slot="title">먹방 인기동영상</h2>
        </HotHorizonList>
    </section>
</template>

<script>
import HotHorizonList from './HotHorizonList.vue'

import ytDurationFormat from 'youtube-duration-format'
import moment from 'moment';

var YOUTUBE_API = "AIzaSyBQ1G-JhjIMd0bGr9IeF49NKeQ29roBttY";
var video_url = "https://www.googleapis.com/youtube/v3/videos";
var search_url = "https://www.googleapis.com/youtube/v3/search";

export default {

    created () {

        var getData = (url, params, option) => {
            this.$axios.get(url, {
                params
            }).then((response) => {
                console.log(response)
                this.initData(response, option.arrData, option.type);
            }).catch((ex) => {
                console.log("ERROR !", ex);
            })
        }

        /* 인기동영상 */
        getData(video_url, {
            key : YOUTUBE_API,
            chart : 'mostPopular',
            regionCode : 'kr',
            part : 'snippet,contentDetails',
            maxResults : '30'
        }, {
            arrData : this.hotLiveContents,
            type : 'video'
        })

        /* 먹방 최신동영상 */
        getData(search_url, {
            key : YOUTUBE_API,
            regionCode : 'kr',
            part : 'snippet',
            maxResults : '30',
            type : 'video',
            order : 'date',
            q : '먹방'
        }, {
            arrData : this.foodVideoContents,
            type : 'search'
        })

        /* 먹방 인기동영상 */
        getData(search_url, {
            key : YOUTUBE_API,
            regionCode : 'kr',
            part : 'snippet',
            maxResults : '30',
            type : 'video',
            order : 'viewCount',
            q : '먹방'
        }, {
            arrData : this.hotFoodVideoContents,
            type : 'search'
        })
    },

    data(){
        return {
            hotLiveContents : [],
            foodVideoContents : [],
            hotFoodVideoContents : []
        }
    },

    components : {
        HotHorizonList
    },

    methods : {
        initData : function(response, arrData, type){
            var items = response.data.items;
            if(type === 'video'){
                items.forEach(ele => {
                    arrData.push({
                        title : ele.snippet.title,
                        id : ele.id,
                        channelId : ele.snippet.channelId,
                        channelTitle : ele.snippet.channelTitle,
                        img_src: ele.snippet.thumbnails.medium.url,
                        date : moment(ele.snippet.publishedAt).format(moment.HTML5_FMT.DATE),
                        duration: ytDurationFormat(ele.contentDetails.duration)
                    })      
                });
            }else if(type === 'search'){
                items.forEach(ele => {
                    arrData.push({
                        title : ele.snippet.title,
                        id : ele.id.videoId,
                        channelId : ele.snippet.channelId,
                        img_src: ele.snippet.thumbnails.medium.url
                    })      
                });
            }
        }
    }
}
</script>

<style scoped>
.areaHotList{
    padding:20px 0;
    border:1px solid #ccc;
    border-radius:5px;
    background-color:#F5F5F8;
}
</style>
