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

<style>
.listChannel{
    padding:20px;
    border-top:1px solid #d9d9d9;
}

.listChannel:first-child{
    padding-top:0;
    border-top:none
}

.listChannel:after{
    content:'';
    display:block;
    clear:both
}

.listChannel .channelName{
    text-decoration:none;
    float:left;
    box-sizing:border-box;
    padding:20px;
    width:185px;
    height:200px;
    border-radius:5px;
}

.listChannel .channelName.type01{
    background-color:#22B478;
}

.listChannel .channelName.type02{
    background-color:#D8186B;
}

.listChannel .channelName.type03{
    background-color:#EEA802;
}

.listChannel .channelName.type04{
    background-color:#1984CE;
}

.listChannel .channelName .name{
    display:block;
    color:#fff;
    font-weight:bold;
    font-size:22px
}

.listChannel .channelName .sub_name{
    display:block;
    margin-top:10px;
    color:#fff;
    font-size:12px
}

.listChannel .list{
    float:left;
}
.listChannel .list:after{
    content:'';
    display:block;
    clear:both
}

.listChannel .list li{
    float:left;
    margin-left:5px;
    width:200px;
}

.listChannel .list li:first-child{
    margin-left:10px;
}
</style>
