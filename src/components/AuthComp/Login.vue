<template>
<section class="login">
    <h2>Tvue</h2>
    <p class="tit">로그인</p>
    <p class="inputTxt">
        <input type="text" v-model="email" placeholder="아이디를 입력하세요">
    </p>
    <p class="inputTxt">
        <input type="password" v-model="password" placeholder="비밀번호를 입력하세요">
    </p>
    <div class="btns">
        <button v-on:click="signIn">로그인</button>
        <router-link to="/signUp">회원가입</router-link>
    </div>
</section>
</template>

<script>
import firebase from 'firebase/app';

export default {
    data(){
        return {
            email:'',
            password:''
        }
    },
    methods: {
        signIn: function(){
            firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(
                (user) => {
                    alert('wellcome');
                    this.$router.replace('main');
                },
                (err) => {
                    alert(err.message);
                }
            )
        }
    }
}
</script>

<style lang="scss" scoped>
@import "../../styles/variables";
@import "../../styles/mixin";
@import "../../styles/extend";

.login{
    margin:200px auto 0;
    padding:25px;
    width:400px;
    height:400px;
    border:1px solid #d9d9d9;
    border-radius: 5px;

    h2{
        text-align:center;
        font-size:30px;
        font-weight:bold;
    }
    
    .tit{
        margin:20px 0 40px;
        text-align:center;
        font-size:24px;
    }

    .inputTxt{
        margin-top:15px;
        width:100%;
        border-bottom:1px solid #d9d9d9;
        input{
            box-sizing: border-box;
            padding:10px;
            width:100%;
            border:0;

            &:focus{
                outline:0;
            }
        }
    }

    .btns{
        margin-top:40px;
        text-align:center;
    }
}

</style>
