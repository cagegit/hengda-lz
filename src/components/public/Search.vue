<template>
    <div class="sev-search">
        <mt-search :placeholder="placeholder"></mt-search>
    </div>
</template>
<script>
export default {
    name:'Search',
    props:['placeholder']
}
</script>
<style>
.sev-search {
  background: #ffffff;
  padding: 0.2rem 0;
  width: 10rem;
}
.sev-search .mint-search {
  height: 100%;
  width: 8.666667rem;
  margin: 0 auto;
  background: #cccccc;
  border-radius: 0.5rem;
}
.sev-search .mint-searchbar {
  padding: 0;
  border-radius: 0.5rem;
}
.sev-search .mint-searchbar-inner {
  flex: 9;
  background: #fbecec;
  padding: 0.2rem;
}
.sev-search .mint-searchbar-inner input,
.sev-search .mint-searchbar-inner i {
  font-size: 0.373333rem;
  background-color: transparent;
  text-align: center;
}
.sev-search .mint-searchbar-cancel {
  flex: 1;
  text-align: center;
  margin: 0;
  display: none !important;
}
</style>

