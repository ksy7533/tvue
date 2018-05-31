import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        currentVideo: {
            videoId: '',
            channelId: '',
            title: ''
        },
        containerValue: 'main'
    },
    mutations: {
        changeContainer(state, payload) {
            state.currentVideo.videoId = payload.currentVideoId;
            state.currentVideo.channelId = payload.currentChannelId;
            state.currentVideo.title = payload.currentVideoTitle;
            state.containerValue = payload.containerValue;
        }
    }
});