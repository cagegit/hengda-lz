<template>
    <div class="modify-box">
        <back-header title="修改密码"></back-header>
        <div v-if="!success" class="modify-form">
            <div class="form-row">
                <mt-field label="旧密码" type="password" v-model="userInfo.oldpassword" placeholder="请填写旧密码"></mt-field>
            </div>
            <div class="form-row">
                <mt-field label="新密码" type="password" v-model="userInfo.newpassword" placeholder="请输入新的密码"></mt-field>
            </div>
            <div class="form-row">
                <mt-field label="确认密码" type="password" v-model="userInfo.confirmnewpassword" placeholder="请再次输入新的密码"></mt-field>
            </div>
            <div class="modify-btn">
                <mt-button @click.native="confirm" size="large">确认修改</mt-button>
            </div>
        </div>
        <div v-else class="success-box">
            <div class="suc-top">
                <img src="@/assets/images/icon/success.png" alt="">
                <span>恭喜您，密码修改成功！</span>
            </div>
            <div class="back">
                <mt-button @click.native="backLogin" size="large">返回登录</mt-button>
            </div>
            
        </div>
    </div>
</template>
<script>
export default {
  name: "ModifyPassWord",
  data() {
    return {
      userInfo: {
        oldpassword: "",
        newpassword: "",
        confirmnewpassword: ""
      },
      success:false
    };
  },
  methods:{
      confirm(){
          this.success = true;
      },
      backLogin(){
          console.log("wlqqq")
          this.$router.replace('/main/user')
      }
  }
};
</script>
<style>
.modify-box .mint-header {
  background: #BA0404;
  font-size: 0.42rem;
}
.modify-form{
    width: 9.4rem;
    margin:  0 auto;
}
.modify-box .mint-cell-wrapper{
    background:transparent;
}
.modify-box .mint-field{
    background:transparent;
    border-bottom:1px solid #CCCCCC;
}
.modify-box .mint-field{
    margin: .7rem 0;
}
.modify-box .mint-cell-title{
    color:#000000;
    font-size: .42rem;
}
.modify-box .mint-field-core{
    font-size: .42rem;
}
.modify-box .mint-button {
    height: 1.2rem;
}
.modify-btn{
    width: 8.8rem;
    margin: .2rem auto .5rem;
    
}
.modify-btn .mint-button{
    background: #BA0404;
    color:#fff;
    font-size: .4rem;
}
.form-row .mint-button{
    font-size:.32rem;
}
.suc-top img{
    width:3.12rem;
    margin: 1.6rem auto .3rem;
}
.suc-top{
    text-align: center;
    font-size: .38rem;
    color:#BA0404;
}
.back{
    width: 8.8rem;
    margin: .8rem auto 0;
}
.back .mint-button{
    background: #BA0404;
    color:#fff;
    font-size: .4rem;
}
</style>
