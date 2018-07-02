<template>
    <nav class="wrapGnb">
        <div class="content">
            <ul class="gnb">
                <li v-bind:class="{on : changeClassOn('main')}">
                    <router-link class="link" v-bind:to="'/main'">전체</router-link>
                </li>

                <li v-for="(item, index) in gnb" v-bind:key="index" v-bind:class="{on : changeClassOn(item.id)}">
                    <router-link class="link" v-bind:to="'/totalVideo/channel/'+item.id">{{item.name}}</router-link>
                </li>
            </ul>

            <div class="sideMenu" v-if="this.$route.name === 'playVideo' && this.isLogin">
                <button class="like" v-on:click="likeVideo" v-if="!this.$store.state.isLikeVideo">동영상 찜하기 <i class="fas fa-hand-holding-heart"></i></button>
                <button class="like un" v-on:click="unLikeVideo" v-else>찜하기 해제 <i class="fas fa-hand-holding-heart"></i></button>
            </div>
        </div>
    </nav>
</template>

<script>
import HeaderTop from './HeaderTop.vue'
import Gnb from './Gnb.vue'
import firebase from 'firebase'
import { db } from 'config/db.js'
import {mapState} from 'vuex'

export default {
    mounted(){
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.isLogin = true
            } else {
                this.isLogin = false
            }
        })
    },

    computed:mapState(['currentGnbId', 'currentVideoData', 'gnb']),

    methods : {
        changeClassOn : function(itemId){
            if(itemId === this.currentGnbId.toString()){
                return true
            }else{
                return false
            }
        },

        likeVideo(){
            this.$store.dispatch('addLikeVideo', {
                currentVideoData: this.currentVideoData
            });
        },

        unLikeVideo(){
            this.$store.dispatch('removeLikeVideo', {
                currentVideoId : this.$route.params.videoId
            });
        }
    },

    data(){
        return {
            on : false,
            isLike : false,
            currentVideoKey: '',
            isLogin :false,
            isProcessing: false,
            isProcessing_02: false
        }
    }
}
</script>

<style lang="scss" scoped>
@import "../../styles/variables";
@import "../../styles/mixin";
@import "../../styles/extend";

.wrapGnb{
    box-shadow:0 1px 0 0 #D7DBE0;
    background-color:#fff;

    .content{
        margin:0 auto;
        width:1260px;

        &:after{
            @extend .clear;
        }
        .gnb{
            float:left;

            &:after{
                @extend .clear;
            }

            li{
                float:left;
                position: relative;
                margin-left:10px;

                &:first-child{
                    margin-left:0; 
                }

                &.on{
                    a{
                        color:#000;
                    }

                    &:after{
                        content:'';
                        display:block;
                        position: absolute;
                        bottom:0;
                        left:0;
                        width:100%;
                        height:2px;
                        background-color:#f7d715;
                    }
                }

                a{
                    display: block;
                    padding:15px 20px;
                    color:#6c7280;
                    font-size:13px;
                    font-weight:600;
                    text-decoration:none
                }
            }
        }

        .sideMenu{
            float:right;
            padding-top:8px;

            .like{
                cursor: pointer;
                padding:5px 10px;
                color:#000;
                font-weight:bold;
                background-color:#f7d715;
                border:0;
                border-radius: 5px;

                i{
                    font-size:14px;
                }

                &.un i{
                    color:red
                }
            }
        }
    }
}
</style>
