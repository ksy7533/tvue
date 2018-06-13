<template>
    <section class="areaChannel">
        <channelList v-bind:contents="varietyChannelContents">
            <a slot="channelName" class="channelName type01" v-on:click="goPage(COMEDY_CHANNEL_ID)">
                <span slot="title" class="name">예능</span>
                <span class="sub_name">최신 인기 동영상</span>
            </a>
        </channelList>
        <channelList v-bind:contents="musicChannelContents">
            <a slot="channelName" class="channelName type02" v-on:click="goPage(MUSIC_CHANNEL_ID)">
                <span slot="title" class="name">음악</span>
                <span class="sub_name">최신 인기 동영상</span>
            </a>
        </channelList>
        <channelList v-bind:contents="gameChannelContents">
            <a slot="channelName" class="channelName type03" v-on:click="goPage(GAME_CHANNEL_ID)">
                <span slot="title" class="name">게임</span>
                <span class="sub_name">최신 인기 동영상</span>
            </a>
        </channelList>
        <channelList v-bind:contents="movieChannelContents">
            <a slot="channelName" class="channelName type04" v-on:click="goPage(MOVIE_CHANNEL_ID)">
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

    mounted() {
        /* 예능동영상 */
        this.getData(video_url, {
            key : YOUTUBE_API,
            chart : 'mostPopular',
            regionCode : 'kr',
            part : 'snippet,contentDetails,statistics',
            videoCategoryId : this.COMEDY_CHANNEL_ID
        },
            this.varietyChannelContents
        )

        /* 음악동영상 */
        this.getData(video_url, {
            key : YOUTUBE_API,
            chart : 'mostPopular',
            regionCode : 'kr',
            part : 'snippet,contentDetails,statistics',
            videoCategoryId : this.MUSIC_CHANNEL_ID
        },
            this.musicChannelContents
        )

        /* 게임동영상 */
        this.getData(video_url, {
            key : YOUTUBE_API,
            chart : 'mostPopular',
            regionCode : 'kr',
            part : 'snippet,contentDetails,statistics',
            videoCategoryId : this.GAME_CHANNEL_ID
        },
            this.gameChannelContents
        )

        /* 영화동영상 */
        this.getData(video_url, {
            key : YOUTUBE_API,
            chart : 'mostPopular',
            regionCode : 'kr',
            part : 'snippet,contentDetails,statistics',
            videoCategoryId : this.MOVIE_CHANNEL_ID
        },
            this.movieChannelContents
        )
    },

    data() {
        return {
            varietyChannelContents : [],
            musicChannelContents : [],
            gameChannelContents : [],
            movieChannelContents : [],

            COMEDY_CHANNEL_ID : 23,
            MUSIC_CHANNEL_ID : 10,
            GAME_CHANNEL_ID : 20,
            MOVIE_CHANNEL_ID : 1
        }
    },

    methods : {
        goPage : function(channelId) {
            this.$router.push({ name: 'totalVideoChannel', params: { channelId } });
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

.channelName{
    cursor: pointer;
}
</style>
