<template>
     <div class="listPlay">
        <p class="tit">플레이 리스트입니다</p>
        <ul>
            <li></li>
        </ul>
    </div>
</template>

<script>

export default {
    created(){
        var YOUTUBE_API = "AIzaSyBQ1G-JhjIMd0bGr9IeF49NKeQ29roBttY";
        // var playList_url = "https://www.googleapis.com/youtube/v3/playlists?key="+YOUTUBE_API+"&part=snippet&channelId=UCA6HJSOT5I-J7nEJiC6W4Og";

        var playList_url = "https://www.googleapis.com/youtube/v3/playlistItems?key="+YOUTUBE_API+"&part=snippet&playlistId=lGg0Lz7cuMc";

        console.log(this.$store.state.currentVideoId)

        this.$axios.get(playList_url, {
        }).then((response) => {
            console.log(response)
        }).catch((ex) => {
            console.log("ERROR !", ex);
        })
    }
}
</script>

<style>

</style>
