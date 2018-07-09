<template>
    <div class="user-page-box">
        <mt-header title="个人中心"></mt-header>
        <div class="user-settings">
            <mt-cell is-link to="/main/user" :title="username">
                <img src="@/assets/images/user-msg/userPhoto.png" slot="icon" alt="">
            </mt-cell>
        </div>
        <div class="user-row">
             <mt-cell is-link to="/main/user" title="企业认证">
                <img slot="icon" src="@/assets/images/user-msg/bm.png" alt="">
            </mt-cell>
            <mt-cell is-link to="/main/user" title="部门" :value="userdepartment">
                <img slot="icon" src="@/assets/images/user-msg/bm.png" alt="">
            </mt-cell>
            <mt-cell  is-link to="/main/user" title="手机号" :value="usertelephone">
                <img slot="icon" class="phone" src="@/assets/images/user-msg/phone.png" alt="">
            </mt-cell>
            <mt-cell is-link to="/main/user" title="邮箱" :value="usermail">
                <img slot="icon" src="@/assets/images/user-msg/email.png" alt="">
            </mt-cell>
        </div>
        <div class="user-row">
            <mt-cell is-link to="/main/user" title="设置">
                <img slot="icon" src="@/assets/images/user-msg/settings.png" alt="">
            </mt-cell>
            <mt-cell is-link to="/start/modifypassword" title="修改密码">
                <img slot="icon" src="@/assets/images/user-msg/xgmm.png" alt="">
            </mt-cell>
        </div>
        <div class="user-row">
            <mt-button size="large" @click.native="exit">退出登录</mt-button>
        </div>
    </div>
</template>
<script>
    export default {
        name:'userPage',
        data(){
            return {
                username: this.$store.state.userLoginInfo.name,
                userdepartment: "管理",
                usertelephone: "11111111111",
                usermail: this.$store.state.userLoginInfo.email,

            }
        }
    }
</script>
<style>
.user-page-box{
    background-color:#f6f6f6;
}
.user-settings img{
    display: inline-block;
    width: 1.6rem;
    height: 1.6rem;
    margin: .45rem .8rem;
    margin-right: .2rem;
    border-radius: 50%;
}
.user-settings .mint-cell-text{
    font-size: .4rem;
}
.user-settings .mint-cell,.user-settings .mint-cell-wrapper{
    background:#ffffff !important;
}
.user-settings .mint-cell-allow-right:after{
    width: .266667rem;
    height: .266667rem;
    right: .266667rem;
}
.user-row{
    background-color: #ffffff;
    margin: .6rem 0;
}
.user-row img{
    display: inline-block;
    width: .533333rem;
    margin: 0 .2rem;
}
.user-row .phone{
    width: auto;
    height:.533333rem;
    margin-right: .36rem;
}
.user-row .mint-cell {
    width: 9.2rem;
    height: 1.2rem;
    line-height: 1.2rem;
    margin-left: .8rem;
    font-size: .36rem;
}
.user-row .mint-cell-wrapper{
    height: 1.2rem;
    line-height: 1.2rem;
}
.user-row .mint-cell-text{
    font-size: .36rem;
}
.user-row .mint-cell-value{
    font-size: .36rem;
}
.user-row .mint-button{
 
  margin: .2rem auto 0;
  font-size: .4rem;
  color:rgb(27, 25, 25);
  background:#fff;
}

</style>

