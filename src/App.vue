<template>
  <div id="app" class="wrap">
    <HeaderArea></HeaderArea>
  </div>
</template>

<script>
import reset from 'reset-css'
import HeaderArea from './components/HeaderComp/HeaderArea.vue'

export default {
  components : {
    HeaderArea
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
