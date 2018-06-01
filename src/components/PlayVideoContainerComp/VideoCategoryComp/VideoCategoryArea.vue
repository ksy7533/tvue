<template>
    <section class="areaVideoCategory">
        <CategoryList v-for="(item, index) in arrCategory" v-bind:key="index" v-bind:categoryObj="item"></CategoryList>
    </section>
</template>

<script>
import CategoryList from './CategoryList.vue'

var YOUTUBE_API = "AIzaSyBQ1G-JhjIMd0bGr9IeF49NKeQ29roBttY";

export default {

    created(){
        this.fetchData();
    },

    data() {
        return {
            arrCategory : [],
            currentVideo : this.$store.state.currentVideo
        }
    },

    watch : {
        currentVideo : function(value){
            console.log(value)
        }
    },
    // computed: {
    //     currentVideo : function(){
    //         console.log("1")
    //         return this.$store.state.currentVideo;
    //     }
    // },

    methods : {
        initArrCategory : function(response){
            var items = response.data.items;
            items.forEach(ele => {
                this.arrCategory.push({
                    id : ele.id,
                    title : ele.snippet.title
                })      
            });
        },

        fetchData(){
            var categoryList_url = "https://www.googleapis.com/youtube/v3/playlists?key="+YOUTUBE_API+"&part=snippet&channelId="+this.currentVideo.channelId;
            console.log(this.currentVideo.channelId)
            this.$axios.get(categoryList_url, {
            }).then((response) => {
                this.initArrCategory(response);
            }).catch((ex) => {
                console.log("ERROR !", ex);
            })
        }
    },

    // created(){

    //     var categoryList_url = "https://www.googleapis.com/youtube/v3/playlists?key="+YOUTUBE_API+"&part=snippet&channelId="+this.$store.state.currentVideo.channelId;

    //     this.$axios.get(categoryList_url, {
    //     }).then((response) => {
    //         this.initArrCategory(response);
    //     }).catch((ex) => {
    //         console.log("ERROR !", ex);
    //     })
    // },

    // data() {
    //     return {
    //         arrCategory : []
    //     }
    // },

    // methods : {
    //     initArrCategory : function(response){
    //         var items = response.data.items;
    //         items.forEach(ele => {
    //             this.arrCategory.push({
    //                 id : ele.id,
    //                 title : ele.snippet.title
    //             })      
    //         });
    //     }
    // },

    components : {
        CategoryList
    }
}
</script>

<style scoped>
.areaVideoCategory{
    margin-top:30px
}
</style>