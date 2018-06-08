<template>
    <a class="link" v-on:click="changeContainer({
        videoId:itemData.id,
        channelId:itemData.channelId,
        title:itemData.videoTitle,
        channelTitle:itemData.channelTitle,
        date : itemData.date,
        description : itemData.description,
        viewCount: itemData.viewCount,
        commentCount: itemData.commentCount,
        likeCount : itemData.likeCount,
        dislikeCount : itemData.dislikeCount
    })">
        <p class="wrapImg">
            <img v-bind:src="itemData.img_src" alt="">
            <span class="playTime">{{itemData.duration}}</span>
        </p>
        <p class="tit">{{itemData.videoTitle}}</p>
        <p class="channelTit">{{itemData.channelTitle}}</p>
        <p class="date">{{itemData.date}}</p>
    </a>
</template>

<script>
import { loadData } from '../../mixins/loadData.js'

export default {
    mixins: [loadData],
    props : ['itemData']
}
</script>

<style>
a.link{
    text-decoration:none;
    display: block;
    cursor: pointer;
}

a.link:hover .tit{
    text-decoration:underline
}

a.link .wrapImg{
    display: block;
    position: relative;
}

a.link .wrapImg:after{
    content:'';
    display: block;
    position: absolute;
    top:0;
    left:0;
    width:100%;
    height:100%;
    background-color:rgba(0, 0, 0, 0.25);
    border-radius: 5px;
}

a.link .wrapImg img{
    width:200px;
    height:120px;
    border-radius: 5px;
}

a.link .wrapImg .playTime{
    z-index: 10;
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

a.link .tit{
    margin-top:5px;
    line-height:18px;
    color:#000;
    font-size:14px;
    font-weight:bold;
    max-height:36px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp:2;
    -webkit-box-orient: vertical;
    word-wrap:break-word; 
}

a.link .channelTit{
    line-height:18px;
    margin-top:5px;
    padding-right:20px;
    color:#848c9c;
    font-size:12px;
    height:18px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp:1;
    -webkit-box-orient: vertical;
    word-wrap:break-word; 
}

a.link .date{
    line-height:12px;
    margin-top:5px;
    padding-right:20px;
    color:#848c9c;
    font-size:12px;
    height:12px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp:1;
    -webkit-box-orient: vertical;
    word-wrap:break-word; 
}
</style>
