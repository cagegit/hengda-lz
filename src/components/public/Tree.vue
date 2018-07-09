<template>
    <div class="tree-box">
        <dl v-for="(com,i) in data" :key="i" class="tree-item-lvl-1">
            <dt class="tree-item-title-lvl-1" @click="toggle('isShow1',i)">
                <div class="tree-title-left">
                    <img :src="com.img" alt="">
                    <span>{{com.label}}</span>
                </div>
                <i class="tree-title-right"></i>
            </dt>
            <dd v-for="(bra,j) in com.children" v-show="isShow1==i" :key="j">
                <dl class="tree-item-lvl-2">
                    <dt class="tree-item-title-lvl-2" @click="toggle('isShow2',j)">
                        <div class="tree-title-left">
                            <img :src="bra.img" alt="">
                            <span>{{bra.label}}</span>
                        </div>
                        <i class="tree-title-right"></i>
                    </dt>
                    <dd v-for="(item,k) in bra.children" v-show="isShow2==j" :key="k" class="item-cell">
                        <div class="item-cell-left">
                            <img :src="item.img" alt="">
                            <span>{{item.name}}</span>
                        </div>
                        <div class="item-cell-right">
                            <a :href="'sms:'+item.phone"></a>
                            <a :href="'tel:'+item.phone"></a>
                        </div>
                    </dd>
                </dl>
            </dd>
        </dl>
    </div>
</template>
<script>
export default {
  name: "Tree",
  props: ["data"],
  data(){
      return {
          isShow1:0,
          isShow2:0
      }
  },
  methods:{
      toggle(prop,index){

          this[prop] = this[prop] == index ? -1 : index;
      }
  }
};
</script>
<style scoped>
.tree-box {
  width: 100%;
}
.tree-item-lvl-1 {
  background: #fff;
  padding: 0 0.4rem;
}
.tree-item-title-lvl-1 {
  overflow: hidden;
  padding: 0.2rem 0;
}
.tree-item-lvl-1 > dd {
  margin-left: 0.5rem;
}
.tree-title-left {
  float: left;
}
.tree-title-left > img {
  display: inline-block;
  width: 0.8rem;
  height: 0.8rem;
  vertical-align: middle;
}
.tree-title-left > span {
  font-size: 0.426667rem;
  display: inline-block;
  vertical-align: middle;
  color: #000;
}
.tree-title-right {
  float: right;
  transform: rotateZ(-90deg);
  background: url("../../assets/images/tx/select_down.png") 0 0 no-repeat;
  width: 0.373333rem;
  height: 0.2rem;
  background-size: 0.373333rem 0.2rem;
  margin-top: 0.35rem;
}
.tree-item-title-lvl-2 {
  overflow: hidden;
  padding: .2rem 0;
}
.item-cell {
  overflow: hidden;
  margin-left: .5rem;
  padding: .2rem 0;
}
.item-cell-left {
  float: left;
}
.item-cell-left>img{
    width: .613333rem;
    height: .613333rem;
    display: inline-block;
    vertical-align: middle;
}
.item-cell-left>span{
    font-size: .373333rem;
    display: inline-block;
    vertical-align: middle;
}
.item-cell-right {
  float: right;
  height: 100%;
  margin-right: .8rem;
}
.item-cell-right>a{
    display: inline-block;
    vertical-align: middle;
    width: .426667rem;
    height: .426667rem;
}
.item-cell-right>a:first-child{
    background: url("../../assets/images/tx/sms.png") 0 0 no-repeat;
    background-size: .426667rem .426667rem;
    margin-right: .3rem;
}
.item-cell-right>a:last-child{
    background: url("../../assets/images/tx/phone.png") 0 0 no-repeat;
    background-size: .426667rem .426667rem;
}
</style>

