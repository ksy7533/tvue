<template>
    <div class="mainContent">
        <MainHotArea></MainHotArea>
        <h2><i class="fas fa-align-justify"></i> 커스텀 리스트</h2>
        <HotListArea></HotListArea>
        <h2><i class="fas fa-align-justify"></i> 채널 리스트</h2>
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

        this.$store.commit('setKeyword', {
            keyword: ''
        });
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

<style lang="scss" scoped>
@import "../../styles/variables";
.mainContent{
    h2{
        margin:30px 0 20px;
        padding:0 40px;
        font-size:26px;
        font-weight:bold;
    }
}
</style>

