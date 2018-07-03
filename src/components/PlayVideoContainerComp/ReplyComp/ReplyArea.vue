<template>
    <section class="replyArea">
        <div class="write">
            <p class="tit">댓글</p>
            <div class="inputBox">
                <i class="far fa-comment-dots"></i>
                <input type="text" v-model="replyText">
                <button class="regBtn" v-on:click="addComment">등록</button>
            </div>
        </div>

        <ReplyList></ReplyList>

    </section>
</template>

<script>
import ReplyList from './ReplyList.vue'

import firebase from 'firebase'
import { db } from 'config/db.js'

export default {
    data(){
        return {
            replyText : ''
        }
    },

    methods : {
        addComment : function(){
            let currentUser = firebase.auth().currentUser;
            let videoId = this.$route.params.videoId;

            let replyObj = {
                date : firebase.database.ServerValue.TIMESTAMP,
                displayName :currentUser.displayName,
                replyText : this.replyText
            }

            db.ref('replys/'+videoId).push(replyObj).then(() => {
            });
        }
    },

    components :{
        ReplyList
    }
}
</script>

<style lang="scss" scoped>
@import "../../../styles/variables";
@import "../../../styles/mixin";
@import "../../../styles/extend";

.replyArea{
    .write{
        padding:30px 20px;
        background-color:#F2F2F2;

        .tit{
            margin-bottom:15px;
            font-size:16px;
        }

        .inputBox{
            position: relative;
            padding:10px 80px 10px 60px;
            background-color:$white-color;

            i{
                position: absolute;
                top:8px;
                left:20px;
                font-size:26px;
            }

            input{
                width:100%;
                height:20px;
                line-height:20px;
                font-size:14px;
                border:0;

                &:focus{
                    outline:0;
                }
            }

            .regBtn{
                cursor: pointer;
                position: absolute;
                top:0;
                right:0;
                padding:12px 20px;
                color:$white-color;
                font-size:14px;
                background-color:$blue-color;
                border:0;
            }
        }
    }
}

</style>
