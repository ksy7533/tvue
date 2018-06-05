<template>
    <section class="areaChannel">
        <channelList v-bind:contents="varietyChannelContents">
            <a slot="channelName" href="#n" class="channelName type01">
                <span slot="title" class="name">예능</span>
                <span class="sub_name">최신 인기 동영상</span>
            </a>
        </channelList>
        <channelList v-bind:contents="musicChannelContents">
            <a slot="channelName" href="#n" class="channelName type02">
                <span slot="title" class="name">음악</span>
                <span class="sub_name">최신 인기 동영상</span>
            </a>
        </channelList>
        <channelList v-bind:contents="gameChannelContents">
            <a slot="channelName" href="#n" class="channelName type03">
                <span slot="title" class="name">게임</span>
                <span class="sub_name">최신 인기 동영상</span>
            </a>
        </channelList>
        <channelList v-bind:contents="movieChannelContents">
            <a slot="channelName" href="#n" class="channelName type04">
                <span slot="title" class="name">영화</span>
                <span class="sub_name">최신 인기 동영상</span>
            </a>
        </channelList>
    </section>
</template>

<script>
import ChannelList from './ChannelList.vue'

import ytDurationFormat from 'youtube-duration-format'
import moment from 'moment';

var YOUTUBE_API = "AIzaSyBQ1G-JhjIMd0bGr9IeF49NKeQ29roBttY";
var video_url = "https://www.googleapis.com/youtube/v3/videos";

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

        /* 예능동영상 */
        getData(video_url, {
            key : YOUTUBE_API,
            chart : 'mostPopular',
            regionCode : 'kr',
            part : 'snippet,contentDetails',
            videoCategoryId : '23'
        }, {
            arrData : this.varietyChannelContents,
            type : 'video'
        })

        /* 음악동영상 */
        getData(video_url, {
            key : YOUTUBE_API,
            chart : 'mostPopular',
            regionCode : 'kr',
            part : 'snippet,contentDetails',
            videoCategoryId : '10'
        }, {
            arrData : this.musicChannelContents,
            type : 'video'
        })

        /* 게임동영상 */
        getData(video_url, {
            key : YOUTUBE_API,
            chart : 'mostPopular',
            regionCode : 'kr',
            part : 'snippet,contentDetails',
            videoCategoryId : '20'
        }, {
            arrData : this.gameChannelContents,
            type : 'video'
        })

        /* 영화동영상 */
        getData(video_url, {
            key : YOUTUBE_API,
            chart : 'mostPopular',
            regionCode : 'kr',
            part : 'snippet,contentDetails',
            videoCategoryId : '1'
        }, {
            arrData : this.movieChannelContents,
            type : 'video'
        })
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
    },

    data() {
        return {
            varietyChannelContents : [],
            musicChannelContents : [],
            gameChannelContents : [],
            movieChannelContents : []
        }
    },

    components : {
        ChannelList
    }
}
</script>

<style scopped>
.areaChannel{
    margin-top:20px;
    padding:20px 0;
    border:1px solid #ccc;
    border-radius:5px
}
</style>
