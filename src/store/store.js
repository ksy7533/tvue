import Vue from 'vue'
import Vuex from 'vuex'
import Constant from 'constant'

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        currentGnbId: 'main',
        gnb: Constant.GNB_LIST,
        customListData: [],
        keyword: '',
        userInfo: {},
        currentVideoData: {},
        isLikeVideo: false
    },

    mutations: {
        [Constant.SET_CURRENT_GNB_ID]: (state, payload) => {
            state.currentGnbId = payload.currentGnbId;
        },

        [Constant.SET_CUSTOM_LIST_DATA]: (state, payload) => {
            state.customListData = payload.customListData;
        },

        [Constant.SET_KEYWORD]: (state, payload) => {
            state.keyword = payload.keyword;
        },

        [Constant.SET_CURRENT_VIDEO]: (state, payload) => {
            state.currentVideoData = payload.currentVideoData;
        },

        [Constant.SET_IS_LIKE_VIDEO]: (state, payload) => {
            state.isLikeVideo = payload.isLikeVideo
        }
    }
});