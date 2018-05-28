<template>
    <div id="container">
        <HotListArea></HotListArea>
        <ChannelListArea></ChannelListArea>
    </div>
</template>

<script>
import HotListArea from './HotListComp/HotListArea.vue'
import ChannelListArea from './ChannelListComp/ChannelListArea.vue'

export default {
    components : {
        HotListArea,
        ChannelListArea
    }
}
</script>

<style scoped>
#container{
    margin:30px auto 0;
    width:1260px;
}
</style>
