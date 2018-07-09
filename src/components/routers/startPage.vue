<template>
    <div class="start-box">
        <router-view></router-view>
    </div>
</template>
<script>
    export default {
        name:'startPage',


    watch:{


      $route(to,from){
    console.log(to.path);
      }

    }

  }
</script>
<style>
.start-box{
    width: 10rem;
    height: 100%;
    background: #fff;
}
.start-box .mint-header {
  background: #ba0404;
  font-size: 0.42rem;
  padding: 0.5rem 0.5rem 0.5rem 0.5rem;
  position: fixed;
  width: 10rem;
  top: 0;
  z-index: 10;
}
</style>

