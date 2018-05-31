<template>
    <section class="areaVideoCategory">
        <CategoryList v-for="item in arrCategory" v-bind:key="item.id" v-bind:categoryObj="item"></CategoryList>
    </section>
</template>

<script>
import CategoryList from './CategoryList.vue'

var YOUTUBE_API = "AIzaSyBQ1G-JhjIMd0bGr9IeF49NKeQ29roBttY";

export default {

    created(){

        var categoryList_url = "https://www.googleapis.com/youtube/v3/playlists?key="+YOUTUBE_API+"&part=snippet&channelId="+this.$store.state.currentVideo.channelId;

        this.$axios.get(categoryList_url, {
        }).then((response) => {
            this.initArrCategory(response);
        }).catch((ex) => {
            console.log("ERROR !", ex);
        })
    },

    data() {
        return {
            arrCategory : []
        }
    },

    methods : {
        initArrCategory : function(response){
            var items = response.data.items;
            items.forEach(ele => {
                this.arrCategory.push({
                    id : ele.id,
                    title : ele.snippet.title
                })      
            });
        }
    },

    components : {
        CategoryList
    }
}
</script>

<style style="scoped">
.areaVideoCategory{
    margin-top:30px
}
</style>