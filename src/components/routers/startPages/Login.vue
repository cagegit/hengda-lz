<template>
    <div class="login-box">
        <back-header title=""></back-header>

        <div class="login-header">
            <img src="@/assets/images/logo.png" alt="">
            <span>华夏幸福园区</span>
        </div>

        <div class="login-input">
            <div class="form-row">
                <mt-field label="帐号" placeholder="请输入手机号" v-model="userInfo.name"></mt-field>
            </div>
            <div class="form-row">
                <mt-field label="密码" placeholder="请输入登录密码" type="password" v-model="userInfo.password"></mt-field>
            </div>
            <div class="login-btn">
                <mt-button size="large" @click.native="login">登录</mt-button>
            </div>
            <div class="form-row-reg">
                <router-link  to="/start/reset">忘记密码</router-link>
                <router-link  class="form-item-right" to="/start/reset">立即注册</router-link>
            </div>
                    <!-- <div class="other">
          <hr/><p>其他方式登录</p><hr/>
        </div> -->
            <div class="loginstyle-box">
                <ul>
                    <li v-for="(item,index) in loginList" :key="index">
                        <router-link :to="item.path">
                            <img :src="item.icon" alt="">
                        </router-link>
                    </li>   
                </ul>
            </div>
        </div>
        <div class="login-footer">
            <span>联系电话&nbsp;010-4055-345</span>
        </div>
    </div>
</template>
<script>
    import { Indicator } from 'mint-ui';
    import Api from '@/Api'
    import {mapActions} from 'vuex'

    import icon7 from '@/assets/images/icon/Group7.png'
    import icon8 from '@/assets/images/icon/Group8.png'
    import icon10 from '@/assets/images/icon/Group10.png'

    export default{
        name:'Login',
        data(){
            return {
                userInfo:{
                    name:'',
                    password:''
                },

                  loginList:[
                    {
                        icon:icon7,
                        path:'/second/chart'
                    },
                    {
                        icon:icon8,
                        path:'/second/active'
                    },{
                        icon:icon10,
                        path:'#'
                    }
                ],               
            }
        },
        methods:{
            ...mapActions(['userLogin']),


            

            login(){  

                this.$router.replace('/main');

            // Indicator.open('正在登录...');
            // console.log(this.userInfo);
            // Api.get('splogin',{                
            //         params:this.userInfo
            //     }).then(rep => { 
            //       console.log("----------------------------------");
            //       console.log(rep.data.status); 

            //       this.userLogin(rep.data);
            //       console.log(rep.data);
            //       console.log(rep.data.status);   
            //         if(rep.data.status === "SUCCESS"){
            //             Indicator.close();
            //             this.$router.replace('/main');
            //         }
            //     }).catch(err => {
            //         //响应失败
            //     })

            
// console.log("wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww");
//                 Api.post('sp/resource/district/IndustrialBase',JSON.stringify(this.test),{headers :{'Content-Type': 'application/json'},}
//                 ,{emulateJSON:true}).then(rep => { 

//                     console.log("wlq");
//                     if(rep.data == true){
//                         Indicator.close();
//                         this.$router.replace('/main')
//                     }
//                   }).catch(err => {
//                      //响应失败
//                      console.log("22");
//                  })
// console.log("wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww");

                //登录请求
                // Api.get('login',{                
                //     params:this.userInfo
                // }).then(rep => { 
                //     if(rep.data == true){
                //         Indicator.close();
                //         this.$router.replace('/main')
                //     }

                // }).catch(err => {
                //     //响应失败
                // })
//this.$router.replace('/main')
               // 模拟登录成功
                // setTimeout(() => {
                //     Indicator.close();
                //     this.$router.replace('/main')
                // },1000)     
            }
        }
    }
</script>
<style>
.login-box .mint-cell-wrapper{
    background:transparent;
}
.login-box .mint-field{
    background:transparent;
    border-bottom:1px solid #CCCCCC;
}
.login-header{
    text-align: center;
    overflow: hidden;
    margin-bottom: 1rem;
}
.login-input{
    width: 9.333333rem;
    margin: 0 auto;
}
.login-header>img{
    width: 1.68rem;
    margin: 2.5rem auto .1rem;
}
.login-header>span{
    font-size: .586667rem;
    color:#000000;
}
.login-box .mint-field{
    margin-bottom: .7rem;
}
.login-box .mint-cell-title{
    color:#000000;
    font-size: .42rem;
}
.login-input .mint-field-core{
    font-size: .42rem;
}
.login-box .mint-button {
    height: 1.2rem;
}
.form-row a{
    color:rgb(172, 165, 165);
    font-size:.32rem;
}
.form-row-reg .form-item-right{
   float: right;
  
}

.login-btn{
    margin: .2rem auto .5rem;
    
}
.login-btn .mint-button{
    background: #BA0404;
    color:#fff;
    font-size: .426667rem;
}
.login-footer{
    text-align: center;
    margin-top: .1rem;
    font-size: .32rem;
}

.loginstyle-box{
    background: #fff;
}
.loginstyle-box>ul{
    overflow: hidden;
    width: 6rem;
    margin: 0 auto;
}
.loginstyle-box>ul>li{
    float: left;
    width: 2.0rem;
    text-align: center;
    margin: 1.333333rem 0;
}
.loginstyle-box>ul>li img{
    width: 1.226667rem;
    margin: 0 auto .2rem;
}

    .other {
      width: 100%;
      height: 20px;
      line-height: 20px;
      margin-bottom: 20px;
    }
    .other.hr {
        width: 90px;
        display: inline-block;
        vertical-align: middle;
      }
    .other.p {
        width: 136px;
        color: #9b9b9b;
        text-align: center;
        display: inline-block;
      }
</style>

