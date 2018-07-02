<template>
    <div class="totalContent">
        <div class="areaTop">
            <h2 >
                <strong>{{title}}</strong>
                <span v-if="this.$route.params.channelId">채널</span>
                <span v-else-if="this.$route.params.query"> 관련동영상</span>
            </h2>
        </div>
        <div class="" v-if="!loading">
            <ul class="list">
                <li v-for="(item, index) in contents" v-bind:key="index">
                    <VideoItem v-bind:itemData="item"></VideoItem>
                </li>
            </ul>
            <a href="#n" class="btnMore" v-if="isNextPage" v-on:click.prevent="addListData()">비디오 더보기</a>
            <a href="#top" class="btnGotoTop"><i class="far fa-arrow-alt-circle-up"></i></a>
        </div>
        <div class="totalContent loading" v-else>
            <i class="fas fa-spinner"></i>
        </div>
    </div>
</template>

<script>
import VideoItem from '../CommonComp/videoItem.vue'

import ytDurationFormat from 'youtube-duration-format'
import moment from 'moment'
import loadData from 'mixins/loadData.js'
import firebase from 'firebase/app'
import { db } from 'config/db.js'
import Constant from 'constant'

export default {
    mixins: [loadData],

    mounted(){
        /* 채널리스트 */
        if(this.$route.params.channelId){
            this.$store.commit('setKeyword', {
                keyword : ''
            });

            this.gnb.forEach((item) => {
                if((item.id) === this.$route.params.channelId.toString()){
                    this.title = item.name;
                }
            })

            this.getVideoData(Constant.VIDEO_URL, {
                key : Constant.YOUTUBE_API_KEY,
                chart : 'mostPopular',
                regionCode : 'kr',
                maxResults : '30',
                part : 'snippet,contentDetails,statistics',
                videoCategoryId : this.$route.params.channelId
            }, this.contents)
            
            this.setCurrentGnbId();
        }

        /* 커스텀 리스트 */
        else if(this.$route.params.query){
            this.title = this.$route.params.query;

            this.$store.commit('setKeyword', {
                keyword : this.$route.params.query
            });

            this.getSearchData(Constant.SEARCH_URL, {
                key : Constant.YOUTUBE_API_KEY,
                regionCode : 'kr',
                part : 'snippet',
                maxResults : '30',
                type : 'video',
                order : this.sort,
                q : this.$route.params.query
            }, this.contents);
        }

        else if(this.$route.name === 'totalVideoMylist'){
            this.title = '나의 찜목록'
            let user = firebase.auth().currentUser;
            let listsRef = db.ref('lists/' + user.uid).child('like_video/').once('value', (snapshot)=>{
                snapshot.forEach((item, index)=>{
                    this.contents.push(item.val());
                })
                this.loading = false;
            })

        }
    },

    data(){
        return {
            contents : [],
            isNextPage : false,
            tokenNextPage : '',
            title : '',
            orderText : '인기',
            loading : true,
            gnb: this.$store.state.gnb
        }
    },

    methods : {
        addListData : function(){
            if(this.$route.params.channelId){
                 this.getVideoData(Constant.VIDEO_URL, {
                    key : Constant.YOUTUBE_API_KEY,
                    chart : 'mostPopular',
                    regionCode : 'kr',
                    maxResults : '30',
                    part : 'snippet,contentDetails,statistics',
                    videoCategoryId : this.$route.params.channelId,
                    pageToken : this.tokenNextPage
                }, this.contents)
            }
            else if(this.$route.params.query){
                this.getSearchData(Constant.SEARCH_URL, {
                    key : Constant.YOUTUBE_API_KEY,
                    regionCode : 'Kr',
                    part : 'snippet',
                    maxResults : '30',
                    type : 'video',
                    order : this.sort,
                    q : this.$route.params.query,
                    pageToken : this.tokenNextPage
                }, this.contents);
            }
        },

        getVideoData: function(url, params, arrData) {
            this.$axios.get(url, {
                params
            }).then((response) => {
                this.loading = false;

                if(response.data.nextPageToken){
                    this.isNextPage = true;
                    this.tokenNextPage = response.data.nextPageToken;
                }else{
                    this.isNextPage = false;
                    this.tokenNextPage = "";
                }

                this.initData(response, arrData);
            }).catch((ex) => {
                console.log("ERROR !", ex);
            })
        },

        getSearchData : function(url, params, arrData){
            var that = this;
            this.$axios.get(url, {
                params
            }).then((response) => {
                that.loading = false;
                if(response.data.nextPageToken){
                    this.isNextPage = true;
                    this.tokenNextPage = response.data.nextPageToken;
                }else{
                    this.isNextPage = false;
                    this.tokenNextPage = "";
                }

                var tempData = [];
                var items = response.data.items;

                if(items.length === 0){
                    this.isEmptyPlayList = true;
                    return;
                }

                items.forEach(function(item) {
                    tempData.push(item.id.videoId);
                });

                tempData.forEach(function(videoId) {
                    that.getData(Constant.VIDEO_URL, {
                        key: Constant.YOUTUBE_API_KEY,
                        regionCode: 'Kr',
                        part: 'snippet,contentDetails,statistics',
                        maxResults: '30',
                        id: videoId
                    }, arrData);
                });
            })
        },

        setCurrentGnbId : function(){
            this.$store.commit('setCurrentGnbId', {
                currentGnbId: this.$route.params.channelId
            });
        }
    },

    components : {
        VideoItem
    }
}
</script>

<style lang="scss" scoped>
@import "../../styles/variables";
@import "../../styles/mixin";
@import "../../styles/extend";

.totalContent{
    .areaTop{
        position: relative;
        h2{
            margin-bottom:20px;

            strong{
                color:#2282f2;
                font-weight: bold;    
                font-size:24px;
            }
        }

        .rightBox{
            position: absolute;
            top:5px;
            right:10px;
        }
    }

    .list{
        &:after{
            @extend .clear;
        }

        li{
            float:left;
            margin:0 5px 20px 0;
            width:198px;
            height:200px;

            &:first-child{
                margin-left:0;
            }
        }
    }

    .btnMore{
        text-align: center;
        text-decoration: none;
        display: block;
        margin-top:40px;
        padding:15px;
        font-size:20px;
        color:#fff;
        font-weight:bold;
        background-color:#2282f2;
    }

    .btnGotoTop{
        position: fixed;
        bottom:100px;
        right:100px;
        font-size:40px;
        color:#666;
        cursor: pointer;
    }

    &.loading{
        text-align: center;
        padding-top:300px;
        .fa-spinner{
            color:$blue-color;
            font-size:50px;
            animation: a 2s infinite linear;
        }
    }

}
</style>