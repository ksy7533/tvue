<template>
    <section class="replyArea">

        <div v-if="isShowReply">
            <div class="write">
                <p class="tit">댓글 <span class="total">{{lengthReply}}</span></p>
                <div class="inputBox">
                    <i class="far fa-comment-dots"></i>
                    <input type="text" v-model="replyText" v-on:focus="focusTxt" v-on:keyup.enter="addComment" placeholder="댓글을 입력해주세요">
                    <button class="regBtn" v-on:click="addComment">등록</button>
                </div>
            </div>

            <ReplyList v-on:toggleReply="toggleReply"></ReplyList>
        </div>
        <div v-else>
            <a class="btnMore" v-on:click="toggleReply"><i class="fas fa-angle-down"></i><span class="num">{{lengthReply}}</span>개 댓글 보기</a>
        </div>
    </section>
</template>

<script>
import ReplyList from './ReplyList.vue'

import moment from 'moment'
import firebase from 'firebase'
import { db } from 'config/db.js'

export default {
    data(){
        return {
            replyText : '',
            lengthReply : 0,
            isShowReply :false
        }
    },

    mounted(){
        this.getTotalReply();
    },

    methods : {
        addComment : function(){
            let date = moment(firebase.database.ServerValue.TIMESTAMP).format(moment.HTML5_FMT.DATE);
            let currentUser = firebase.auth().currentUser;
            let videoId = this.$route.params.videoId;
            let replyObj = {
                date,
                displayName :currentUser.displayName,
                replyText : this.replyText,
                uid : currentUser.uid
            }

            db.ref('replys/'+videoId).push(replyObj).then(() => {
                this.replyText = '';
            });
        },

        getTotalReply : function(){
            let videoId = this.$route.params.videoId;
            let replysRef = db.ref('replys/'+videoId);

            replysRef.on('value', (data) => {
                if(data.val() !== null){
                    this.lengthReply = Object.keys(data.val()).length;
                }else{
                    this.lengthReply = 0;
                }
            });
        },

        focusTxt : function(event){
            let target = event.target;
            let currentUser = firebase.auth().currentUser;

            if(currentUser === null){
                alert('로그인해주세요');
                target.blur();
            }
        },

        toggleReply : function(){
            console.log("csdfsdf")
            this.isShowReply = !this.isShowReply;
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
            
            .total{
                color:$blue-color;
            }
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

    .btnMore{
        cursor: pointer;
        display:block;
        text-align: center;
        padding:15px 0;
        font-size:14px;
        border-bottom:1px solid #d9d99d;
        background-color:#F2F2F2;

        i{
            margin-right:5px;
            font-size:14px;
        }

        .num{
            color:$blue-color;
            font-weight:bold;
        }
    }
}
</style>