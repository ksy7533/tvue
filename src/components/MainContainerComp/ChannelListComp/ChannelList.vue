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
import VideoItem from '../../CommonComp/videoItem.vue'

import loadData from 'mixins/loadData.js'

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

    &:nth-of-type(n){
        .channelName{
            background-color:#22B478;        
        }
    }

    &:nth-of-type(2n){
        .channelName{
            background-color:#D8186B;
        }
    }

    &:nth-of-type(3n){
        .channelName{
            background-color:#EEA802;
        }
    }

    &:nth-of-type(4n){
        .channelName{
            background-color:#1984CE;     
        }
    }
    
    .channelName{
        text-decoration:none;
        box-sizing:border-box;
        display:block;
        margin-bottom:10px;
        padding:10px 20px;
        
        border-radius:5px;
        .name{
            color:$white-color;
            font-weight:bold;
            font-size:22px
        }
        
        .sub_name{
            margin-top:10px;
            color:$white-color;
            font-size:12px
        }
    }

    .list{
        &:after{
            @extend .clear;
        }

        li{
            float:left;
            // margin-left:.32%;
            // width:16.4%;
            margin-left:0.28%;
            width:14%;

            max-height:100%;

            &:first-child{
                margin-left:0;
            }

            /deep/ .areaBottom{
                height:80px;
            }
        }
    }
}
</style>
