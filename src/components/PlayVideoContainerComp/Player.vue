<template>
    <div class="areaPlayer">
        <youtube :video-id="videoId" @ready="ready" player-width="720" player-height="405" class="player"></youtube>
        <PlayList></PlayList>
    </div>
</template>

<script>
import Vue from 'vue'
import VueYouTubeEmbed from 'vue-youtube-embed'
import PlayList from './PlayList.vue'

Vue.use(VueYouTubeEmbed)

export default {
    created(){
        this.videoId = this.$store.state.currentVideoId;
    },

    data(){
        return {
            videoId: ''
        }
    },

    components : {
        PlayList
    },

    methods: {
        ready (player) {
            this.player = player
        }
    }
}
</script>

<style scopped>
.areaPlayer{
    border:1px solid #dbdbdb;
}

.areaPlayer:after{
    content:'';
    display:block;
    clear:both;
}

.areaPlayer .player{
    float:left;
}

.areaPlayer .listPlay{
    float:left;
}
</style>
