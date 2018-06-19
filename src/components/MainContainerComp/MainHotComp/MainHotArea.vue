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

<style lang="scss" scoped>
@import "../../../styles/variables";
@import "../../../styles/mixin";
@import "../../../styles/extend";

.mainHot{
    width:1260px;
    height:500px;
    background-color:#2b2b2b;

    &:after{
        @extend .clear;
    }

    .col{
        float:left;

        .item{
             &.type_01{
                 .info {
                    .titChannel{
                        margin-bottom:10px;
                        color:#fff;
                        font-size:14px;
                    }

                    .tit{
                        color:#fff;
                        font-size:20px;
                        font-weight:bold;
                        @include txt_ellipse(24px, 2);
                    }

                    .count{
                        margin-top:10px;
                        color:#fff;
                        font-size:14px;
                    }
                }
             }
        }

        &.type_01{
            width:520px;

            .item{
                &.type_01{
                    width:520px;
                    height:300px;

                    .info{
                        z-index: 100;
                        position: absolute;
                        bottom:0;
                        left:0;
                        box-sizing: border-box;
                        padding:20px;
                        width:100%;

                        &:after{
                            content: '';
                            display: block;
                            position: absolute;
                            top:0;
                            left:0;
                            width:100%;
                            height:100%;
                            background: url('../../../assets/images/bg_tile_large.png') repeat-x 0 0;
                        }

                        .wrapInfo{
                            z-index: 50;
                            position: relative;
                        }

                        .info{
                            .wrapInfo{
                                .titChannel{
                                    margin-bottom:10px;
                                    color:#fff;
                                    font-size:14px;
                                }
                            }

                            .tit{
                                color:#fff;
                                font-size:20px;
                                font-weight:bold;
                                @include txt_ellipse(24px, 2);
                            }
                        }
                    }
                }

                &.type_02{
                    .wrapImg{
                        float:left;
                        position: relative;
                        width:180px;
                        height:98px;
                    }

                    .info{
                        float:left;
                        box-sizing: border-box;
                        padding:20px;
                        width:338px;
                        height:100px;

                        .tit{
                            color:#fff;
                            font-size:16px;
                            font-weight:bold;
                            @include txt_ellipse(20px, 2);
                            
                        }

                        .titChannel{
                            margin-bottom:5px;
                            color:#2282f2;
                            font-size:12px;
                        }
                    }
                }
            }
        }

        &.type_02{
            width:520px;

            .item{
                width:520px;
                height:100px;

                &:after{
                    @extend .clear;
                }

                &.type_01{
                    width:520px;
                    height:250px;

                    .info{
                        z-index: 100;
                        position: absolute;
                        bottom:0;
                        left:0;
                        box-sizing: border-box;
                        padding:20px;
                        width:100%;

                        &:after{
                            content: '';
                            display: block;
                            position: absolute;
                            top:0;
                            left:0;
                            width:100%;
                            height:100%;
                            background: url('../../../assets/images/bg_tile_large.png') repeat-x 0 0;
                        }

                        .wrapInfo{
                            z-index: 50;
                            position: relative;
                        }
                    }
                }
            }
        }

        &.type_03{
            width:220px;

            .item{
                &.type_01{
                    width:220px;
                    height:100px;

                    .info{
                        position: absolute;
                        bottom:0;
                        left:0;
                        width:100%;
                        height:55px;    

                        .titChannel{
                            margin-bottom:5px;
                            font-size:12px;
                        }

                        .tit{
                            font-size:14px;
                        }

                        .wrapInfo{
                            z-index: 50;
                            position: relative;
                            padding:10px;

                            .tit{
                                color:#fff;
                                font-size:16px;
                                font-weight:bold;
                                @include txt_ellipse(20px, 1);
                            }
                        }
                    }
                }
            }
        }

        .link{
            cursor: pointer;

            .item{
                position: relative;
                box-sizing: border-box;
                border:1px solid #000;
                
                .wrapImg{
                    &:after{
                        content: '';
                        display: block;
                        position: absolute;
                        top:0;
                        left:0;
                        width:100%;
                        height:100%;
                        background: url('../../../assets/images/bg_tile_mask.png') no-repeat 0 0;
                    }
                }
                
                .wrapImg{
                    width:100%;
                    height:100%;

                    img{
                        width:100%;
                        height:100%;
                    }
                }
            }
        }
    }
}
</style>