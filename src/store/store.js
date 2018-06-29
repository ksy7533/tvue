import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const GNB_LIST = [{
        name: '예능',
        id: '24'
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
        name: '동물',
        id: '15'
    }
]

export const store = new Vuex.Store({
    state: {
        currentGnbId: 'main',
        gnb: GNB_LIST,
        customListData: [],
        keyword: '',
        userInfo: {},
        currentVideoData: {},
        isLikeVideo: false
    },

    mutations: {
        setCurrentGnbId(state, payload) {
            state.currentGnbId = payload.currentGnbId;
        },

        setCustomListData(state, payload) {
            state.customListData = payload.customListData;
        },

        setKeyword(state, payload) {
            state.keyword = payload.keyword;
        },

        setCurrentVideo(state, payload) {
            state.currentVideoData = payload.currentVideoData;
        },

        setIsLikeVideo(state, payload) {
            state.isLikeVideo = payload.isLikeVideo
        }
    }
});