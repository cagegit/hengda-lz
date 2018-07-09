<template>
    <div class="main-page-box">
        <router-view></router-view>
        <div class="main-page-menu">
            <mt-tabbar >
                <mt-tab-item id="home" @click.native="checkPage('home',0)">
                    <img slot="icon" v-if="active==0" src="@/assets/images/icon/home-active.png">
                    <img slot="icon" v-else src="@/assets/images/icon/home-default.png">
                    <!-- <span class="fontsss" v-if="active==0">主页</span>
                    <span v-else>主页</span> -->
                    主页
                          
                </mt-tab-item>
                <mt-tab-item id="message"  @click.native="checkPage('message',1)">
                    <img slot="icon" v-if="active==1" src="@/assets/images/icon/msg-active.png">
                    <img slot="icon" v-else src="@/assets/images/icon/msg-default.png">
                    消息
                </mt-tab-item>
                <mt-tab-item id="user"  @click.native="checkPage('user',2)">
                    <img slot="icon" v-if="active==2" src="@/assets/images/icon/user-active.png">
                    <img slot="icon" v-else src="@/assets/images/icon/user-default.png">
                    个人中心
                </mt-tab-item>
            </mt-tabbar>
        </div>
    </div>
</template>
<script>
export default {
  name: "mainPage",
  data() {
    return {
       active: 0,
    };
  },
  created() {
       //let localData = window.localStorage.getItem('navTabIndex')
       console.log(this.$store.state.currentTabIndex);
       this.active = this.$store.state.currentTabIndex;
       
    },
  methods: {
    checkPage(path, i) {
      console.log(i);
      console.log(path);
      this.$router.push(`/main/${path}`);
      this.active = i;
     // window.localStorage.setItem('navTabIndex',this.active);
      this.$store.state.currentTabIndex = this.active;
      //this.selected = path;
    }
  },
  watch:{
        $route(to,from){
        console.log(to.path);
      },
      selected: function (val, oldVal) {
        // 这里就可以通过 val 的值变更来确定
        console.log(val)
    }
  }
};
</script>
<style>
.main-page-box .mint-header {
  background: #ba0404;
  font-size: 0.42rem;
  padding: 0.5rem 0;
  position: fixed;
  width: 10rem;
  top: 0;
  z-index: 10;
}
.main-page-box {
  height: 100%;
  width: 10rem;
  position: relative;
}
.main-page-box .mint-tabbar{
  background: #fff;
}
.main-page-box .mint-tab-item-icon {
  width: 0.48rem;
  height: 0.48rem;
}
.main-page-box .mint-tab-item-icon img {
  width: 0.48rem;
  height: 0.48rem;
}
.main-page-box .mint-tab-item-label {
  font-size: 0.293333rem;
}
.main-page-menu {
  background: #fff;
  position: fixed;
  bottom: 0;
  width: 10rem;
}
.main-page-box > div:first-child {
  padding-top: 1rem;
  padding-bottom: 1.2rem;
}
.dd{
    color:#929292;
    -webkit-transform-origin:50% 0;
    -ms-transform-origin:50% 0;
    transform-origin:50% 0;
    -webkit-transform:scale(0.9);
    -ms-transform:scale(0.9);transform:scale(0.9)
}
.fontsss{
     font-size:14px;
          color: #3e3e3e;background: #fff;
}
</style>

