<template>
    <div class="content">
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
    mounted(){
        this.setCurrentGnbId()
    },

    components : {
        MainHotArea,
        HotListArea,
        ChannelListArea
    },

    methods : {
        setCurrentGnbId : function(){
             this.$store.commit('setCurrentGnbId', {
                currentGnbId: 'main'
            });
        }
    }
}
</script>