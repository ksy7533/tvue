<template>
    <div class="listPlay">
        <p class="tit"><i class="fas fa-align-left"></i> 관련 비디오 리스트</p>
        <ul class="list">
            <li v-for="(item, index) in arrData" v-bind:key="index">
                <a class="link" v-on:click="goPage(item)">
                    <span class="wrapImg"><img v-bind:src="item.img_src" alt=""></span>
                    <span class="txt">
                        <span class="tit">{{item.videoTitle}}</span>
                        <span class="date">{{item.date}}</span>
                    </span>
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
import { loadData } from '../../../mixins/loadData.js'
import moment from 'moment';

var YOUTUBE_API = "AIzaSyBQ1G-JhjIMd0bGr9IeF49NKeQ29roBttY";
var search_url = "https://www.googleapis.com/youtube/v3/search";

export default {
    mixins: [loadData],

    mounted(){
        this.getSearchData(search_url, {
            key : YOUTUBE_API,
            regionCode : 'kr',
            part : 'snippet',
            maxResults : '30',
            type : 'video',
            relatedToVideoId : this.$route.params.videoId
        }, this.arrData);
    },

    data(){
        return {
            arrData : []
        }
    }
}
</script>

<style scoped>
.listPlay{
    float:left;
    width:538px;
    background-color:#F7F8FA;
    border:1px solid #d9d9d9;
}

.listPlay>.tit{
    z-index:10;
    position: relative;
    padding:15px;
    font-weight:bold;
    box-shadow:0 1px 0 0 rgba(215,219,224,.5), 0 1px 3px 0 rgba(0,0,0,.08);
}

.listPlay .list{
    overflow-y:auto;
    height:357px;
}

.listPlay .list li .link{
    display: block;
    margin-top:5px;
    padding:0 15px;
    cursor: pointer;
}

.listPlay .list li:first-child .link{
    margin-top:15px;
}

.listPlay .list li:last-child .link{
    margin-bottom:15px;
}

.listPlay .list li .link:after{
    content:'';
    display: block;
    clear:both;
}

.listPlay .list li .link .wrapImg{
    float:left;
    display: block;
    position: relative;
}

.listPlay .list li .link .wrapImg img{
    width:100px;
    height:60px;
    border-radius: 5px;
}

.listPlay .list li .link .wrapImg:after{
    content:'';
    display: block;
    position: absolute;
    top:0;
    left:0;
    width:100px;
    height:60px;
    background-color:rgba(0, 0, 0, 0.25);
    border-radius: 5px;
}

.listPlay .list li .link .wrapImg .playTime{
    position: absolute;
    bottom:10px;
    right:10px;
    display: inline-block;
    padding:3px;
    color:#fff;
    font-size:11px;
    background:rgba(0, 0, 0, 0.6);
    border-radius:3px;
}

.listPlay .list li .link .txt{
    float:left;
    display: block;
    margin-left:15px;
    width:370px;
}

.listPlay .list li .link .txt .tit{
    max-height:36px;
    display: block;
    line-height:18px;
    font-size:14px;
    font-weight:bold;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp:2;
    -webkit-box-orient: vertical;
    word-wrap:break-word; 
}

.listPlay .list li .link .txt .date{
    display: block;
    margin-top:5px;
    color:#999;
    font-size:12px;
}

.listPlay .list li .link:hover .tit{
    text-decoration:underline;
}
</style>
