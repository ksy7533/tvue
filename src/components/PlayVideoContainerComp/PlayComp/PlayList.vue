<template>
     <div class="listPlay">
        <p class="tit">관련 비디오 리스트</p>
        <ul class="list">
            <li v-for="(item, index) in arrVideoList" v-bind:key="index">
                <!-- <a class="link" v-on:click.prevent="changeContainer({videoId:item.id, channelId:item.channelId, title:item.title})">
                    <span class="wrapImg"><img v-bind:src="item.img_src" alt=""></span>
                    <span class="tit">{{item.title}}</span>
                </a> -->
                <router-link class="link" v-bind:to="{ name: 'playVideo' }" v-on:click.native="changeContainer({videoId:item.id, channelId:item.channelId, title:item.title})">
                    <p class="wrapImg"><img v-bind:src="item.img_src" alt=""></p>
                    <p class="tit">{{item.title}}</p>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
var YOUTUBE_API = "AIzaSyBQ1G-JhjIMd0bGr9IeF49NKeQ29roBttY";

export default {
    created(){
        this.fetchData();
    },

    data(){
        return {
            arrVideoList : []
        }
    },

    watch: {
        '$route.params.videoId': function (id) {
            this.fetchData();
        }
    },

     methods : {
        fetchData : function(){
            // var playList_url = "https://www.googleapis.com/youtube/v3/search?key="+YOUTUBE_API+"&part=snippet&type=video&maxResults=20&relatedToVideoId="+this.$store.state.currentVideo.videoId;

            var playList_url = "https://www.googleapis.com/youtube/v3/search?key="+YOUTUBE_API+"&part=snippet&type=video&maxResults=20&relatedToVideoId="+ this.$route.params.videoId;

            this.$axios.get(playList_url, {
            }).then((response) => {
                // console.log(response)
                this.initVideoData(response);
            }).catch((ex) => {
                console.log("ERROR !", ex);
            })
        },

        initVideoData : function(response){
            var items = response.data.items;
            // console.log(items)   
            items.forEach(ele => {
                this.arrVideoList.push({
                    title : ele.snippet.title,
                    id : ele.id.videoId,
                    channelId : ele.snippet.channelId,
                    img_src: ele.snippet.thumbnails.medium.url
                })
            });
        },

        changeContainer : function(obj){

            this.$router.push({name:'playVideo', params: {videoId: obj.videoId, channelId: obj.channelId}});

            this.$store.commit('changeContainer', {
                currentVideoId: obj.videoId,
                currentChannelId: obj.channelId,
                currentVideoTitle: obj.title,
                containerValue: 'playVideo'
            });

            // console.log(this.$store.state.currentVideo.videoId)
        }
     }

}
</script>

<style scoped>
.listPlay{
    float:left;
    width:530px;
}

.listPlay .list{
    overflow-y:auto;
    height:380px;
}

.listPlay .list li .link{
    display: block;
}

.listPlay .list li .link:after{
    content:'';
    display: block;
    clear:both;
}

.listPlay .list li .link .wrapImg{
    float:left;
    display: block;
}

.listPlay .list li .link .wrapImg img{
    width:100px;
    height:60px;
}

.listPlay .list li .link .tit{
    float:left;
    display: block;
    width:400px;
}
</style>
