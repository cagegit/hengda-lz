<template>
  <div id="app" class="custemor-scroll-bar">
    <transition name="slide">
      <router-view/>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
html,body{
    height: 100%;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background:#f6f6f6;
  height: 100%;
  width: 10rem;
  margin: 0 auto;
  position: relative;
  overflow-x: hidden;
  
}
#app>div{
  width: 10rem;
  position: absolute;
  left: 0;
  top: 0;
}
.slide-enter{
    transform: translateX(100%);
    opacity: 0;
}
.slide-leave-to{
    opacity: 0;
    transform: translateX(-100%);
}
.slide-enter-active{
    transition: all ease-out .4s;
}
.slide-leave-active{
    transition: all ease-out .4s;
}

.custemor-scroll-bar::-webkit-scrollbar {
  width: 0;
  height: 0;
}
.custemor-scroll-bar::-webkit-scrollbar-button,
.custemor-scroll-bar::-webkit-scrollbar-track {
  display: none;
}
.custemor-scroll-bar::-webkit-scrollbar-thumb {
  background: transparent;
  border-radius: 8px;
}
.custemor-scroll-bar::-webkit-scrollbar-button,
.custemor-scroll-bar::-webkit-scrollbar-track {
  display: none;
}
.custemor-scroll-bar::-webkit-scrollbar-track-piece {
  background: transparent;
}
</style>
