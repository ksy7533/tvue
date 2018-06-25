<template>
  <div id="app" class="wrap">
    <HeaderArea></HeaderArea>
    <div class="container">
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

import firebase from 'firebase';
import { db } from './config/db.js'


export default {

mounted(){
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
              let currentUser = firebase.auth().currentUser;
              let listsRef = db.ref('lists/' + currentUser.uid);

              listsRef.on('value', (data) => {
                console.log(data)
                  let dataVal = data.val()
                  let customListData = [];

                  data.forEach(function(item, index){
                    customListData.push({
                      id : item.key,
                      q : item.val().query
                    });
                  })

                  this.$store.commit('setCustomListData', {
                    customListData
                  });
              });
        } else {
            console.log("없음")

            this.$store.commit('setCustomListData', {
              customListData : []
            });

        }
    })
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

<style scoped>
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
}

.content{
  margin:0 auto;
  padding:121px 0 183px 0;
  width:1260px;
}
</style>
