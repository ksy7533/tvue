<template>
    <div class="list">
        <div class="item" v-for="(item, index) in arrReply" v-bind:key="index">
            <div class="info">
                <span class="name">{{item.displayName}}</span>
                <span class="date">{{item.date}}</span>
                <button class="removeBtn" v-if="isLogin(item.uid)" v-on:click="removeReply(item.key)">삭제</button>
            </div>
            <p class="txt">{{item.replyText}}</p>
        </div>

        <a class="btnClose" v-on:click="clickBtnClose"><i class="fas fa-angle-up"></i> 댓글 접기</a>
    </div>
</template>

<script>
import firebase from 'firebase'
import { db } from 'config/db.js'

export default {
    data(){
        return{
            arrReply : []
        }
    },

    mounted(){
        let videoId = this.$route.params.videoId;
        let replysRef = db.ref('replys/'+videoId)

        replysRef.on('value', (data) => {
            this.arrReply = [];
            data.forEach((item, index) => {
                this.arrReply.push({
                    displayName: item.val().displayName,
                    date: item.val().date,
                    replyText: item.val().replyText,
                    uid: item.val().uid,
                    key: item.key
                });
            })
        });
    },

    methods : {
        isLogin(uid){
            if(firebase.auth().currentUser !== null){
                if(firebase.auth().currentUser.uid === uid){
                    return true
                }else{
                    return false
                }
            }
        },

        removeReply(key){
            let videoId = this.$route.params.videoId;
            let replysRef = db.ref('replys/'+videoId+'/'+key).once('value', (snapshot) => {
                snapshot.ref.remove();
            });
        },

        clickBtnClose(){
            console.log("ff")
            this.$emit('toggleReply')
        }
    }
}
</script>

<style lang="scss" scoped>
@import "../../../styles/variables";
@import "../../../styles/mixin";
@import "../../../styles/extend";

.list{
    padding:40px 0 0 0;
    border-bottom:1px solid #d9d9d9;

    .item{
        margin:0 20px;
        padding:25px 0;
        font-size:14px;
        border-top:1px solid #d9d9d9;

        &:first-child{
            padding-top:0;
            border-top:0;
        }

        &:last-child{
            padding-bottom:0;
        }

        .info{
            margin-bottom:10px;

            .name{
                color:$blue-color;
                font-weight:bold;
            }

            .date{
                margin-left:5px;
                color:#999;
                font-size:12px;
            }

            .removeBtn{
                cursor: pointer;
                font-size:12px;
                border:0;
                background:none;

                &:hover{
                    text-decoration:underline;
                }
            }
        }
    }

    .btnClose{
        cursor: pointer;
        display:block;
        text-align: center;
        margin-top:20px;
        padding:15px 0;
        font-size:14px;
        background-color:#F2F2F2;  
    }
}

</style>
