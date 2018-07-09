<template>
    <div class="entry-box">
        <div class="start-box" v-show="logoShow">
            <transition name="fadeIn">
                <div class="logo-box" v-show="logoShow">
                    <img src="@/assets/images/logo.png" alt="">
                </div>
            </transition>
        </div>
        <mt-swipe  :auto="3000" @change="handleChange">
            <mt-swipe-item @click.native="start">
                <img src="@/assets/images/banner.jpeg" alt="" >
                <!-- <mt-button @click.native="start">立即开启</mt-button> -->
            </mt-swipe-item>
            <mt-swipe-item @click.native="start">
                <img src="@/assets/images/banner.jpeg" alt="" >
                <!-- <mt-button @click.native="start">立即开启</mt-button> -->
            </mt-swipe-item>
                <mt-swipe-item @click.native="start">
                <img src="@/assets/images/banner.jpeg" alt="" >
                <!-- <mt-button @click.native="start">立即开启</mt-button> -->
            </mt-swipe-item>        
        </mt-swipe>
    </div>
</template>
<script>
export default {
  name: "Entry",
  data() {
    return {
      logoShow: 0
    };
  },
  methods: {
    start() {
      this.$router.replace("/start/login");
    },

    handleChange(index) {
      console.log(index);
      if(index==0)
      {
        this.start();
      }
    }
  },
  mounted() {
    this.logoShow = 1;
    setTimeout(() => {
      this.logoShow = 0;
    }, 4000);
  }
};
</script>
<style>
.entry-box {
  height: 100%;
}
.entry-box .mint-swipe {
  height: 100%;
}
.enter-box .mint-swipe img {
  width: 100%;
  height: 100%;
}
.entry-box .mint-swipe-indicators {
  bottom: 3rem;
}
.entry-box .mint-button {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 4rem;
  background: #ba0404;
  font-size: 0.4rem;
  color: #ffffff;
}
.entry-box .start-box {
  width: 10rem;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 20;
  background: #fff;
}
.entry-box .logo-box {
  position: absolute;
  width: 2.5rem;
  height: 2.8rem;
  left: 50%;
  top: 50%;
  transform: translate3d(-50%, -50%, 0);
  font-size: 0.533333rem;
  text-align: center;
  color: #ba0404;
}
.entry-box.logo-box img {
  width: 1.68rem;
  margin: 0 auto 0.2rem;
}
.entry-box .fadeIn-enter {
  opacity: 0;
  top: 80%;
}
.entry-box .fadeIn-enter-active {
  transition: all 1s ease-out;
}
</style>

