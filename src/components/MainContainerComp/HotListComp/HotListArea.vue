<template>
    <section class="areaHotList">
        <HotHorizonList v-bind:contents=hotLiveContents>
            <h2 slot="title">인기 동영상</h2>
        </HotHorizonList>
        <HotHorizonList v-bind:contents=foodVideoContents>
            <h2 slot="title">먹방 최신동영상</h2>
        </HotHorizonList>
        <!-- <HotHorizonList v-bind:contents=hotPdContents>
            <h2 slot="title">인기 PD 동영상</h2>
        </HotHorizonList> -->
    </section>
</template>

<script>
import HotHorizonList from './HotHorizonList.vue'


var YOUTUBE_API = "AIzaSyBQ1G-JhjIMd0bGr9IeF49NKeQ29roBttY";

// var url = "https://www.googleapis.com/youtube/v3/videos?id=7lCDEYXw3mM&key="+YOUTUBE_API+"&part=snippet,contentDetails,statistics,status"

/* 카테고리 확인 */
// var url = "https://www.googleapis.com/youtube/v3/guideCategories?regionCode=KR&key="+YOUTUBE_API+"&part=snippet"

/* 인기 동영상 */
var hot_video_url = "https://www.googleapis.com/youtube/v3/videos?chart=mostPopular&regionCode=KR&key="+YOUTUBE_API+"&part=snippet&maxResults=30";

var food_video_url = "https://www.googleapis.com/youtube/v3/search?key="+YOUTUBE_API+"&part=snippet&maxResults=30&order=date&q='먹방'";

export default {

    created () {
        this.$axios.get(hot_video_url, {
        }).then((response) => {
            this.initHotVideoData(response);
        }).catch((ex) => {
            console.log("ERROR !", ex);
        })

        this.$axios.get(food_video_url, {
        }).then((response) => {
            this.initFoodVideoData(response);
        }).catch((ex) => {
            console.log("ERROR !", ex);
        })
    },

    methods : {
        initHotVideoData : function(response){
            var items = response.data.items;
            console.log(items)
            items.forEach(ele => {
                this.hotLiveContents.push({
                    title : ele.snippet.title,
                    id : ele.id,
                    // channelId : ele.snippet.channelId,
                    img_src: ele.snippet.thumbnails.medium.url
                })      
            });
        },

        initFoodVideoData : function(response){
            var items = response.data.items;
            // console.log(items)
            items.forEach(ele => {
                this.foodVideoContents.push({
                    title : ele.snippet.title,
                    id : ele.id.videoId,
                    img_src: ele.snippet.thumbnails.medium.url
                })      
            });
        }
    },

    data() {
        return {
            hotLiveContents : [],
            foodVideoContents : []
        }
    },

    components : {
        HotHorizonList
    }
}
</script>

<style>
.areaHotList{
    padding:20px 0;
    border:1px solid #ccc;
    border-radius:5px;
    background-color:#F5F5F8;
}
</style>
