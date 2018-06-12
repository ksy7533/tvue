<template>
    <div class="content">
        <h2><strong>{{this.$store.state.currentVideo.channelTitle}}</strong>의 채널입니다</h2>
        <PlayArea></PlayArea>
        <VideoCategory></VideoCategory>

        <a href="#top" class="btnGotoTop"><i class="far fa-arrow-alt-circle-up"></i></a>
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
.btnGotoTop{
    position: fixed;
    bottom:100px;
    right:100px;
    font-size:40px;
    color:#666;
    cursor: pointer;
}

h2{
    margin-bottom:20px;
    font-weight: normal;
    font-size: 14px;
}

h2 strong{
    color:#2282f2;
    font-weight: bold;
    font-size: 20px;
}
</style>

