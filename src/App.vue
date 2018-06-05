<template>
  <div id="app" class="wrap">
    <HeaderArea></HeaderArea>
    <div class="container">
      <router-view :key="$route.path"></router-view>
    </div>
    <FooterArea></FooterArea>
  </div>
</template>

<script>
import reset from 'reset-css'
import HeaderArea from './components/HeaderComp/HeaderArea.vue'
import MainContainerArea from './components/MainContainerComp/MainContainerArea.vue'
import PlayVideoContainerArea from './components/PlayVideoContainerComp/PlayVideoArea.vue'
import FooterArea from './components/FooterComp/FooterArea.vue'

export default {
  components : {
    HeaderArea,
    MainContainerArea,
    PlayVideoContainerArea,
    FooterArea
  }
}
</script>

<style scoped>
@import url(//fonts.googleapis.com/earlyaccess/notosanskr.css);

body, html{
  width:100%;
  height:100%;
  line-height:1;
  font-size:12px;
  font-family: 'Noto Sans KR', sans-serif;
}

.wrap{
  width:100%;
  height:100%
}

.container{
    margin:92px auto 0;
    padding-top:30px;
    width:1260px;
}
</style>
