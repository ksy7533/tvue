<template>
    <div class="categoryList">
        <h3>{{categoryObj.title}}</h3>
        <ul class="list">
            <li v-for="item in playList" v-bind:key="item.id">
                <a>
                    <span class="wrapImg"><img v-bind:src="item.img_src" alt=""></span>
                    <span class="tit">{{item.title}}</span>
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
var YOUTUBE_API = "AIzaSyBQ1G-JhjIMd0bGr9IeF49NKeQ29roBttY";

export default {
    props : [
        'categoryObj'
    ],

    created(){
        var playList_url = "https://www.googleapis.com/youtube/v3/playlistItems?key="+YOUTUBE_API+"&part=snippet&playlistId="+this.categoryObj.id+"&maxResults=10";

        this.$axios.get(playList_url, {
        }).then((response) => {
            this.initArrVideoList(response);
        }).catch((ex) => {
            console.log("ERROR !", ex);
        })
    },

    data() {
        return {
            playList : []
        }
    },

    methods : {
        initArrVideoList : function(response){
            var items = response.data.items;
            items.forEach(ele => {
                this.playList.push({
                    title : ele.snippet.title,
                    id : ele.id,
                    channelId : ele.snippet.channelId,
                    img_src: ele.snippet.thumbnails.medium.url
                })      
            });
        }
    }

}
</script>

<style scoped>
.categoryList{
    margin-top:20px;
}

.categoryList h3{
    margin-bottom:10px;
    font-size:18px;
    font-weight:bold;
}

.categoryList .list:after{
    content: '';
    display: block;
    clear:both;
}

.categoryList .list li{
    float:left;
    width:200px;
}

.categoryList .list li a{
    display: block;
}

.categoryList .list li a .wrapImg{
    display: block;
    width:200px;
    height:120px;
}

.categoryList .list li a .wrapImg img{
    width:200px;
    height:120px;
}
</style>
