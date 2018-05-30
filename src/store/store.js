import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        currentVideoId: '',
        containerValue: 'main'
    },
    mutations: {
        changeContainer(state, payload) {
            state.currentVideoId = payload.currentVideoId;
            state.containerValue = payload.containerValue;
        }
    }
});