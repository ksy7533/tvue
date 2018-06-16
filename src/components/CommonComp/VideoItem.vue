<template>
    <a class="link" v-on:click="goPage(itemData)">
        <p class="wrapImg">
            <img v-bind:src="itemData.img_src" alt="">
            <span class="playTime">{{itemData.duration}}</span>
        </p>
        <p class="tit">{{itemData.videoTitle}}</p>
        <p class="channelTit">{{itemData.channelTitle}}</p>
        <p class="info">
            <span class="viewCount"><i class="fas fa-play"></i> {{this.numberWithCommas(itemData.viewCount)}}회</span>
            <span class="date">{{itemData.date}}</span>
        </p>
    </a>
</template>

<script>
import { loadData } from '../../mixins/loadData.js'

export default {
    mixins: [loadData],
    props : ['itemData'],
    methods : {
        numberWithCommas : function(x) {
            if(x === undefined){
                return 0;
            }
            return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }
    }
}
</script>

<style lang="scss" scoped>
@import "../../styles/variables";
@import "../../styles/mixin";

.link{
    text-decoration:none;
    display: block;
    cursor: pointer;

    &:hover .tit{
        text-decoration:underline
    }
    
    .wrapImg{
        display: block;
        position: relative;

        &:after{
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

        img{
            width:100%;
            height:100%;
            border-radius: 5px;
        }

        .playTime{
            z-index: 10;
            position: absolute;
            bottom:10px;
            right:10px;
            display: inline-block;
            padding:3px;
            color:$white-color;
            font-size:11px;
            background:rgba(0, 0, 0, 0.6);
            border-radius:3px;
        }
    }
    
    .tit{
        margin-top:5px;
        color:#000;
        font-size:14px;
        font-weight:bold;
        @include txt_ellipse(18px, 2);
    }

    .channelTit{
        margin-top:5px;
        padding-right:20px;
        color:#848c9c;
        font-size:12px;
        @include txt_ellipse(18px, 1);
    }

    .info{
        margin-top:5px;
        padding-right:20px;
        color:#848c9c;
        font-size:12px;
        @include txt_ellipse(12px, 1);

        .date{
            position: relative;
            margin-left:6px;
            padding-left:10px;

            &:before{
                content: '';
                display: block;
                position: absolute;
                top:4px;
                left:0;
                width:1px;
                height:11px;
                background-color:#848c9c;
            }
        }
    }

    .viewCount{
        i{
            position: relative;
            top:-1px;
            font-size:10px;
        }
    }
}
</style>