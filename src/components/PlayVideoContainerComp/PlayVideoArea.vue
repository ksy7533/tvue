<template>
    <div>
        <h2>{{this.$store.state.currentVideo.title}}</h2>
        <PlayArea></PlayArea>
        <VideoCategory></VideoCategory>
    </div>
</template>

<script>
import PlayArea from './PlayComp/PlayArea.vue'
import VideoCategory from './VideoCategoryComp/VideoCategoryArea.vue'

export default {
    components : {
        PlayArea,
        VideoCategory
    }
}

</script>

<style scoped>

</style>
