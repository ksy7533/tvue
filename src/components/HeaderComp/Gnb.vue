<template>
    <div class="wrapGnb">
        <ul class="gnb">
            <li class="on">
                <router-link class="link" v-bind:to="'/main'">전체</router-link>
            </li>

            <li v-for="(item, index) in gnb" v-bind:key="index">
                <router-link class="link" v-bind:to="'/totalVideo/'+item.id">{{item.name}}</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
import HeaderTop from './HeaderTop.vue'
import Gnb from './Gnb.vue'

export default {
    data(){
        return {
            gnb : this.$store.state.gnb
        }
    }
}
</script>

<style scoped>
.wrapGnb{
    box-shadow:0 1px 0 0 #D7DBE0;
    background-color:#fff;
}

.gnb{
    margin:0 auto;
    width:1260px;
}

.gnb:after{
    content: '';
    display: block;
    clear:both;
}

.gnb li{
    float:left;
    position: relative;
    margin-left:10px;
}

.gnb li:first-child{
    margin-left:0;
}

.gnb li.on:after{
    content:'';
    display:block;
    position: absolute;
    bottom:0;
    left:0;
    width:100%;
    height:2px;
    background-color:#f7d715;
}

.gnb li a{
    display: block;
    padding:15px 20px;
    color:#6c7280;
    font-size:13px;
    font-weight:600;
    text-decoration:none
}

.gnb li.on a{
    color:#000;
}
</style>
