<template>
    <div>
        <MainHotArea></MainHotArea>
        <HotListArea></HotListArea>
        <ChannelListArea></ChannelListArea>
    </div>
</template>

<script>
import MainHotArea from './MainHotComp/MainHotArea.vue'
import HotListArea from './HotListComp/HotListArea.vue'
import ChannelListArea from './ChannelListComp/ChannelListArea.vue'

export default {
    components : {
        MainHotArea,

        HotListArea,
        ChannelListArea
    }
}
</script>