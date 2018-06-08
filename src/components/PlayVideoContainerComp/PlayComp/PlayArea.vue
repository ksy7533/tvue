<template>
    <section class="areaPlay">
        <div class="wrapPlay">
            <Player></Player>
            <PlayList></PlayList>
        </div>
        <div class="detail">
            <h3>{{this.$store.state.currentVideo.videoTitle}}</h3>
            <p class="info">
                <span class="viewCount"><i class="fas fa-play"></i> 재생수 {{numberWithCommas(this.$store.state.currentVideo.viewCount)}}회</span>
                <span class="date">{{this.$store.state.currentVideo.date}}</span>
            </p>
            <p class="count">
                <span class="likeCount"><i class="far fa-thumbs-up"></i> {{numberWithCommas(this.$store.state.currentVideo.likeCount)}}</span>
                <span class="dislikeCount"><i class="far fa-thumbs-down"></i> {{numberWithCommas(this.$store.state.currentVideo.dislikeCount)}}</span>
                <span class="commentCount"><i class="far fa-comments"></i> {{numberWithCommas(this.$store.state.currentVideo.commentCount)}}</span>
            </p>
            <p class="txt">{{this.$store.state.currentVideo.description}}</p>
        </div>
    </section>
</template>

<script>
import Player from './Player.vue'
import PlayList from './PlayList.vue'

export default {
    components : {
        Player,
        PlayList
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

<style scoped>

.wrapPlay:after{
    content:'';
    display: block;
    clear:both;
}

.detail{
    position: relative;
    padding:20px 0;
    border-bottom:1px solid #d9d9d9;
}

.detail h3{
    margin-bottom:10px;
    font-weight:bold;
    font-size:16px;
}

.detail .info{
    margin-top:10px;
    color:#848c9c;
    font-size:14px;
}

.detail .count{
    position: absolute;
    top:25px;
    right:0;
}

.detail .count span{
    display: inline-block;
    margin-left:7px;
    color:#666;
    font-size:14px;
}

.detail .txt{
    line-height:18px;
    margin-top:10px;
    padding-right:20px;
    color:#848c9c;
    font-size:12px;
    height:54px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp:3;
    -webkit-box-orient: vertical;
    word-wrap:break-word; 
}
</style>
