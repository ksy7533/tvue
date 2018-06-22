<template>
    <div class="wrapModal">
        <div class="modal">
            <header>
                <p class="title">커스텀 리스트 만들기</p>
            </header>
            <div class="body">
                <div class="search">
                    <input type="text" v-focus v-model="query" v-on:keyup.enter="addList" placeholder="리스트를 만들고자 하는 쿼리를 입력해주세요.">
                </div>
            </div>
            <footer>
                <button v-on:click="addList">리스트 생성하기</button>
                <button v-on:click="toggleModal()">닫기</button>
            </footer>
        </div>
    </div>
</template>

<script>

import firebase from 'firebase'
import { db } from '../../config/db.js'


export default {
    props : ['toggleModal'],

    data(){
        return{
            query : ''
        }
    },

    directives: {
        focus: {
            inserted: function (el) {
                el.focus()
            }
        }
    },

    firebase:{
        items: db.ref('itemsf')
    },

    methods: {
        addList(){
            this.addCustomListData(this.query);
            this.toggleModal();
        },

        addCustomListData : function(query){

            console.log(this.$firebaseRefs.items)

            this.$firebaseRefs.items.push({
                query : query
            });

            this.$store.commit('addCustomListData', {
                query
            });
        }
    }
}
</script>

<style lang="scss" scoped>
@import "../../styles/variables";
@import "../../styles/mixin";
@import "../../styles/extend";

.wrapModal{
    z-index:1000;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.3);

    .modal{
        position: relative;
        top:50%;
        left:50%;
        margin:-75px 0 0 -350px;
        padding:40px;
        width:700px;
        height:150px;
        background: #FFFFFF;
        box-shadow: 2px 2px 20px 1px;
        
        header{
            margin-bottom:20px;

            .title{
                text-align: center;
                font-size:24px;
                font-weight:bold;
            }
        }

        .body{
            .search{
                width:100%;
                border-bottom:2px solid #000;

                input{
                    box-sizing: border-box;
                    padding:10px;
                    width:100%;
                    font-size:20px;
                    border:0;

                    &:focus{
                        outline: 0;
                    }
                }
            }
        }
        
        footer{
            text-align:center;
            margin-top:20px;

            button{
                cursor: pointer;
                margin-left:5px;
                padding:10px;
                color:$white-color;
                font-size:14px;
                background-color:$blue-color;
                border:0;
                border-radius:5px;

                &first-child{
                    margin-left:0;
                }
            }

        }
    }
}
</style>

