<template>
    <div class="headerTop">
        <h1>
            <router-link class="link" v-bind:to="'/main'">
                <i class="far fa-play-circle"></i>Tvue
            </router-link>
        </h1>
        <div class="searchBox">
            <input type="text" placeholder=" 검색">
            <button><i class="fas fa-search"></i></button>
        </div>
        <div class="areaUtil">
            <a href="#n" class="btnLogin">로그인</a>
        </div>
    </div>
</template>

<style scoped>
.headerTop{
    position:relative;
    padding:10px 0;
    border-bottom:1px solid #f2f2f2
}

h1{
    position:absolute;
    top:15px;
    left:40px;
    font-size:20px;
    font-weight:600
}

h1 i{
    margin-right:5px;
    color:#1b52ed;
}

h1 a{
    color:#000;
    text-decoration: none;
}

.searchBox{
    position: relative;
    margin:0 auto;
    padding:3px 10px;
    width:300px;
    height:20px;
    background-color:#f3f3f5;
    border:1px solid #d9d9d9;
    border-radius:3px
}

.searchBox input{
    width:250px;
    height:20px;
    line-height:24px;
    background-color:#f3f3f5;
    border:0;
}

.searchBox button{
    position: absolute;
    top:4px;
    right:10px;
    border:0;
    background-color:#f3f3f5;
}

.searchBox button i{
    color:#dbdbdb;
    font-size:18px
}

.areaUtil{
    position: absolute;
    top:10px;
    right:40px;
}

.areaUtil .btnLogin{
    display: inline-block;
    padding:6px 15px;
    color:#fff;
    font-weight:600;
    text-decoration:none;
    background-color:#2282f2;
    border-radius:3px;
}
</style>
