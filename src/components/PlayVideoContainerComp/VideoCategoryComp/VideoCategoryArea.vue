<template>
    <section class="areaVideoCategory">
        <CategoryList v-for="(item, index) in arrCategory" v-bind:key="index" v-bind:categoryObj="item"></CategoryList>
        <a href="#n" class="btnMore" v-if="isNextPage" v-on:click.prevent="addListData()">재생목록 더보기</a>
    </section>
</template>

<script>
import CategoryList from './CategoryList.vue'

var YOUTUBE_API = "AIzaSyBQ1G-JhjIMd0bGr9IeF49NKeQ29roBttY";
var categoryList_url = "https://www.googleapis.com/youtube/v3/playlists";

export default {
    mounted(){
        this.getData(categoryList_url,{
            key : YOUTUBE_API,
            part : 'snippet',
            channelId : this.$route.params.channelId
        }, this.arrCategory);
    },

    data() {
        return {
            arrCategory : [],
            isNextPage : false,
            tokenNextPage : ''
        }
    },

    methods : {
        getData(url, params, arrData){
            this.$axios.get(url, {
                params
            }).then((response) => {
                this.initArrCategory(response);
            }).catch((ex) => {
                console.log("ERROR !", ex);
            })
        },

        initArrCategory : function(response){
             if(response.data.nextPageToken){
                this.isNextPage = true;
                this.tokenNextPage = response.data.nextPageToken;
            }else{
                this.isNextPage = false;
                this.tokenNextPage = "";
            }

            var items = response.data.items;
            items.forEach(ele => {
                this.arrCategory.push({
                    id : ele.id,
                    title : ele.snippet.title,
                    channelId : ele.snippet.channelId
                })      
            });
        },

        addListData : function(){
            this.getData(categoryList_url,{
                key : YOUTUBE_API,
                part : 'snippet',
                channelId : this.$route.params.channelId,
                pageToken : this.tokenNextPage
            }, this.arrCategory);
        }
    },

    components : {
        CategoryList
    }
}
</script>

<style lang="scss" scoped>
@import "../../../styles/variables";
@import "../../../styles/mixin";
@import "../../../styles/extend";

.areaVideoCategory{
    margin-top:30px;

    .btnMore{
        text-align: center;
        text-decoration: none;
        display: block;
        margin-top:40px;
        padding:15px;
        font-size:20px;
        color:#fff;
        font-weight:bold;
        background-color:#2282f2;
    }
}
</style>