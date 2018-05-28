<template>
    <section class="areaChannel">
        <channelList v-bind:contents = "varietyChannelContents"></channelList>
    </section>
</template>

<script>
import ChannelList from './ChannelList.vue'

var YOUTUBE_API = "AIzaSyBQ1G-JhjIMd0bGr9IeF49NKeQ29roBttY";

var variety_channel_url = "https://www.googleapis.com/youtube/v3/search?key="+YOUTUBE_API+"&part=snippet&maxResults=5&order=date&q='예능'";

export default {
    created () {
        this.$axios.get(variety_channel_url, {
        }).then((response) => {
            this.initFoodVideoData(response);
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
                    link : ele.id.videoId,
                    img_src: ele.snippet.thumbnails.medium.url
                })      
            });
        }
    },

    data() {
        return {
            varietyChannelContents : []
        }
    },

    components : {
        ChannelList
    }
}
</script>

<style scopped>

</style>
