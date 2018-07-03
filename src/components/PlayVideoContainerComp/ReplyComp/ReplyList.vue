<template>
    <div class="list">
        <div class="item">
            <div class="info">
                <span class="name">김세윤</span>
                <span class="date">2014.08.12</span>
            </div>
            <p class="txt">지금은 댓글영역 테스트입니다</p>
        </div>
        <div class="item">
            <div class="info">
                <span class="name">김세윤</span>
                <span class="date">2014.08.12</span>
            </div>
            <p class="txt">지금은 댓글영역 테스트입니다</p>
        </div>
        <div class="item">
            <div class="info">
                <span class="name">김세윤</span>
                <span class="date">2014.08.12</span>
            </div>
            <p class="txt">지금은 댓글영역 테스트입니다</p>
        </div>
        <div class="item">
            <div class="info">
                <span class="name">김세윤</span>
                <span class="date">2014.08.12</span>
            </div>
            <p class="txt">지금은 댓글영역 테스트입니다</p>
        </div>
        <div class="item">
            <div class="info">
                <span class="name">김세윤</span>
                <span class="date">2014.08.12</span>
            </div>
            <p class="txt">지금은 댓글영역 테스트입니다</p>
        </div>
        <div class="item">
            <div class="info">
                <span class="name">김세윤</span>
                <span class="date">2014.08.12</span>
            </div>
            <p class="txt">지금은 댓글영역 테스트입니다</p>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import "../../../styles/variables";
@import "../../../styles/mixin";
@import "../../../styles/extend";

.list{
    padding:40px;
    border-bottom:1px solid #d9d9d9;

    .item{
        padding:25px 0;
        font-size:14px;
        border-top:1px solid #d9d9d9;

        &:first-child{
            padding-top:0;
            border-top:0;
        }

        &:last-child{
            padding-bottom:0;
        }

        .info{
            margin-bottom:10px;
            .name{
                color:$blue-color;
                font-weight:bold;
            }
            .date{
                margin-left:5px;
                color:#999;
                font-size:12px;
            }
        }
    }
}

</style>
