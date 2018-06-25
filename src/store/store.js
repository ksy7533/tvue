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
        userInfo: {}
    },

    mutations: {
        setCurrentGnbId(state, payload) {
            state.currentGnbId = payload.currentGnbId;
        },

        setCustomListData(state, payload) {
            state.customListData = payload.customListData;
        },

        // addCustomListData(state, payload) {
        //     console.log(state.customListData)
        //     state.customListData.push({
        //         q: payload.query,
        //         // id: 'hotList_' + (state.customListData.length)
        //         id: payload.id
        //     })
        //     console.log(state.customListData)
        // },

        removeCustomListData(state, payload) {
            let tempIndex = 0;
            tempIndex = state.customListData.map(item => item.id).indexOf(payload.contentsId);
            state.customListData.splice(tempIndex, 1);
        },

        setKeyword(state, payload) {
            state.keyword = payload.keyword;
        }

    }
});