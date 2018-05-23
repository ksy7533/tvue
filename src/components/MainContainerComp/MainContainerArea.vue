<template>
    <div id="container">
        <HotListArea></HotListArea>
    </div>
</template>

<script>
import HotListArea from './HotListComp/HotListArea.vue'

export default {
    components : {
        HotListArea
    }
}
</script>

<style scoped>
#container{
    margin:30px auto 0;
    width:1260px;
}
</style>
