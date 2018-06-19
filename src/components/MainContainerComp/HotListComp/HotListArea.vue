<template>
    <section class="areaHotList">
        <HotHorizonList v-bind:contents="gameVideo">
            <h2 slot="title">{{gameVideo.q}} 관련동영상</h2>
        </HotHorizonList>
        <HotHorizonList v-bind:contents="foodVideo">
            <h2 slot="title">{{foodVideo.q}} 관련동영상</h2>
        </HotHorizonList>
        <HotHorizonList v-bind:contents="hotFoodVideo">
            <h2 slot="title">{{hotFoodVideo.q}} 관련동영상</h2>
        </HotHorizonList>
    </section>
</template>

<script>
import HotHorizonList from './HotHorizonList.vue'

export default {
    data(){
        return {
            gameVideo : {
                q : '배틀그라운드',
                // order : 'viewCount',
                // order : 'relevance',
                id : 'hotList_01'
            },

            foodVideo : {
                q : '참치회',
                // order : 'date',
                // order : 'relevance',
                id : 'hotList_02'
            },

            hotFoodVideo : {
                q : '성시경',
                // order : 'viewCount',
                // order : 'relevance',
                id : 'hotList_03'
            }
        }
    },

    components : {
        HotHorizonList
    }
}
</script>

<style lang="scss" scoped>
.areaHotList{
    padding:20px 0;
    border:1px solid #ccc;
    border-radius:5px;
    background-color:#F5F5F8;
}
</style>