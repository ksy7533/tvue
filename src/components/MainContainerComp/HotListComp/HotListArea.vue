<template>
    <section class="areaHotList">
        <a class="addList" v-on:click="toggleModal()">
            <i class="fas fa-plus-circle"></i>
        </a>

        <div class="lists" v-if="arrData.length !== 0">
            <HotHorizonList v-for="(item, index) in arrData" v-bind:key="index" v-bind:contents="item">
                <h2 slot="title"><span class="keyword">{{item.q}}</span> 관련동영상</h2>
            </HotHorizonList>
        </div>

        <ModalCustomList v-if="isModalVisible" v-bind:toggleModal="toggleModal"></ModalCustomList>
        
    </section>
</template>

<script>
import HotHorizonList from './HotHorizonList.vue'
import ModalCustomList from '../../ModalComp/CustomList.vue'

import firebase from 'firebase/app';
import { db } from 'config/db.js'

export default {

    data(){
        return {
            isModalVisible: false
        }
    },

    mounted(){
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                let currentUser = firebase.auth().currentUser;
                let listsRef = db.ref('lists/' + currentUser.uid).child('custom_query')

                listsRef.on('value', (data) => {
                    let customListData = [];

                    data.forEach(function(item, index){
                        customListData.push({
                            id : item.key,
                            q : item.val()
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

    computed : {
        arrData(){
            return this.$store.state.customListData
        }
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
        border-radius:5px;
        background-color:#fff;
        box-shadow: 0 0 0 1px rgba(0,0,0,.03), 0 1px 2px 0 rgba(0,0,0,.19);

        &:hover{
            color:$white-color;
            background-color:$blue-color;
        }
    }

    .lists{
        border:1px solid #ccc;
        border-radius:5px;
        background-color:#FFF;
        box-shadow: 0 0 0 1px rgba(0,0,0,.03), 0 1px 2px 0 rgba(0,0,0,.19);
    }
}
</style>