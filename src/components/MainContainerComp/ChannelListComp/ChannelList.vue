<template>
    <div class="listChannel">
        <slot name="channelName">
            <slot name="title"></slot>
        </slot>
        <ul class="list">
            <li v-for="(item, index) in contents" v-bind:key="index">
                <VideoItem v-bind:itemData="item"></VideoItem>
            </li>
        </ul>
    </div>
</template>

<script>
import { loadData } from '../../../mixins/loadData.js'
import VideoItem from '../../CommonComp/videoItem.vue'

export default {
    props : ['contents'],
    mixins: [loadData],
    components : {
        VideoItem
    }
}
</script>

<style lang="scss" scoped>
@import "../../../styles/variables";
@import "../../../styles/mixin";
@import "../../../styles/extend";

.listChannel{
    padding:20px;
    border-top:1px solid #d9d9d9;

    &:first-child{
        padding-top:0;
        border-top:none;
    }

    &:after{
        @extend .clear;
    }

    .channelName{
        text-decoration:none;
        float:left;
        box-sizing:border-box;
        padding:20px;
        width:185px;
        height:200px;
        border-radius:5px;

        &.type01{
            background-color:#22B478;        
        }

        &.type02{
            background-color:#D8186B;
        }

        &.type03{
            background-color:#EEA802;
        }

        &.type04{
            background-color:#1984CE;     
        }

        .name{
            display:block;
            color:$white-color;
            font-weight:bold;
            font-size:22px
        }
        
        .sub_name{
            display:block;
            margin-top:10px;
            color:$white-color;
            font-size:12px
        }
    }

    .list{
        float:left;

        &:after{
            @extend .clear;
        }

        li{
            float:left;
            margin-left:10px;
            width:195px;

            &:first-child{
                margin-left:10px;
            }
        }
    }
}
</style>
