<template>
    <section class="areaPlay">
        <Player></Player>
        <PlayList></PlayList>
    </section>
</template>

<script>
import Player from './Player.vue'
import PlayList from './PlayList.vue'

export default {
    components : {
        Player,
        PlayList
    }
}
</script>

<style scoped>
.areaPlay{
    border:1px solid #d9d9d9;
}

.areaPlay:after{
    content:'';
    display: block;
    clear:both;
}
</style>
