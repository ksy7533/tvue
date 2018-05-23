<template>
    <section class="areaHotList">
        <HotHorizonList v-bind:contents=hotLiveContents>
            <h2 slot="title">인기 라이브</h2>
        </HotHorizonList>
        <HotHorizonList v-bind:contents=hotHighrightContents>
            <h2 slot="title">인기 하이라이트</h2>
        </HotHorizonList>
        <HotHorizonList v-bind:contents=hotPdContents>
            <h2 slot="title">인기 PD 동영상</h2>
        </HotHorizonList>
    </section>
</template>

<script>
import HotHorizonList from './HotHorizonList.vue'


var YOUTUBE_API = AIzaSyBQ1G-JhjIMd0bGr9IeF49NKeQ29roBttY;

export default {

    created () {
        this.$axios.get('https://www.googleapis.com/youtube/v3/videos', {

        }).then((response) => {
            console.log(response);
        }).catch((ex) => {
            console.log("ERROR !", ex);
        })
    },

    data() {
        return {
            hotLiveContents : [
                {
                    no : 1,
                    title : "YTN 데일리 라이브",
                    source : "MLB LIVE",
                    playtime : "1:00"
                },
                {
                    no : 2,
                    title : "YTN 데일리 라이브",
                    source : "MLB LIVE",
                    playtime : "2:00"
                },
                {
                    no : 3,
                    title : "YTN 데일리 라이브",
                    source : "MLB LIVE",
                    playtime : "3:00"
                },
                {
                    no : 4,
                    title : "YTN 데일리 라이브",
                    source : "MLB LIVE",
                    playtime : "4:00"
                },
                {
                    no : 5,
                    title : "YTN 데일리 라이브",
                    source : "MLB LIVE",
                    playtime : "5:00"
                },
                {
                    no : 6,
                    title : "YTN 데일리 라이브",
                    source : "MLB LIVE",
                    playtime : "6:00"
                },
                {
                    no : 7,
                    title : "YTN 데일리 라이브",
                    source : "MLB LIVE",
                    playtime : "7:00"
                },
                {
                    no : 8,
                    title : "YTN 데일리 라이브",
                    source : "MLB LIVE",
                    playtime : "8:00"
                }
            ],

            hotHighrightContents : [
                {
                    no : 1,
                    title : "인기라이브 정승환",
                    source : "MLB LIVE",
                    playtime : "1:00"
                },
                {
                    no : 2,
                    title : "인기라이브 정승환",
                    source : "MLB LIVE",
                    playtime : "2:00"
                },
                {
                    no : 3,
                    title : "인기라이브 정승환",
                    source : "MLB LIVE",
                    playtime : "3:00"
                },
                {
                    no : 4,
                    title : "인기라이브 정승환",
                    source : "MLB LIVE",
                    playtime : "4:00"
                },
                {
                    no : 5,
                    title : "인기라이브 정승환",
                    source : "MLB LIVE",
                    playtime : "5:00"
                },
                {
                    no : 6,
                    title : "인기라이브 정승환",
                    source : "MLB LIVE",
                    playtime : "6:00"
                },
                {
                    no : 7,
                    title : "인기라이브 정승환",
                    source : "MLB LIVE",
                    playtime : "7:00"
                },
                {
                    no : 8,
                    title : "인기라이브 정승환",
                    source : "MLB LIVE",
                    playtime : "8:00"
                }
            ],

             hotPdContents : [
                {
                    no : 1,
                    title : "한번에 180도를 볼수있다능",
                    source : "MLB LIVE",
                    playtime : "1:00"
                },
                {
                    no : 2,
                    title : "한번에 180도를 볼수있다능",
                    source : "MLB LIVE",
                    playtime : "2:00"
                },
                {
                    no : 3,
                    title : "한번에 180도를 볼수있다능",
                    source : "MLB LIVE",
                    playtime : "3:00"
                },
                {
                    no : 4,
                    title : "한번에 180도를 볼수있다능",
                    source : "MLB LIVE",
                    playtime : "4:00"
                },
                {
                    no : 5,
                    title : "한번에 180도를 볼수있다능",
                    source : "MLB LIVE",
                    playtime : "5:00"
                },
                {
                    no : 6,
                    title : "한번에 180도를 볼수있다능",
                    source : "MLB LIVE",
                    playtime : "6:00"
                },
                {
                    no : 7,
                    title : "한번에 180도를 볼수있다능",
                    source : "MLB LIVE",
                    playtime : "7:00"
                },
                {
                    no : 8,
                    title : "한번에 180도를 볼수있다능",
                    source : "MLB LIVE",
                    playtime : "8:00"
                }
            ]
        }
    },

    components : {
        HotHorizonList
    }
}
</script>

<style>
.areaHotList{
    border:1px solid #ccc;
}
</style>
