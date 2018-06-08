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
import { loadData } from '../../../mixins/loadData.js'

var YOUTUBE_API = "AIzaSyBQ1G-JhjIMd0bGr9IeF49NKeQ29roBttY";
var video_url = "https://www.googleapis.com/youtube/v3/videos";

export default {
    mixins: [loadData],

    created() {
        /* 예능동영상 */
        this.getData(video_url, {
            key : YOUTUBE_API,
            chart : 'mostPopular',
            regionCode : 'kr',
            part : 'snippet,contentDetails,statistics',
            videoCategoryId : '23'
        },
            this.varietyChannelContents
        )

        /* 음악동영상 */
        this.getData(video_url, {
            key : YOUTUBE_API,
            chart : 'mostPopular',
            regionCode : 'kr',
            part : 'snippet,contentDetails,statistics',
            videoCategoryId : '10'
        },
            this.musicChannelContents
        )

        /* 게임동영상 */
        this.getData(video_url, {
            key : YOUTUBE_API,
            chart : 'mostPopular',
            regionCode : 'kr',
            part : 'snippet,contentDetails,statistics',
            videoCategoryId : '20'
        },
            this.gameChannelContents
        )

        /* 영화동영상 */
        this.getData(video_url, {
            key : YOUTUBE_API,
            chart : 'mostPopular',
            regionCode : 'kr',
            part : 'snippet,contentDetails,statistics',
            videoCategoryId : '1'
        },
            this.movieChannelContents
        )
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
