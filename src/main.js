import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import { store } from './store/store.js'
import Router from 'vue-router'
import routes from './routes.js'
import firebase from 'firebase';

import VueFire from 'vuefire'

import { db } from './config/db.js'


let app;

Vue.use(VueFire);
Vue.prototype.$axios = axios;

Vue.use(Router)
const router = new Router({
    mode: 'history',
    scrollBehavior: () => ({ y: 0 }),
    routes
})

app = new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
})

// firebase.auth().onAuthStateChanged(function(user) {
//     if (user) {
//         console.log(user)
//     } else {
//         console.log("없음")
//     }
// })