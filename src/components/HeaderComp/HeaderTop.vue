<template>
    <div class="headerTop">
        <h1>Tvue</h1>
        <div class="searchBox">
            <input type="text" placeholder=" 검색">
            <button>검색</button>
        </div>
        <div class="areaUtil">
            <a href="#n" class="btnLogin">로그인</a>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
.headerTop{
    position:relative;
    padding:10px 0;
    border-bottom:1px solid #f2f2f2
}
h1{
    position:absolute;
    top:10px;
    left:20px;
    font-size:16px
}
.searchBox{
    margin:0 auto;
    padding:5px 10px;
    width:300px;
    height:30px;
    background-color:#f3f3f5;
    border:1px solid #f2f2f2;
    border-radius:3px
}
.searchBox input{
    width:250px;
    border:0;
}
.areaUtil{
    position: absolute;
    top:10px;
    right:20px;
}
</style>
