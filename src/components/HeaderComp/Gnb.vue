<template>
    <nav class="wrapGnb">
        <ul class="gnb">
            <li>
                <router-link class="link" v-bind:to="'/main'" v-bind:class="changeClassOn('main')">전체</router-link>
            </li>

            <li v-for="(item, index) in gnb" v-bind:key="index" v-bind:class="changeClassOn(item.id)">
                <router-link class="link" v-bind:to="'/totalVideo/'+item.id">{{item.name}}</router-link>
            </li>
        </ul>
    </nav>
</template>

<script>
import HeaderTop from './HeaderTop.vue'
import Gnb from './Gnb.vue'

export default {

    mounted(){
        // this.changeClassOn(this.$store.state.currentGnbId);
    },

    computed: {
        currentGnbId () {
            return this.$store.state.currentGnbId
        }
    },

    watch:{
        currentGnbId(value) {
            
            // console.log(`My store value for 'doneTodosCount' changed to ${value}`);
        }
    },

    methods : {
        changeClassOn : function(itemId){
            // console.log(itemId+"  "+this.$store.state.currentGnbId)
            if(itemId === this.$store.state.currentGnbId){
                // console.log("ok")
                return true
            }else{
                // console.log("no")
                return false
            }
        }
    },

    data(){
        return {
            gnb : this.$store.state.gnb,
            on : false
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
