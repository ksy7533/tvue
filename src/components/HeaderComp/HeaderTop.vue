<template>
    <div class="headerTop">
        <h1>
            <router-link class="link" v-bind:to="'/main'">
                <i class="far fa-play-circle"></i>Tvue
            </router-link>
        </h1>
        <div class="searchBox" v-bind:class="{ on : isSearch}">
            <input type="text" v-model="keyword" v-on:focus="focusSearch" v-on:blur="blurSearch" v-on:keyup.enter="searchVideo">
            <button v-on:click="searchVideo"><i class="fas fa-search"></i></button>
        </div>
        <div class="areaUtil">
            <!-- <a href="#n" class="btnLogin">로그인</a> -->
            <div v-if="!isLogin">
                <router-link to="/login" class="btnLogin">로그인</router-link>
            </div>
            <div v-else>
                <button v-on:click="signOut">로그아웃</button>
            </div>
        </div>
    </div>
</template>

<script>
import firebase from 'firebase';

export default {
    data(){
        return {
            isSearch : false,
            keyword : '',
            isLogin: false
        }
    },

    computed : {
        stateKeyword(){
            return this.$store.state.keyword;
        }
    },

    mounted(){
        firebase.auth().onAuthStateChanged((user) => {  
            if(user){
                this.isLogin = true;
                console.log('login')
            }else{
                this.isLogin = false;
                console.log('login no')
            }
        })
    },

    watch : {
        stateKeyword : function(val){
            this.keyword = val;
        }
    },

    methods : {
        searchVideo : function(){
            if(this.keyword === ''){
                return;
            }

            this.$store.commit('setKeyword', {
                keyword : this.keyword
            });
            this.$router.push({ name: 'totalVideoHot', params: { query : this.keyword} });
        },

        focusSearch : function(){
            this.isSearch = !this.isSearch;
        },

        blurSearch : function(){
            this.isSearch = !this.isSearch;
        },
        
        signOut(){
            firebase.auth().signOut();
        }
    }
}
</script>


<style lang="scss" scoped>
@import "../../styles/variables";
@import "../../styles/mixin";
@import "../../styles/extend";

.headerTop{
    position:relative;
    padding:10px 0;
    border-bottom:1px solid #f2f2f2;

    h1{
        position:absolute;
        top:15px;
        left:40px;
        font-size:20px;
        font-weight:bold;

        i{
            margin-right:5px;
            color:$blue-color;
        }

        a{
            color:#000;
            text-decoration: none;        
        }
    }

    .searchBox{
        position: relative;
        margin:0 auto;
        padding:4px 10px;
        width:300px;
        height:20px;
        background-color:#f3f3f5;
        border:1px solid #d9d9d9;
        border-radius:3px;

        &.on{
            background-color:$white-color;
            box-shadow:0 0 0 1px rgba(0,20,61,.08);

            input{
                background-color:$white-color;
            }

            button{
                background-color:$white-color;
                i{
                    color:$blue-color;
                }
            }
        }

        input{
            width:250px;
            height:20px;
            line-height:24px;
            color:#6c727f;
            background-color:#f3f3f5;
            border:0;

            &:focus{
                color:#000;
                outline: none;
            }
        }

        button{
            position: absolute;
            top:4px;
            right:10px;
            border:0;
            background-color:#f3f3f5;

            i{
                color:#dbdbdb;
                font-size:18px
            }
        }
    }

    .areaUtil{
        position: absolute;
        top:10px;
        right:40px;

        .btnLogin{
            display: inline-block;
            padding:6px 15px;
            color:$white-color;
            font-weight:600;
            text-decoration:none;
            background-color:#2282f2;
            border-radius:3px;
        }
    }
}

</style>