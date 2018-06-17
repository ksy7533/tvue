<template>
    <section class="areaHotList">
        <HotHorizonList v-bind:contents="gameVideo">
            <h2 slot="title">게임 인기동영상</h2>
        </HotHorizonList>
        <HotHorizonList v-bind:contents="foodVideo">
            <h2 slot="title">먹방 최신동영상</h2>
        </HotHorizonList>
        <HotHorizonList v-bind:contents="hotFoodVideo">
            <h2 slot="title">먹방 인기동영상</h2>
        </HotHorizonList>
    </section>
</template>

<script>
import HotHorizonList from './HotHorizonList.vue'

export default {
    data(){
        return {
            gameVideo : {
                q : '게임',
                order : 'viewCount',
                id : 'hotList_01'
            },

            foodVideo : {
                q : '먹방',
                order : 'date',
                id : 'hotList_02'
            },

            hotFoodVideo : {
                q : '먹방',
                order : 'viewCount',
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