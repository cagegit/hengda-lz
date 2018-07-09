<template>
    <div class="reset-box">
        <!-- <mt-header title="修改密码"></mt-header> -->
        <back-header title="忘记密码"></back-header>
        <div v-if="!success" class="reset-form">
            <div class="form-row">
                <mt-field label="工号" type="email" v-model="userInfo.email" placeholder="请输入邮箱"></mt-field>
            </div>
            <div class="form-row">
                <mt-field label="新密码" type="password" v-model="userInfo.password" placeholder="请输入新密码"></mt-field>
            </div>
            <div class="form-row">
                <mt-field label="验证码" size="normal" type="text" v-model="userInfo.code">
                    <mt-button size="normal">获取验证码</mt-button>
                </mt-field>
            </div>
            <div class="reset-btn">
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
  name: "Reset",
  data() {
    return {
      userInfo: {
        email: "",
        password: "",
        code: ""
      },
      success:false
    };
  },
  methods:{
      confirm(){
          this.success = true;
      },
      backLogin(){
          this.$router.replace('/start/login')
      }
  }
};
</script>
<style>
.reset-box .mint-header {
  background: #BA0404;
  font-size: 0.42rem;
}
.reset-form{
    width: 9.4rem;
    margin:  0 auto;
}
.reset-box .mint-cell-wrapper{
    background:transparent;
}
.reset-box .mint-field{
    background:transparent;
    border-bottom:1px solid #CCCCCC;
}
.reset-box .mint-field{
    margin: .7rem 0;
}
.reset-box .mint-cell-title{
    color:#000000;
    font-size: .42rem;
}
.reset-box .mint-field-core{
    font-size: .42rem;
}
.reset-box .mint-button {
    height: 1.2rem;
}
.reset-btn{
    width: 8.8rem;
    margin: .2rem auto .5rem;
    
}
.reset-btn .mint-button{
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
