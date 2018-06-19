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

        customListData: [{
                q: '배틀그라운드',
                id: 'hotList_0'
            },

            {
                q: '참치회',
                id: 'hotList_1'
            },

            {
                q: '성시경',
                id: 'hotList_2'
            }
        ]
    },

    mutations: {
        setCurrentGnbId(state, payload) {
            state.currentGnbId = payload.currentGnbId;
        },

        addCustomListData(state, payload) {
            state.customListData.push({
                q: payload.query,
                id: 'hotList_' + (state.customListData.length - 1)
            })
        }

    }
});