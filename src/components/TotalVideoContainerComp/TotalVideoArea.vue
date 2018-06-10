<template>
    <div>
        <h2><strong></strong>의 채널입니다</h2>
        <ul class="list">
            <li v-for="(item, index) in contents" v-bind:key="index">
                <VideoItem v-bind:itemData="item"></VideoItem>
            </li>
        </ul>
        <a href="#n" class="btnMore" v-if="isNextPage" v-on:click.prevent="addListData()">비디오 더보기</a>
    </div>
</template>

<script>
import { loadData } from '../../mixins/loadData.js'
import VideoItem from '../CommonComp/videoItem.vue'

var YOUTUBE_API = "AIzaSyBQ1G-JhjIMd0bGr9IeF49NKeQ29roBttY";
var video_url = "https://www.googleapis.com/youtube/v3/videos";

export default {
    mixins: [loadData],

    mounted(){
        this.getVideoData(video_url, {
            key : YOUTUBE_API,
            chart : 'mostPopular',
            regionCode : 'kr',
            maxResults : '30',
            part : 'snippet,contentDetails,statistics',
            videoCategoryId : this.$route.params.channelId
        }, this.contents)
    },

    data(){
        return {
            contents : [],
            isNextPage : false,
            tokenNextPage : ''
        }
    },

    methods : {
        addListData : function(){
            this.getVideoData(video_url, {
                key : YOUTUBE_API,
                chart : 'mostPopular',
                regionCode : 'kr',
                maxResults : '30',
                part : 'snippet,contentDetails,statistics',
                videoCategoryId : this.$route.params.channelId,
                pageToken : this.tokenNextPage
            }, this.contents)
        },

        getVideoData: function(url, params, arrData) {
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

                this.initData(response, arrData);
            }).catch((ex) => {
                console.log("ERROR !", ex);
            })
        },
    },

    components : {
        VideoItem
    }
}
</script>

<style scoped>
h2{
    margin-bottom:20px;
}

.list:after{
    content:'';
    display:block;
    clear: both;
}

.list li{
    float:left;
    margin:0 5px 20px 0;
    width:198px;
    height:200px;
}

.list li:first-child{
    margin-left:0;
}

.btnMore{
    text-align: center;
    text-decoration: none;
    display: block;
    margin-top:40px;
    padding:15px;
    font-size:20px;
    color:#fff;
    font-weight:bold;
    background-color:#2282f2;
}
</style>
