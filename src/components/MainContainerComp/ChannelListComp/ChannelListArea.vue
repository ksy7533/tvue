<template>
    <section class="areaChannel">
        <channelList v-for="(item, index) in gnb" v-bind:contents="channelData[index]" v-bind:key="index">
            <a slot="channelName" class="channelName" v-on:click="goPage(item.id)">
                <span slot="title" class="name">{{item.name}}</span>
                <span class="sub_name">최신 인기 동영상</span>
            </a>
        </channelList>
    </section>
</template>

<script>
import ChannelList from './ChannelList.vue'

import loadData from 'mixins/loadData.js'
import Constant from 'constant'
import {mapState} from 'vuex'

export default {
    mixins: [loadData],

    computed:mapState(['gnb']),

    mounted() {
        for(let i = 0; i < this.gnb.length; i++){
            this.channelData.push([]);
        }

        this.gnb.forEach((item, index) => {
            this.getData(Constant.VIDEO_URL, {
                key : Constant.YOUTUBE_API_KEY,
                chart : 'mostPopular',
                regionCode : 'kr',
                part : 'snippet,contentDetails,statistics',
                maxResults: 7,
                videoCategoryId : item.id
            },
                this.channelData[index]
            )
        })
    },

    data() {
        return {
            channelData : []
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
    margin:0 100px;
    padding:20px 0;
    border:1px solid #ccc;
    background-color:$white-color;
    box-shadow: 0 0 0 1px rgba(0,0,0,.03), 0 1px 2px 0 rgba(0,0,0,.19);

    .channelName{
        cursor: pointer;    
    }
}
</style>
