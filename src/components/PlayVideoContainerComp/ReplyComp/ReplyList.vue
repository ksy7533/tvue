<template>
    <div class="list">
        <div class="item" v-for="(item, index) in arrReply" v-bind:key="index">
            <div class="info">
                <span class="name">{{item.displayName}}</span>
                <span class="date">{{item.date}}</span>
            </div>
            <p class="txt">{{item.replyText}}</p>
        </div>
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

        let replysRef = db.ref('replys/'+videoId);

        replysRef.on('value', (data) => {
            console.log("ff")
            data.forEach((item, index) => {
                console.log(index)
                this.arrReply.push({
                    displayName: item.val().displayName,
                    date: item.val().date,
                    replyText: item.val().replyText
                });
                console.log(this.arrReply)
            })
        });
        
    }
}
</script>

<style lang="scss" scoped>
@import "../../../styles/variables";
@import "../../../styles/mixin";
@import "../../../styles/extend";

.list{
    padding:40px;
    border-bottom:1px solid #d9d9d9;

    .item{
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
        }
    }
}

</style>
