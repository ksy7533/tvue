import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

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
        }
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
            console.log(state)
        }
    }
});