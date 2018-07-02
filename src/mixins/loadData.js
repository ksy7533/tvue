import ytDurationFormat from 'youtube-duration-format'
import moment from 'moment'
import Constant from 'constant'

export default {
    methods: {
        getData: function(url, params, arrData) {
            this.$axios.get(url, {
                params
            }).then((response) => {
                this.initData(response, arrData);
            }).catch((ex) => {
                console.log("ERROR !", ex);
            })
        },

        getSearchData: function(url, params, arrData) {
            var that = this;
            this.$axios.get(url, {
                params
            }).then((response) => {
                var tempData = [];
                var items = response.data.items;
                items.forEach(function(item) {
                    tempData.push(item.id.videoId);
                });

                tempData.forEach(function(videoId) {
                    that.getData(Constant.VIDEO_URL, {
                        key: Constant.YOUTUBE_API_KEY,
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

        initData: function(response, arrData) {
            var items = response.data.items;
            items.forEach(ele => {
                arrData.push({
                    videoTitle: ele.snippet.title,
                    id: ele.id,
                    channelId: ele.snippet.channelId,
                    channelTitle: ele.snippet.channelTitle,
                    img_src: ele.snippet.thumbnails.medium.url,
                    date: moment(ele.snippet.publishedAt).format(moment.HTML5_FMT.DATE),
                    duration: ytDurationFormat(ele.contentDetails.duration),
                    description: ele.snippet.description,
                    viewCount: ele.statistics.viewCount,
                    commentCount: ele.statistics.commentCount,
                    likeCount: ele.statistics.likeCount,
                    dislikeCount: ele.statistics.dislikeCount
                })
            });
        },

        goPage: function(itemData) {
            this.$store.commit('setCurrentGnbId', {
                currentGnbId: 'player'
            });
            this.$router.push({ name: 'playVideo', params: { videoId: itemData.id, channelId: itemData.channelId } });
        }
    }
}