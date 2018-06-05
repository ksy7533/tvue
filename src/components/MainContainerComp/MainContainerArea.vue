<template>
    <div>
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