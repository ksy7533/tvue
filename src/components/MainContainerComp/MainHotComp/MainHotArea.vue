<template>
    <section class="mainHot" v-if="arrData.length">
        <div class="col type_01">
            <a class="link" v-on:click="changeContainer({
                videoId:arrData[0].id,
                channelId:arrData[0].channelId,
                title:arrData[0].videoTitle,
                channelTitle:arrData[0].channelTitle,
                date : arrData[0].date,
                description : arrData[0].description,
                viewCount: arrData[0].viewCount,
                commentCount: arrData[0].commentCount,
                likeCount : arrData[0].likeCount,
                dislikeCount : arrData[0].dislikeCount
            })">
                <div class="item type_01">
                    <div class="wrapImg"><img v-bind:src="arrData[0].img_src" alt=""></div>
                    <div class="info">
                        <div class="wrapInfo">
                            <p class="titChannel">{{arrData[0].channelTitle}}</p>
                            <p class="tit">
                                {{arrData[0].videoTitle}}
                            </p>
                            <p class="count">
                                <span class="viewCount"><i class="fas fa-play"></i> {{arrData[0].viewCount}}</span>
                                <span class="likeCount"><i class="far fa-thumbs-up"></i> {{arrData[0].likeCount}}</span>
                            </p>
                        </div>
                    </div>
                </div>
            </a>
            <a class="link" v-on:click="changeContainer({
                videoId:arrData[1].id,
                channelId:arrData[1].channelId,
                title:arrData[1].videoTitle,
                channelTitle:arrData[1].channelTitle,
                date : arrData[1].date,
                description : arrData[1].description,
                viewCount: arrData[1].viewCount,
                commentCount: arrData[1].commentCount,
                likeCount : arrData[1].likeCount,
                dislikeCount : arrData[1].dislikeCount
            })">
                <div class="item type_02">
                    <div class="info">
                        <p class="titChannel">{{arrData[1].channelTitle}}</p>
                        <p class="tit">
                            {{arrData[1].videoTitle}}
                        </p>
                    </div>
                    <div class="wrapImg"><img v-bind:src="arrData[1].img_src" alt=""></div>
                </div>
            </a>
            <a class="link" v-on:click="changeContainer({
                videoId:arrData[2].id,
                channelId:arrData[2].channelId,
                title:arrData[2].videoTitle,
                channelTitle:arrData[2].channelTitle,
                date : arrData[2].date,
                description : arrData[2].description,
                viewCount: arrData[2].viewCount,
                commentCount: arrData[2].commentCount,
                likeCount : arrData[2].likeCount,
                dislikeCount : arrData[2].dislikeCount
            })">
                <div class="item type_02">
                    <div class="info">
                        <p class="titChannel">{{arrData[2].channelTitle}}</p>
                        <p class="tit">
                            {{arrData[2].videoTitle}}
                        </p>
                    </div>
                    <div class="wrapImg"><img v-bind:src="arrData[2].img_src" alt=""></div>
                </div>
            </a>
        </div>
        <div class="col type_02">
            <a class="link" v-on:click="changeContainer({
                videoId:arrData[3].id,
                channelId:arrData[3].channelId,
                title:arrData[3].videoTitle,
                channelTitle:arrData[3].channelTitle,
                date : arrData[3].date,
                description : arrData[3].description,
                viewCount: arrData[3].viewCount,
                commentCount: arrData[3].commentCount,
                likeCount : arrData[3].likeCount,
                dislikeCount : arrData[3].dislikeCount
            })">
                <div class="item type_01">
                    <div class="wrapImg"><img v-bind:src="arrData[3].img_src" alt=""></div>
                    <div class="info">
                        <div class="wrapInfo">
                            <p class="titChannel">{{arrData[3].channelTitle}}</p>
                            <p class="tit">
                                {{arrData[3].videoTitle}}
                            </p>
                            <p class="count">
                                <span class="viewCount"><i class="fas fa-play"></i> {{arrData[3].viewCount}}</span>
                                <span class="likeCount"><i class="far fa-thumbs-up"></i> {{arrData[3].likeCount}}</span>
                            </p>
                        </div>
                    </div>
                </div>
            </a>
            <a class="link" v-on:click="changeContainer({
                videoId:arrData[4].id,
                channelId:arrData[4].channelId,
                title:arrData[4].videoTitle,
                channelTitle:arrData[4].channelTitle,
                date : arrData[4].date,
                description : arrData[4].description,
                viewCount: arrData[4].viewCount,
                commentCount: arrData[4].commentCount,
                likeCount : arrData[4].likeCount,
                dislikeCount : arrData[4].dislikeCount
            })">
                <div class="item type_01">
                    <div class="wrapImg"><img v-bind:src="arrData[4].img_src" alt=""></div>
                    <div class="info">
                        <div class="wrapInfo">
                            <p class="titChannel">{{arrData[4].channelTitle}}</p>
                            <p class="tit">
                                {{arrData[4].videoTitle}}
                            </p>
                            <p class="count">
                                <span class="viewCount"><i class="fas fa-play"></i> {{arrData[4].viewCount}}</span>
                                <span class="likeCount"><i class="far fa-thumbs-up"></i> {{arrData[4].likeCount}}</span>
                            </p>
                        </div>
                    </div>
                </div>
            </a>
        </div>
        <div class="col type_03">
            <a class="link" v-on:click="changeContainer({
                videoId:arrData[5].id,
                channelId:arrData[5].channelId,
                title:arrData[5].videoTitle,
                channelTitle:arrData[5].channelTitle,
                date : arrData[5].date,
                description : arrData[5].description,
                viewCount: arrData[5].viewCount,
                commentCount: arrData[5].commentCount,
                likeCount : arrData[5].likeCount,
                dislikeCount : arrData[5].dislikeCount
            })">
                <div class="item type_01">
                    <div class="wrapImg"><img v-bind:src="arrData[5].img_src" alt=""></div>
                    <div class="info">
                        <div class="wrapInfo">
                            <p class="titChannel">{{arrData[5].channelTitle}}</p>
                            <p class="tit">
                                {{arrData[5].videoTitle}}
                            </p>
                        </div>
                    </div>
                </div>
            </a>
            <a class="link" v-on:click="changeContainer({
                videoId:arrData[6].id,
                channelId:arrData[6].channelId,
                title:arrData[6].videoTitle,
                channelTitle:arrData[6].channelTitle,
                date : arrData[6].date,
                description : arrData[6].description,
                viewCount: arrData[6].viewCount,
                commentCount: arrData[6].commentCount,
                likeCount : arrData[6].likeCount,
                dislikeCount : arrData[6].dislikeCount
            })">
                <div class="item type_01">
                    <div class="wrapImg"><img v-bind:src="arrData[6].img_src" alt=""></div>
                    <div class="info">
                        <div class="wrapInfo">
                            <p class="titChannel">{{arrData[6].channelTitle}}</p>
                            <p class="tit">
                                {{arrData[6].videoTitle}}
                            </p>
                        </div>
                    </div>
                </div>
            </a>
            <a class="link" v-on:click="changeContainer({
                videoId:arrData[7].id,
                channelId:arrData[7].channelId,
                title:arrData[7].videoTitle,
                channelTitle:arrData[7].channelTitle,
                date : arrData[7].date,
                description : arrData[7].description,
                viewCount: arrData[7].viewCount,
                commentCount: arrData[7].commentCount,
                likeCount : arrData[7].likeCount,
                dislikeCount : arrData[7].dislikeCount
            })">
                <div class="item type_01">
                    <div class="wrapImg"><img v-bind:src="arrData[7].img_src" alt=""></div>
                    <div class="info">
                        <div class="wrapInfo">
                            <p class="titChannel">{{arrData[7].channelTitle}}</p>
                            <p class="tit">
                                {{arrData[7].videoTitle}}
                            </p>
                        </div>
                    </div>
                </div>
            </a>
            <a class="link" v-on:click="changeContainer({
                videoId:arrData[8].id,
                channelId:arrData[8].channelId,
                title:arrData[8].videoTitle,
                channelTitle:arrData[8].channelTitle,
                date : arrData[8].date,
                description : arrData[8].description,
                viewCount: arrData[8].viewCount,
                commentCount: arrData[8].commentCount,
                likeCount : arrData[8].likeCount,
                dislikeCount : arrData[8].dislikeCount
            })">
                <div class="item type_01">
                    <div class="wrapImg"><img v-bind:src="arrData[8].img_src" alt=""></div>
                    <div class="info">
                        <div class="wrapInfo">
                            <p class="titChannel">{{arrData[8].channelTitle}}</p>
                            <p class="tit">
                                {{arrData[8].videoTitle}}
                            </p>
                        </div>
                    </div>
                </div>
            </a>
            <a class="link" v-on:click="changeContainer({
                videoId:arrData[9].id,
                channelId:arrData[9].channelId,
                title:arrData[9].videoTitle,
                channelTitle:arrData[9].channelTitle,
                date : arrData[9].date,
                description : arrData[9].description,
                viewCount: arrData[9].viewCount,
                commentCount: arrData[9].commentCount,
                likeCount : arrData[9].likeCount,
                dislikeCount : arrData[9].dislikeCount
            })">
                <div class="item type_01">
                    <div class="wrapImg"><img v-bind:src="arrData[9].img_src" alt=""></div>
                    <div class="info">
                        <div class="wrapInfo">
                            <p class="titChannel">{{arrData[9].channelTitle}}</p>
                            <p class="tit">
                                {{arrData[9].videoTitle}}
                            </p>
                        </div>
                    </div>
                </div>
            </a>
        </div>
    </section>
