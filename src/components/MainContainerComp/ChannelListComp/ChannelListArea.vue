<template>
    <section class="areaChannel">
        <channelList v-bind:contents="varietyChannelContents"></channelList>
        <channelList v-bind:contents="musicChannelContents"></channelList>
        <channelList v-bind:contents="gameChannelContents"></channelList>
        <channelList v-bind:contents="dramaChannelContents"></channelList>
    </section>
</template>

<script>
import ChannelList from './ChannelList.vue'

var YOUTUBE_API = "AIzaSyBQ1G-JhjIMd0bGr9IeF49NKeQ29roBttY";

// 예능
var variety_channel_url = "https://www.googleapis.com/youtube/v3/videos?key="+YOUTUBE_API+"&part=snippet&chart=mostPopular&regionCode=KR&videoCategoryId=23";
// 음악
var music_channel_url = "https://www.googleapis.com/youtube/v3/videos?key="+YOUTUBE_API+"&part=snippet&chart=mostPopular&regionCode=KR&videoCategoryId=10";
// 게임
var game_channel_url = "https://www.googleapis.com/youtube/v3/videos?key="+YOUTUBE_API+"&part=snippet&chart=mostPopular&regionCode=KR&videoCategoryId=20";
// 드라마
var drama_channel_url = "https://www.googleapis.com/youtube/v3/videos?key="+YOUTUBE_API+"&part=snippet&chart=mostPopular&regionCode=KR&videoCategoryId=28";

export default {
    created () {
        this.$axios.get(variety_channel_url, {
        }).then((response) => {
            this.initVarietyChannelData(response);
        }).catch((ex) => {
            console.log("ERROR !", ex);
        })

        this.$axios.get(music_channel_url, {
        }).then((response) => {
            this.initMusicChannelData(response);
        }).catch((ex) => {
            console.log("ERROR !", ex);
        })

        this.$axios.get(game_channel_url, {
        }).then((response) => {
            this.initGameChannelData(response);
        }).catch((ex) => {
            console.log("ERROR !", ex);
        })

        this.$axios.get(drama_channel_url, {
        }).then((response) => {
            this.initDramaChannelData(response);
        }).catch((ex) => {
            console.log("ERROR !", ex);
        })
    },

    methods : {
        initVarietyChannelData : function(response){
            var items = response.data.items;
            console.log(items)
            items.forEach(ele => {
                this.varietyChannelContents.push({
                    title : ele.snippet.title,
                    id : ele.id,
                    img_src: ele.snippet.thumbnails.medium.url
                })      
            });
        },

        initMusicChannelData : function(response){
            var items = response.data.items;
            console.log(items)
            items.forEach(ele => {
                this.musicChannelContents.push({
                    title : ele.snippet.title,
                    id : ele.id,
                    img_src: ele.snippet.thumbnails.medium.url
                })      
            });
        },

        initGameChannelData : function(response){
            var items = response.data.items;
            console.log(items)
            items.forEach(ele => {
                this.gameChannelContents.push({
                    title : ele.snippet.title,
                    id : ele.id,
                    img_src: ele.snippet.thumbnails.medium.url
                })      
            });
        },

        initDramaChannelData : function(response){
            var items = response.data.items;
            console.log(items)
            items.forEach(ele => {
                this.dramaChannelContents.push({
                    title : ele.snippet.title,
                    id : ele.id,
                    img_src: ele.snippet.thumbnails.medium.url
                })      
            });
        }
    },

    data() {
        return {
            varietyChannelContents : [],
            musicChannelContents : [],
            gameChannelContents : [],
            dramaChannelContents : []
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
