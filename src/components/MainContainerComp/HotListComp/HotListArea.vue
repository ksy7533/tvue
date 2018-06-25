<template>
    <section class="areaHotList">
        <a class="addList" v-on:click="toggleModal()">
            <i class="fas fa-plus-circle"></i>
        </a>

        <div class="lists" v-if="arrData.length !== 0">
            <HotHorizonList v-for="(item, index) in arrData" v-bind:key="index" v-bind:contents="item">
                <h2 slot="title"><span class="keyword">{{item.q}}</span> 관련동영상</h2>
            </HotHorizonList>
        </div>

        <ModalCustomList v-if="isModalVisible" v-bind:toggleModal="toggleModal"></ModalCustomList>
        
    </section>
</template>

<script>
import HotHorizonList from './HotHorizonList.vue'
import ModalCustomList from '../../ModalComp/CustomList.vue'

export default {

    data(){
        return {
            isModalVisible: false
        }
    },

    computed : {
        arrData(){
            return this.$store.state.customListData
        }
    },

    methods : {
        toggleModal : function(){
            this.isModalVisible = !this.isModalVisible;
        }
    },

    components : {
        HotHorizonList,
        ModalCustomList
    }
}
</script>

<style lang="scss" scoped>
@import "../../../styles/variables";
@import "../../../styles/mixin";
@import "../../../styles/extend";

.areaHotList{
    .addList{
        cursor: pointer;
        text-align:center;
        display:block;
        line-height:65px;
        margin-bottom:15px;
        height:65px;
        color:$blue-color;
        font-size:30px;
        border:1px solid #ccc;
        border-radius:5px;

        &:hover{
            color:$white-color;
            background-color:$blue-color;
        }
    }

    .lists{
        border:1px solid #ccc;
        border-radius:5px;
        background-color:#F5F5F8;
    }
}
</style>