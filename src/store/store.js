import Vue from 'vue'
import Vuex from 'vuex'
import Constant from 'constant'

import firebase from 'firebase'
import { db } from 'config/db.js'

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        currentGnbId: 'main',
        gnb: Constant.GNB_LIST,
        customListData: [],
        keyword: '',
        // userInfo: {},
        currentVideoData: {},
        isLikeVideo: false
    },

    mutations: {
        [Constant.SET_CURRENT_GNB_ID]: (state, payload) => {
            state.currentGnbId = payload.currentGnbId;
        },

        [Constant.ADD_CUSTOM_LIST_DATA]: (state, payload) => {
            state.customListData.push(payload);
        },

        [Constant.REMOVE_CUSTOM_LIST_DATA]: (state, payload) => {
            let removeItemIndex = 0;
            state.customListData.forEach(function(item, index) {
                if (item.id === payload.contentsId) {
                    removeItemIndex = item.index;
                    state.customListData.splice(index, 1);
                    return;
                }
            })
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
    },

    actions: {
        [Constant.ADD_LIKE_VIDEO]: (context, payload) => {
            let user = firebase.auth().currentUser;
            db.ref('lists/' + user.uid).child('like_video').push(payload.currentVideoData).then(() => {
                context.commit('setIsLikeVideo', { isLikeVideo: true });
            });
        },

        [Constant.SET_LIKE_VIDEO]: (context, payload) => {
            let user = firebase.auth().currentUser;
            db.ref('lists/' + user.uid).child('like_video/').on("value", (snapshot) => {
                snapshot.forEach((item) => {
                    if (item.val().id === payload.currentVideoId) {
                        context.commit('setIsLikeVideo', { isLikeVideo: true });
                    }
                })
            });
        },

        [Constant.REMOVE_LIKE_VIDEO]: (context, payload) => {
            let user = firebase.auth().currentUser;
            db.ref('lists/' + user.uid).child('like_video/').orderByChild('id').equalTo(payload.currentVideoId).once('value', (snapshot) => {
                snapshot.forEach((childSnapshot) => {
                    childSnapshot.ref.remove()
                });
                context.commit('setIsLikeVideo', { isLikeVideo: false });
            })
        },

        [Constant.GET_CUSTOM_LIST_DATA]: (context, payload) => {
            let currentUser = firebase.auth().currentUser;
            let listsRef = db.ref('lists/' + currentUser.uid).child('custom_query');

            listsRef.once('value', (data) => {
                let customListData = [];

                data.forEach(function(item, index) {
                    customListData.push({
                        id: item.key,
                        q: item.val()
                    });
                })

                context.commit('setCustomListData', { customListData });
            });
        }
    }
});