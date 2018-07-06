<template>
  <div id="app" class="wrap">
    <HeaderArea></HeaderArea>
    <div class="container" v-bind:class="{main : containerName}">
      <div class="content">
        <router-view :key="$route.path"></router-view>
      </div>
    </div>
    <FooterArea></FooterArea>
  </div>
</template>

<script>
import reset from 'reset-css'
import HeaderArea from './components/HeaderComp/HeaderArea.vue'
import MainContainerArea from './components/MainContainerComp/MainContainerArea.vue'
import PlayVideoContainerArea from './components/PlayVideoContainerComp/PlayVideoArea.vue'
import TotalVideoArea from './components/TotalVideoContainerComp/TotalVideoArea.vue'
import FooterArea from './components/FooterComp/FooterArea.vue'

export default {
  computed:{
    containerName(){
      if(this.$route.name === 'main'){
        return true;
      }else{
        return false;
      }
    }
  },

  components : {
    HeaderArea,
    MainContainerArea,
    PlayVideoContainerArea,
    TotalVideoArea,
    FooterArea
  }
}
</script>

<style lang="scss" scoped>
@import "./styles/variables";
@import "./styles/mixin";
@import "./styles/extend";
@import url(//fonts.googleapis.com/earlyaccess/notosanskr.css);

.wrap{
  width:100%;
  height:100%;
  line-height: 1;
  font-size: 12px;
  font-family: 'Noto Sans KR', sans-serif;
}

.container{
  min-height:100%;
  margin:0 0 -113px 0;

  &.main{
    background-color:#f3f3f5;
  }
}

.content{
  // margin:0 auto;
  padding:95px 0 183px 0;
  // width:1260px;
}
</style>
