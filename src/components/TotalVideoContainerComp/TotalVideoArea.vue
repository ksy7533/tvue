<template>
    <div>
        <h2 ><strong>{{title}}</strong> {{orderText}} 동영상</h2>
        <ul class="list">
            <li v-for="(item, index) in contents" v-bind:key="index">
                <VideoItem v-bind:itemData="item"></VideoItem>
            </li>
        </ul>
        <a href="#n" class="btnMore" v-if="isNextPage" v-on:click.prevent="addListData()">비디오 더보기</a>
        <a href="#top" class="btnGotoTop"><i class="far fa-arrow-alt-circle-up"></i></a>
    </div>
</template>

<script>
import { loadData } from '../../mixins/loadData.js'
import VideoItem from '../CommonComp/videoItem.vue'

var YOUTUBE_API = "AIzaSyBQ1G-JhjIMd0bGr9IeF49NKeQ29roBttY";
var video_url = "https://www.googleapis.com/youtube/v3/videos";

export default {
    mixins: [loadData],

    mounted(){
        /* 최신 인기동영상 채널 클릭 */
        if(this.$route.params.channelId){
            const gnb_list = this.$store.state.gnb;

            gnb_list.forEach((item) => {
                if((item.id) === this.$route.params.channelId.toString()){
                    this.title = item.name;
                }
            })

            this.getVideoData(video_url, {
                key : YOUTUBE_API,
                chart : 'mostPopular',
                regionCode : 'kr',
                maxResults : '30',
                part : 'snippet,contentDetails,statistics',
                videoCategoryId : this.$route.params.channelId
            }, this.contents)
            this.setCurrentGnbId();
        }

        /* 유저 선택 쿼리 */
        else if(this.$route.params.query){
            this.title = this.$route.params.query;

            if(this.$route.params.order === 'viewCount'){
                this.orderText = '인기'
            }else if(this.$route.params.order === 'date'){
                this.orderText = '최신'
            }

            this.getSearchData(search_url, {
                key : YOUTUBE_API,
                regionCode : 'KR',
                part : 'snippet',
                maxResults : '30',
                type : 'video',
                order : this.$route.params.order,
                q : this.$route.params.query
            }, this.contents);
        }
    },

    data(){
        return {
            contents : [],
            isNextPage : false,
            tokenNextPage : '',
            title : '',
            orderText : '인기'
        }
    },

    methods : {
        addListData : function(){
            if(this.$route.params.channelId){
                this.getVideoData(video_url, {
                    key : YOUTUBE_API,
                    chart : 'mostPopular',
                    regionCode : 'kr',
                    maxResults : '30',
                    part : 'snippet,contentDetails,statistics',
                    videoCategoryId : this.$route.params.channelId,
                    pageToken : this.tokenNextPage
                }, this.contents)
            }
            else if(this.$route.params.query){
                this.getSearchData(search_url, {
                    key : YOUTUBE_API,
                    regionCode : 'KR',
                    part : 'snippet',
                    maxResults : '30',
                    type : 'video',
                    order : this.$route.params.order,
                    q : this.$route.params.query,
                    pageToken : this.tokenNextPage
                }, this.contents);
            }
        },

        getVideoData: function(url, params, arrData) {
            this.$axios.get(url, {
                params
            }).then((response) => {
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
                    that.getData(video_url, {
                        key: YOUTUBE_API,
                        regionCode: 'KR',
                        part: 'snippet,contentDetails,statistics',
                        maxResults: '30',
                        id: videoId
                    }, arrData);
                });                
            }).catch((ex) => {
                console.log("ERROR !", ex);
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

<style scoped>
h2{
    margin-bottom:20px;
}

h2 strong{
    color:#2282f2;
    font-weight: bold;    
    font-size:24px;
}

.list:after{
    content:'';
    display:block;
    clear: both;
}

.list li{
    float:left;
    margin:0 5px 20px 0;
    width:198px;
    height:200px;
}

.list li:first-child{
    margin-left:0;
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
</style>
