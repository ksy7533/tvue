<template>
    <youtube :video-id="this.$store.state.currentVideo.videoId" @ready="ready" player-width="720" player-height="405" class="player"></youtube>
</template>

<script>
import Vue from 'vue'
import VueYouTubeEmbed from 'vue-youtube-embed'

Vue.use(VueYouTubeEmbed)

export default {

    data(){
        return {
            videoId : ''
        }
    },

    methods: {
        ready (player) {
            this.player = player
        }
    }
}
</script>

<style scoped>
.player{
    float:left;
    width:720px;
}
</style>
