<template>
    <youtube :video-id="this.$route.params.videoId" @ready="ready" player-width="100%" player-height="100%" class="player"></youtube>
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

<style lang="scss" scoped>
@import "../../../styles/variables";
@import "../../../styles/mixin";
@import "../../../styles/extend";

.player{
    // float:left;
    margin:0 auto;
    width:1070px;
    height:605px;
}
</style>
