<template>
    <div class="second-page-box">
        <!-- <transition name="slide"> -->  
        <transition name="transitionName">          
            <router-view ></router-view>
        </transition>
    </div>
</template>
<script>
export default {
  name: "secPage",
data () {
      return {
        transitionName: 'slide-left'
      }
    },
  // beforeRouteUpdate (to, from, next) {
  //     let isBack = this.$router.isBack
  //     if (isBack) {
  //       this.transitionName = 'slide-right'
  //     } else {
  //       this.transitionName = 'slide-left'
  //     }
  //     this.$router.isBack = false
  //     next()
  //   }
};
</script>
<style>
 .child-view {
  position: absolute;
  width:100%;
  transition: all .8s cubic-bezier(.55,0,.1,1);
  }
  .slide-left-enter, .slide-right-leave-active {
    opacity: 0;
    -webkit-transform: translate(50px, 0);
    transform: translate(50px, 0);
  }
  .slide-left-leave-active, .slide-right-enter {
    opacity: 0;
    -webkit-transform: translate(-50px, 0);
    transform: translate(-50px, 0);
  }

.second-page-box .mint-header {
  background: #ba0404;
  font-size: 0.42rem;
  padding: 0.5rem 0;
  position: fixed;
  top: 0;
  z-index: 10;
  width: 10rem;
}
.second-page-box .mint-header .mint-button {
  margin-left: 0.5rem;
}
.second-page-box > div {
  width: 10rem;
  position: absolute;
  left: 0;
  top: 0;
}
.second-page-box > div:first-child {
  padding-top: 1rem;
}
</style>

