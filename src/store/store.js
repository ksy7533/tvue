import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const GNB_LIST = [{
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
        currentGnbId: 'main',
        gnb: GNB_LIST
    },

    mutations: {
        setCurrentGnbId(state, payload) {
            state.currentGnbId = payload.currentGnbId;
        }
    }
});