<template>
    <nav class="wrapGnb">
        <div class="content">
            <ul class="gnb">
                <li v-bind:class="{on : changeClassOn('main')}">
                    <router-link class="link" v-bind:to="'/main'">전체</router-link>
                </li>

                <li v-on:mouseover="overGnb" v-on:mouseout="outGnb">
                    <a>채널</a>
                    <div class="depth">
                        <ul>
                           <li v-for="(item, index) in gnb" v-bind:key="index" v-bind:class="{on : changeClassOn(item.id)}">
                                <router-link class="link" v-bind:to="'/totalVideo/channel/'+item.id">{{item.name}}</router-link>
                            </li>
                        </ul>
                    </div> 
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
        },

        overGnb(e){
            let target = e.target;
            let eleDepth = target.nextElementSibling;
            eleDepth.style.display = "block";
        },

        outGnb(e){
            let target = e.target;
            let eleDepth = e.target.parentElement.parentElement.parentElement;
            if(eleDepth.classList.contains('depth')){
                eleDepth.style.display="none";
            }
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
    min-width:1260px;
    // box-shadow:0 1px 0 0 #D7DBE0;
    border-bottom:1px solid #d9d9d9;
    background-color:#fff;

    .content{
        padding: 0 40px;

        &:after{
            @extend .clear;
        }
        .gnb{
            float:left;

            &:after{
                @extend .clear;
            }

            &>li{
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

                &>a{
                    cursor: pointer;
                    display: block;
                    padding:15px 20px;
                    color:#6c7280;
                    font-size:13px;
                    font-weight:600;
                    text-decoration:none;
                }

                .depth{
                    display:none;
                    position: absolute;
                    top:43px;
                    left:0;
                    width:200px;
                    background-color:#fff;
                    box-shadow:0 0 0 1px rgba(0, 0, 0, 0.03), 0 1px 2px 0 rgba(0, 0, 0, 0.19);

                    a{
                        display: block;
                        padding:15px 20px;
                        color:#6c7280;
                        font-size:13px;
                        font-weight:600;
                        text-decoration:none;
                    }
                }
            }

            &>li.over{
                .depth{
                    display:block;
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
