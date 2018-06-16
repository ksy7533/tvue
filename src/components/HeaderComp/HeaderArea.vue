<template>
    <header v-bind:class="{fixed : scrolled}">
        <HeaderTop></HeaderTop>
        <Gnb></Gnb>
    </header>
</template>

<script>
import HeaderTop from './HeaderTop.vue'
import Gnb from './Gnb.vue'

export default {
    components : {
        HeaderTop,
        Gnb
    },

    data () {
        return {
            scrolled: false
        };
    },

    methods: {
        handleScroll () {
            if(window.scrollY > 0){
                this.scrolled = true;
            }else{
                this.scrolled = false;
            }
        }
    },

    created () {
        window.addEventListener('scroll', this.handleScroll);
    },

    destroyed () {
        window.removeEventListener('scroll', this.handleScroll);
    }

}
</script>

<style lang="scss" scoped>
@import "../../styles/variables";
@import "../../styles/mixin";
@import "../../styles/extend";

header{
    z-index:1000;
    position: fixed;
    top:0;
    left:0;
    width:100%;
    background-color:#fff;
    transition: box-shadow 0.2s;

    &.fixed{
        box-shadow: 0px 5px 5px 0px rgba(217,217,217,1);
    }
}
</style>