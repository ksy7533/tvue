<template>
  <div id="app" class="wrap">
    <HeaderArea></HeaderArea>
    <MainContainerArea></MainContainerArea>
    <FooterArea></FooterArea>
  </div>
</template>

<script>
import reset from 'reset-css'
import HeaderArea from './components/HeaderComp/HeaderArea.vue'
import MainContainerArea from './components/MainContainerComp/MainContainerArea.vue'
import FooterArea from './components/FooterComp/FooterArea.vue'

export default {
  components : {
    HeaderArea,
    MainContainerArea,
    FooterArea
  }
}
</script>

<style>
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
</style>
