import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import { store } from './store/store.js'
import Router from 'vue-router'
import routes from './routes.js'

Vue.prototype.$axios = axios;

Vue.use(Router)
const router = new Router({
    mode: 'history',
    scrollBehavior: () => ({ y: 0 }),
    routes
})

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
})