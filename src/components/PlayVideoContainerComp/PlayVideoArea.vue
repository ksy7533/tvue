<template>
    <div>
        <h2>{{this.$store.state.currentVideo.title}}</h2>
        <Player></Player>
        <VideoCategory></VideoCategory>
    </div>
</template>

<script>
import Player from './Player.vue'
import VideoCategory from './VideoCategoryComp/VideoCategoryArea.vue'

export default {
    components : {
        Player,
        VideoCategory
    },
    
    created(){
        console.log(this.$store.state.currentVideo.title)
    },

    updated(){
        console.log(this.$store.state.currentVideo.title)
    }
}
</script>

<style>

</style>
