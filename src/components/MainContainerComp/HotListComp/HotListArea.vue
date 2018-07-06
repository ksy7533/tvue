<template>
    <section class="areaHotList">
        <a class="addList" v-on:click="toggleModal()">
            <i class="fas fa-plus-circle"></i>
        </a>

        <div class="lists" v-if="customListData.length !== 0">
            <HotHorizonList v-for="(item, index) in customListData" v-bind:key="index" v-bind:contents="item">
                <h2 slot="title"><span class="keyword">{{item.q}}</span> 관련동영상</h2>
            </HotHorizonList>
        </div>

        <ModalCustomList v-if="isModalVisible" v-bind:toggleModal="toggleModal"></ModalCustomList>
        
    </section>
</template>

<script>
import HotHorizonList from './HotHorizonList.vue'
import ModalCustomList from '../../ModalComp/CustomList.vue'

import firebase from 'firebase'
import { db } from 'config/db.js'
import {mapState} from 'vuex'

export default {

    data(){
        return {
            isModalVisible: false
        }
    },

    computed:mapState(['customListData']),

    mounted(){
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.$store.dispatch('getCustomListData');
            } else {
                this.$store.commit('setCustomListData', {
                    customListData : []
                });
            }
        })
    },

    methods : {
        toggleModal : function(){
            if(firebase.auth().currentUser === null){
                alert('로그인 하세요')
                return;
            }
            this.isModalVisible = !this.isModalVisible;
        }
    },

    components : {
        HotHorizonList,
        ModalCustomList
    }
}
</script>

<style lang="scss" scoped>
@import "../../../styles/variables";
@import "../../../styles/mixin";
@import "../../../styles/extend";

.areaHotList{
    padding:0 40px;

    .addList{
        cursor: pointer;
        text-align:center;
        display:block;
        line-height:65px;
        margin-bottom:15px;
        height:65px;
        color:$blue-color;
        font-size:30px;
        border:1px solid #ccc;
        background-color:#fff;
        box-shadow: 0 0 0 1px rgba(0,0,0,.03), 0 1px 2px 0 rgba(0,0,0,.19);

        &:hover{
            color:$white-color;
            background-color:$blue-color;
        }
    }

    .lists{
        border:1px solid #ccc;
        background-color:#FFF;
        box-shadow: 0 0 0 1px rgba(0,0,0,.03), 0 1px 2px 0 rgba(0,0,0,.19);
    }
}
</style>