<template>
    <div class="listChannel">
        <slot name="channelName">
            <slot name="title"></slot>
        </slot>
        <ul class="list">
            <li v-for="item in contents" v-bind:key="item.id">
                <a v-bind:href="item.id">
                    <span class="wrapImg"><img v-bind:src="item.img_src" alt=""></span>
                    <span class="tit">{{item.title}}</span>            
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    props : ['contents']
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
    height:160px;
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

.listChannel .list li a:hover{
    text-decoration:underline
}

.listChannel .list li a .wrapImg{
    display: block;
}

.listChannel .list li a .wrapImg img{
    width:200px;
    height:120px;
}

.listChannel .list li a .tit{
    line-height:18px;
    color:#000;
    font-size:14px;
    max-height:36px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp:2;
    -webkit-box-orient: vertical;
    word-wrap:break-word; 
}
</style>
