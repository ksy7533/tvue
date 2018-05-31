<template>
     <div class="listPlay">
        <p class="tit">관련 채널 리스트입니다</p>
        <ul class="list">
            <li v-for="item in arrVideoList" v-bind:key="item.id">
                <a class="link" v-on:click.prevent="changeContainer({videoId:item.id, channelId:item.channelId, title:item.title})">
                    <span class="wrap_img"><img v-bind:src="item.img_src" alt=""></span>
                    <span class="tit">{{item.title}}</span>
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
var YOUTUBE_API = "AIzaSyBQ1G-JhjIMd0bGr9IeF49NKeQ29roBttY";

export default {
    created(){
        // var playList_url = "https://www.googleapis.com/youtube/v3/playlists?key="+YOUTUBE_API+"&part=snippet&channelId="+this.$store.state.currentVideo.channelId;

        var playList_url = "https://www.googleapis.com/youtube/v3/playlistItems?key="+YOUTUBE_API+"&part=snippet&playlistId=PLMuAKDEOSPKdXo49ppxABPcg35lCjiDtK";

        this.$axios.get(playList_url, {
        }).then((response) => {
            console.log(response)
            this.initVideoData(response);
        }).catch((ex) => {
            console.log("ERROR !", ex);
        })
        

        // axios.get('http://www.somepage.com')
        // .then(function (response) {
        //     return axios.get(`http://www.somepage.com/${response.someValue}`);
        // })
        // .then(function (response) {
        // })
        // .catch(function (error) {
        // });
    },

    data(){
        return {
            arrVideoList : []
        }
    },

     methods : {
        initVideoData : function(response){
            var items = response.data.items;
            items.forEach(ele => {
                this.arrVideoList.push({
                    title : ele.snippet.title,
                    id : ele.id,
                    channelId : ele.snippet.channelId,
                    img_src: ele.snippet.thumbnails.medium.url
                })      
            });
        },

        changeContainer : function(obj){
            this.$store.commit('changeContainer', {
                currentVideoId: obj.videoId,
                currentChannelId: obj.channelId,
                currentVideoTitle: obj.title,
                containerValue: 'playVideo'
            });
        }
     }

}
</script>

<style>

</style>
