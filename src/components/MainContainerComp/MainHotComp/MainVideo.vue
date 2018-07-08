<template>
    <div class="mainVideo">
        <div class="video">
            <youtube :video-id="item.id" @ready="ready" player-width="100%" player-height="100%" class="player"></youtube>
        </div>
        <div class="detail">
            <p class="intro">YOUTUBE에서<br/>지금 가장 핫한 동영상</p>
            <p class="titChannel">{{item.channelTitle}}</p>
            <p class="tit">
                {{item.videoTitle}}
            </p>
            <p class="description">{{item.description}}</p>
            <p class="count">
                <span class="viewCount"><i class="fas fa-play"></i> {{item.viewCount}}</span>
                <span class="likeCount"><i class="far fa-thumbs-up"></i> {{item.likeCount}}</span>
                <span class="date">{{item.date}}</span>
            </p>
        </div>
    </div>
</template>

<script>
import Vue from 'vue'
import VueYouTubeEmbed from 'vue-youtube-embed'

Vue.use(VueYouTubeEmbed)

export default {
    props :['item'],

     methods: {
        ready (player) {
            this.player = player
        }
     }
}
</script>

<style lang="scss" scoped>
@import "../../../styles/variables";
@import "../../../styles/mixin";
@import "../../../styles/extend";

.mainVideo{
    margin:0 auto;
    width:1180px;

    &:after{
        @extend .clear;
    }

    .video{
        float:left;
        width:760px;
        height:450px;

        .player{
            width:100%;
            height:100%;
        }
    }

    .detail{
        float:left;
        box-sizing: border-box;
        padding:40px 0 40px 40px;
        width:420px;
        color:#fff;

        .intro{
            text-align:right;
            margin-bottom:60px;
            line-height:48px;
            font-size:40px;
            font-weight:bold;
        }

        .titChannel{
            margin-bottom:10px;
            color:$blue-color;
            font-size:14px;
            font-weight:bold;
        }

        .tit{
            text-align:left;
            margin-bottom:10px;
            font-size:20px;

            @include txt_ellipse(28px, 2);
        }

        .description{
            text-align:left;
            margin-bottom:10px;
            font-size:16px;

            @include txt_ellipse(24px, 4);
        }

        .count{
            font-size:14px;

            .viewCount{
                margin-right:10px;
            }

            .date{
                margin-left:10px;
            }
        }
    }
}
</style>
