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
    },
    
    created(){
        // console.log(this.$store.state.currentVideo.title)

        // console.log("create")
    },

    updated(){
        console.log("mount cc")
    }

    // computed: {
    //     currentVideo(){
    //         console.log("d")
    //         return  this.$store.state.currentVideo
    //     }
    // }
}
</script>

<style scoped>

</style>
