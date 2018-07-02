<template>
    <div class="listHot" v-bind:id="contents.id" v-bind:class="{on : isOver}" v-on:mouseover="isOver = !isOver" v-on:mouseout="isOver = !isOver">
        <div>
            <slot name="title"></slot>
        </div>

        <div class="wrapList">
            <ul class="list" v-for="(item, index) in ulOfNum" v-bind:key="index">
                <li v-for="(item, index) in arrData.slice((6 * index), (6 * (index + 1)))" v-bind:key="index"><VideoItem v-bind:itemData="item"></VideoItem></li>
            </ul>
        </div>

        <a href="#n" class="btnMore" v-on:click.prevent="goPage()">더보기</a>
        <div class="pages"></div>
        <!-- <div class="arrows"></div> -->
        <a class="btnRemove" v-on:click="removeList(contents.id)"><i class="fas fa-times"></i></a>
    </div>
</template>

<script>
import loadData from 'mixins/loadData.js'
import VideoItem from '../../CommonComp/videoItem.vue'

import $ from 'jquery'
import Zumslide from '../../../assets/js/zumSlide.js'
import firebase from 'firebase/app'
import { db } from 'config/db.js'
import Constant from 'constant'

export default {
    props : ['contents'],
    mixins: [loadData],

    mounted(){
        this.getSearchData(Constant_SEARCH_URL, {
            key : Constant_YOUTUBE_API_KEY,
            regionCode : 'KR',
            part : 'snippet',
            maxResults : this.maxResults,
            type : 'video',
            order : this.contents.order,
            q : this.contents.q
        }, this.arrData);

        $('#'+ this.contents.id + ' .wrapList').zumSlide({
            appendArrows: $('#'+ this.contents.id),
            pageNum: true,
            appendPageNum: $('#'+ this.contents.id +' .pages'),
            infinite: true
        });
    },

    data(){
        return {
            ulOfNum : 5,
            liOfNum : 6,
            arrData : [],
            isOver : false
        }
    },

    computed : {
        maxResults : function(){
            return this.ulOfNum * this.liOfNum;
        }
    },

    watch: {
        contents : function(val){
            this.arrData = [];
            this.getSearchData(Constant_SEARCH_URL, {
                key : Constant_YOUTUBE_API_KEY,
                regionCode : 'KR',
                part : 'snippet',
                maxResults : this.maxResults,
                type : 'video',
                order : val.order,
                q : val.q
            }, this.arrData);
        }
    },

    methods : {
        goPage : function() {
            this.$router.push({ name: 'totalVideoHot', params: { query : this.contents.q} });
        },

        removeList : function(contentsId){
            let currentUser = firebase.auth().currentUser;
            let listsRef = db.ref('lists/' + currentUser.uid).child('custom_query/' + contentsId);
            listsRef.remove();
        }
    },
    
    components: {
        VideoItem
    }
    
}
</script>

<style lang="scss" scoped>
@import "../../../styles/variables";
@import "../../../styles/mixin";
@import "../../../styles/extend";

.listHot{
    position: relative;
    padding:20px 0 0 0;
    border-top:1px solid #d9d9d9;

    &:first-child{
        border-top:none;    
    }

    &:last-child{
        .btnMore{
            border-bottom-left-radius: 5px;
            border-bottom-right-radius: 5px;
        }
    }

    h2{
        display: inline-block;
        margin-bottom:10px;
        padding:0 20px;
        font-size:16px;

        .keyword{
            color:$blue-color;
            font-size:20px;
            font-weight:bold;
        }
    }

    .list{
        display: none;
        padding:0 20px;
        &:after{
            @extend .clear;
        }

        li{
            float:left;
            margin-left:10px;
            width:194px;
            height:200px;

            &:first-child{
                margin-left:0;
            }
        }
    }

    .pages{
        text-align:center;
        position: absolute;
        top:25px;
        right:50%;
        width:30px;
        font-size:14px;
        transform: translateX(50%);

        .zum_total_num{
            color:blue;
        }
    }

    /deep/ button{
        cursor: pointer;
        z-index:50;
        display: none;
        position: absolute;
        top:100px;
        width:50px;
        height:60px;
        font-size:0;
        border:1px solid #d9d9d9;
        background-color:$white-color;
        border-radius:5px;

        &.zum_prev_btn{
            left:-25px;

            &:before{
                content:'\f104';
                font-family: "Font Awesome 5 Free";
                font-weight: 900;
                position:absolute;
                top:10px;
                left:12px;
                font-size:40px;
            }
        }

        &.zum_next_btn{
            right:-25px;

            &:after{
                content:'\f105';
                font-family: "Font Awesome 5 Free";
                font-weight: 900;
                position:absolute;
                top:10px;
                left:12px;
                font-size:40px;
            }
        }

        &:focus{
            outline:0;
        }
    }

    &.on{
        /deep/ .zum_prev_btn, /deep/ .zum_next_btn{
            display: block;
        }
    }

    .btnMore{
        display:block;
        text-decoration: none;
        text-align: center;
        margin-top:10px;
        padding:15px 0;
        color:#000;
        font-size:14px;
        font-weight:bold;
        background-color:#ededed;
        border-top:1px solid #d9d9d9;

        &:hover{
            color:$white-color;
            background-color:$blue-color;
        }
    }

    .btnRemove{
        cursor: pointer;
        position: absolute;
        top:20px;
        right:25px;
        font-size:20px;

    }
}
</style>