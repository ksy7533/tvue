<template>
    <section class="mainHot" v-if="arrData.length">
        <div class="col type_01">
            <a class="link" v-on:click="goPage(arrData[0])">
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
            <a class="link" v-on:click="goPage(arrData[1])">
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
            <a class="link" v-on:click="goPage(arrData[2])">
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
            <a class="link" v-on:click="goPage(arrData[3])">
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
            <a class="link" v-on:click="goPage(arrData[4])">
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
            <a class="link" v-on:click="goPage(arrData[5])">
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
            <a class="link" v-on:click="goPage(arrData[6])">
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
            <a class="link" v-on:click="goPage(arrData[7])">
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
            <a class="link" v-on:click="goPage(arrData[8])">
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
            <a class="link" v-on:click="goPage(arrData[9])">
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
    position: relative;
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

