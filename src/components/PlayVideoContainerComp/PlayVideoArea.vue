<template>
    <div class="content" v-if="currentVideoData.length">
        <h2><strong>{{currentVideoData[0].channelTitle}}</strong>의 채널입니다</h2>
        <PlayArea v-bind:currentVideoData="currentVideoData[0]"></PlayArea>
        <VideoCategory></VideoCategory>

        <a href="#top" class="btnGotoTop"><i class="far fa-arrow-alt-circle-up"></i></a>
    </div>
</template>

<script>
import PlayArea from './PlayComp/PlayArea.vue'
import VideoCategory from './VideoCategoryComp/VideoCategoryArea.vue'
import { loadData } from '../../mixins/loadData.js'

var YOUTUBE_API = "AIzaSyBQ1G-JhjIMd0bGr9IeF49NKeQ29roBttY";
var video_url = "https://www.googleapis.com/youtube/v3/videos";

export default {  
    mixins: [loadData],
    
    mounted(){
        this.getData(video_url, {
            key : YOUTUBE_API,
            regionCode : 'kr',
            part : 'snippet,contentDetails,statistics',
            id : this.$route.params.videoId
        }, this.currentVideoData);
    },

    data(){
        return {
            currentVideoData : []
        }
    },

    components : {
        PlayArea,
        VideoCategory
    }
}

</script>

<style scoped>
.btnGotoTop{
    position: fixed;
    bottom:100px;
    right:100px;
    font-size:40px;
    color:#666;
    cursor: pointer;
}

h2{
    margin-bottom:20px;
    font-weight: normal;
    font-size: 14px;
}

h2 strong{
    color:#2282f2;
    font-weight: bold;
    font-size: 20px;
}
</style>