</template>

<script>
import { loadData } from '../../../mixins/loadData.js'

var YOUTUBE_API = "AIzaSyBQ1G-JhjIMd0bGr9IeF49NKeQ29roBttY";
var video_url = "https://www.googleapis.com/youtube/v3/videos";

export default {
    mixins: [loadData],

    mounted(){
        this.getData(video_url, {
            key : YOUTUBE_API,
            chart : 'mostPopular',
            regionCode : 'kr',
            part : 'snippet,contentDetails,statistics',
            maxResults : '10'
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
.link{
    cursor: pointer;
}

.mainHot{
    margin-bottom:40px;
    width:1260px;
    height:500px;
    background-color:#2b2b2b;
}

.mainHot:after{
    content: '';
    display: block;
    clear:both;
}

.mainHot .col{
    float:left;
}

.mainHot .col.type_01{
    width:520px;
}

.mainHot .col.type_02{
    width:520px;
}

.mainHot .col.type_03{
    width:220px;
}

.mainHot .item{
    position: relative;
    box-sizing: border-box;
    border:1px solid #000;
}

.mainHot .item.type_01:after{
    content: '';
    display: block;
    position: absolute;
    top:0;
    left:0;
    width:100%;
    height:100%;
    background: url('../../../assets/images/bg_tile_mask.png') no-repeat 0 0;
}

.mainHot .item.type_02 .wrapImg:after{
    content: '';
    display: block;
    position: absolute;
    top:0;
    left:0;
    width:100%;
    height:100%;
    background: url('../../../assets/images/bg_tile_mask.png') no-repeat 0 0;
}

.mainHot .item .wrapImg{
    width:100%;
    height:100%;
}

.mainHot .item .wrapImg img{
    width:100%;
    height:100%;
}

.mainHot .col.type_01 .item.type_01 .info, .mainHot .col.type_02 .item.type_01 .info{
    z-index: 100;
    position: absolute;
    bottom:0;
    left:0;
    box-sizing: border-box;
    padding:20px;
    width:100%;
    height:140px;
}

.mainHot .col.type_01 .item.type_01 .info .wrapInfo, .mainHot .col.type_02 .item.type_01 .info .wrapInfo{
    z-index: 50;
    position: absolute;
    bottom:20px;
}

.mainHot .col.type_01 .item.type_01 .info:after, .mainHot .col.type_02 .item.type_01 .info:after{
    content: '';
    display: block;
    position: absolute;
    top:0;
    left:0;
    width:100%;
    height:100%;
    background: url('../../../assets/images/bg_tile_large.png') repeat-x 0 0;
}

.mainHot .item.type_01 .info .titChannel{
    margin-bottom:10px;
    color:#fff;
    font-size:14px;
}

.mainHot .item.type_01 .info .tit{
    color:#fff;
    line-height:24px;
    font-size:20px;
    font-weight:bold;
    max-height:48px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp:2;
    -webkit-box-orient: vertical;
    word-wrap:break-word; 
}

.mainHot .item.type_01 .info .count{
    margin-top:10px;
    color:#fff;
    font-size:14px;
}

.mainHot .col.type_01 .item.type_01{
    width:520px;
    height:300px;
}

.mainHot .col.type_01 .item.type_02{
    width:520px;
    height:100px;
}

.mainHot .col.type_01 .item.type_02:after{
    content: '';
    display: block;
    clear:both;
}

.mainHot .col.type_01 .item.type_02 .info{
    float:left;
    box-sizing: border-box;
    padding:20px;
    width:338px;
    height:100px;
}

.mainHot .col.type_01 .item.type_02 .info .tit{
    color:#fff;
    line-height:20px;
    font-size:16px;
    font-weight:bold;
    max-height:40px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp:2;
    -webkit-box-orient: vertical;
    word-wrap:break-word; 
}

.mainHot .col.type_01 .item.type_02 .info .titChannel{
    margin-bottom:5px;
    color:#2282f2;
    font-size:12px;
}

.mainHot .col.type_01 .item.type_02 .wrapImg{
    float:left;
    position: relative;
    width:180px;
    height:98px;
}


.mainHot .col.type_03 .item.type_01 .info .titChannel{
    margin-bottom:5px;
    font-size:12px;
}

.mainHot .col.type_03 .item.type_01 .info .tit{
    font-size:14px;
}

.mainHot .col.type_02 .item.type_01{
    width:520px;
    height:250px;
}

.mainHot .col.type_03 .item.type_01{
    width:220px;
    height:100px;
}

.mainHot .col.type_03 .item.type_01 .info{
    position: absolute;
    bottom:0;
    left:0;
    width:100%;
    height:55px;    
}

.mainHot .col.type_03 .item.type_01 .info .wrapInfo{
    z-index: 50;
    position: relative;
    padding:10px;
}

.mainHot .col.type_03 .item.type_01 .info .wrapInfo .tit{
    color:#fff;
    line-height:20px;
    font-size:16px;
    font-weight:bold;
    max-height:20px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp:1;
    -webkit-box-orient: vertical;
    word-wrap:break-word; 
}
</style>

