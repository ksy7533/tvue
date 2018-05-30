import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import { store } from './store/store.js'

Vue.prototype.$axios = axios;

new Vue({
    el: '#app',
    store,
    render: h => h(App)
})