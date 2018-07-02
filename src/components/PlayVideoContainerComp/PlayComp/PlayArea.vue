<template>
    <section class="areaPlay">
        <div class="wrapPlay">
            <Player></Player>
            <PlayList></PlayList>
        </div>
        <div class="detail">
            <h3>{{currentVideoData.videoTitle}}</h3>
            <p class="info">
                <span class="viewCount"><i class="fas fa-play"></i> 재생수 {{numberWithCommas(currentVideoData.viewCount)}}회</span>
                <span class="date">등록 {{currentVideoData.date}}</span>
            </p>
            <p class="count">
                <span class="likeCount"><i class="far fa-thumbs-up"></i> {{numberWithCommas(currentVideoData.likeCount)}}</span>
                <span class="dislikeCount"><i class="far fa-thumbs-down"></i> {{numberWithCommas(currentVideoData.dislikeCount)}}</span>
                <span class="commentCount"><i class="far fa-comments"></i> {{numberWithCommas(currentVideoData.commentCount)}}</span>
            </p>
            <p class="txt">{{currentVideoData.description}}</p>
        </div>
    </section>
</template>

<script>
import Player from './Player.vue'
import PlayList from './PlayList.vue'

export default {
    props:['currentVideoData'],

    components : {
        Player,
        PlayList
    },

    mounted(){
        this.$store.commit('setCurrentVideo', {
              currentVideoData : this.currentVideoData
        });
    },

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
@import "../../../styles/variables";
@import "../../../styles/mixin";
@import "../../../styles/extend";

.areaPlay{
    .wrapPlay{
        &:after{
            @extend .clear;
        }
    }
    .detail{
        position: relative;
        padding:20px 0;
        border-bottom:1px solid #d9d9d9;

        h3{
            margin-bottom:10px;
            font-weight:bold;
            font-size:16px;        
        }

        .info{
            margin-top:10px;
            color:#848c9c;
            font-size:14px;

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

        .count{
            position: absolute;
            top:25px;
            right:0;

            span{
                display: inline-block;
                margin-left:7px;
                color:#666;
                font-size:14px;
            }
        }
        
        .txt{
            margin-top:10px;
            padding-right:20px;
            color:#666;
            font-size:12px;

            @include txt_ellipse(18px, 3);
        }
    }
}
</style>
