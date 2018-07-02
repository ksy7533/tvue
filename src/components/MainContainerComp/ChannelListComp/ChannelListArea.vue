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
            <a slot="channelName" class="channelName type04" v-on:click="goPage(FET_CHANNEL_ID)">
                <span slot="title" class="name">동물</span>
                <span class="sub_name">최신 인기 동영상</span>
            </a>
        </channelList>
    </section>
</template>

<script>
import ChannelList from './ChannelList.vue'

import loadData from 'mixins/loadData.js'
import Constant from 'constant'

export default {
    mixins: [loadData],

    mounted() {
        /* 예능동영상 */
        this.getData(Constant.VIDEO_URL, {
            key : Constant.YOUTUBE_API_KEY,
            chart : 'mostPopular',
            regionCode : 'kr',
            part : 'snippet,contentDetails,statistics',
            videoCategoryId : this.COMEDY_CHANNEL_ID
        },
            this.varietyChannelContents
        )

        /* 음악동영상 */
        this.getData(Constant.VIDEO_URL, {
            key : Constant.YOUTUBE_API_KEY,
            chart : 'mostPopular',
            regionCode : 'kr',
            part : 'snippet,contentDetails,statistics',
            videoCategoryId : this.MUSIC_CHANNEL_ID
        },
            this.musicChannelContents
        )

        /* 게임동영상 */
        this.getData(Constant.VIDEO_URL, {
            key : Constant.YOUTUBE_API_KEY,
            chart : 'mostPopular',
            regionCode : 'kr',
            part : 'snippet,contentDetails,statistics',
            videoCategoryId : this.GAME_CHANNEL_ID
        },
            this.gameChannelContents
        )

        /* 영화동영상 */
        this.getData(Constant.VIDEO_URL, {
            key : Constant.YOUTUBE_API_KEY,
            chart : 'mostPopular',
            regionCode : 'kr',
            part : 'snippet,contentDetails,statistics',
            videoCategoryId : this.FET_CHANNEL_ID
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

            COMEDY_CHANNEL_ID : 24,
            MUSIC_CHANNEL_ID : 10,
            GAME_CHANNEL_ID : 20,
            FET_CHANNEL_ID : 15
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

<style lang="scss" scoped>
@import "../../../styles/variables";
@import "../../../styles/mixin";
@import "../../../styles/extend";

.areaChannel{
    padding:20px 0;
    border:1px solid #ccc;
    border-radius:5px;
    background-color:$white-color;
    box-shadow: 0 0 0 1px rgba(0,0,0,.03), 0 1px 2px 0 rgba(0,0,0,.19);

    .channelName{
        cursor: pointer;    
    }
}
</style>
