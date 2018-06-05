<template>
    <div class="listChannel">
        <slot name="channelName">
            <slot name="title"></slot>
        </slot>
        <ul class="list">
            <li v-for="(item, index) in contents" v-bind:key="index">
                <router-link class="link" v-bind:to="{ name: 'playVideo'}" v-on:click.native="changeContainer({videoId:item.id, channelId:item.channelId, title:item.title})">
                    <p class="wrapImg">
                        <img v-bind:src="item.img_src" alt="">
                        <span class="playTime">{{item.duration}}</span>
                    </p>
                    <p class="tit">{{item.title}}</p>
                    <p class="channelTit">{{item.channelTitle}}</p>
                    <p class="date">{{item.date}}</p>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    props : ['contents'],

    methods: {
        changeContainer : function(obj){
            this.$router.push({name:'playVideo', params: {videoId: obj.videoId, channelId: obj.channelId}});
            
            // this.$store.commit('changeContainer', {
            //     currentVideoId: obj.videoId,
            //     currentChannelId: obj.channelId,
            //     currentVideoTitle: obj.title,
            //     containerValue: 'playVideo'
            // });
        }
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

.listChannel .list li a{
    text-decoration:none;
    display: block;
}

.listChannel .list li .wrapImg{
    display: block;
    position: relative;
}

.listChannel .list li .wrapImg:after{
    content:'';
    display: block;
    position: absolute;
    top:0;
    left:0;
    width:100%;
    height:100%;
    background-color:rgba(0, 0, 0, 0.25);
    border-radius: 5px;
}

.listChannel .list li .wrapImg img{
    width:200px;
    height:120px;
    border-radius: 5px;
}

.wrapImg .playTime{
    z-index: 10;
    position: absolute;
    bottom:10px;
    right:10px;
    display: inline-block;
    padding:3px;
    color:#fff;
    font-size:11px;
    background:rgba(0, 0, 0, 0.6);
    border-radius:3px;
}

.listChannel .list li .tit{
    margin-top:5px;
    line-height:18px;
    color:#000;
    font-size:14px;
    font-weight:bold;
    max-height:36px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp:2;
    -webkit-box-orient: vertical;
    word-wrap:break-word; 
}

.link .channelTit{
    line-height:18px;
    margin-top:5px;
    padding-right:20px;
    color:#848c9c;
    font-size:12px;
    height:18px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp:1;
    -webkit-box-orient: vertical;
    word-wrap:break-word; 
}

.link .date{
    line-height:12px;
    margin-top:5px;
    padding-right:20px;
    color:#848c9c;
    font-size:12px;
    height:12px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp:1;
    -webkit-box-orient: vertical;
    word-wrap:break-word; 
}
</style>
