import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

var GNB_LIST = [{
        name: '예능',
        id: '23'
    },
    {
        name: '음악',
        id: '10'
    },
    {
        name: '게임',
        id: '20'
    },
    {
        name: '영화',
        id: '1'
    }
]

export const store = new Vuex.Store({
    state: {
        currentVideo: {
            videoTitle: '',
            channelTitle: '',
            date: '',
            description: '',
            viewCount: '',
            commentCount: '',
            likeCount: '',
            dislikeCount: ''
        },

        gnb: GNB_LIST
    },
    mutations: {
        changeContainer(state, payload) {
            state.currentVideo.videoTitle = payload.currentVideoTitle;
            state.currentVideo.channelTitle = payload.currentChannelTitle;
            state.currentVideo.date = payload.currentDate;
            state.currentVideo.description = payload.currentDescription;
            state.currentVideo.viewCount = payload.currentViewCount;
            state.currentVideo.commentCount = payload.currentCommentCount;
            state.currentVideo.likeCount = payload.currentLikeCount;
            state.currentVideo.dislikeCount = payload.currentDislikeCount;
        }
    }
});