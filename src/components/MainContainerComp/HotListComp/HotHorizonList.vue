<template>
    <div class="listHot" v-bind:id="contents.id">
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
        <div class="arrows"></div>
        <a class="btnRemove" v-on:click="removeList(contents.id)"><i class="fas fa-times"></i></a>
    </div>
</template>

<script>
import { loadData } from '../../../mixins/loadData.js'
import VideoItem from '../../CommonComp/videoItem.vue'

import $ from 'jquery'
import Zumslide from '../../../assets/js/zumSlide.js'

var YOUTUBE_API = "AIzaSyBQ1G-JhjIMd0bGr9IeF49NKeQ29roBttY";
var search_url = "https://www.googleapis.com/youtube/v3/search";

export default {
    props : ['contents'],
    mixins: [loadData],

    mounted(){
        $('#'+ this.contents.id + ' .wrapList').zumSlide({
            appendArrows: $('#'+ this.contents.id +' .arrows'),
            pageNum: true,
            appendPageNum: $('#'+ this.contents.id +' .pages'),
            infinite: true
        });

        this.getSearchData(search_url, {
            key : YOUTUBE_API,
            regionCode : 'KR',
            part : 'snippet',
            maxResults : this.maxResults,
            type : 'video',
            order : this.contents.order,
            q : this.contents.q
        }, this.arrData);
    },

    data(){
        return {
            ulOfNum : 3,
            liOfNum : 6,
            arrData : []
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
            this.getSearchData(search_url, {
                key : YOUTUBE_API,
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
            this.$router.push({ name: 'totalVideoHot', params: { query : this.contents.q, order : this.contents.order } });
        },

        removeList : function(contentsId){
            this.$store.commit('removeCustomListData', {
                contentsId
            });
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
    }
    
    .arrows{
        position: absolute;
        top:20px;
        right:75px;

        button{
            color:red
        }
    }

    .btnMore{
        display:block;
        text-decoration: none;
        text-align: center;
        // position: absolute;
        // top:25px;
        // left:25px;
        margin-top:10px;
        padding:15px 0;
        color:#999;
        font-size:14px;
        font-weight:bold;
        background-color:$white-color;
        border-top:1px solid #d9d9d9;

        &:hover{
            color:$white-color;
            background-color:$blue-color;
        }
    }

    .btnRemove{
        cursor: pointer;
        position: absolute;
        top:25px;
        right:25px;
        font-size:20px;

    }
}
</style>