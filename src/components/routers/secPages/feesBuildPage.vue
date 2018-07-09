<template>
    <div class="fees-build-box">
        <back-header title="生成缴费清单"></back-header>
        <div class="fees-build-container">
            <div class="build-header">
                <!-- <img src="@/assets/images/icon/dian.png" alt=""> -->
                <img :src="feesrcimg" alt="">               
                <span>{{feetitle}}</span> 
            </div>
            <ul class="fees-item-container">
                <li v-for="(item,index) in list" :key="index" class="fees-item">
                    <span class="fees-item-left">新疆喀什成立公司</span>
                    <span class="fees-item-right">584度</span>
                </li>
                <div v-if="list.length==0">请选择企业</div>
            </ul>
            <div class="fees-time-box">
                <mt-field placeholder="起始时间" disabled @click.native="pickDate('start')" :value="startTime">
                    <img src="@/assets/images/icon/date.png" alt="">
                </mt-field>
                <mt-field placeholder="截止时间" disabled @click.native="pickDate('end')" :value="endTime">
                     <img src="@/assets/images/icon/date.png" alt="">
                </mt-field>
            </div>
            <div class="fees-item-bottom">
                <!-- <mt-field v-model="fees_bill.total">
                    <span>度/元</span>
                </mt-field>  -->
                <mt-button size="large">生成订单</mt-button>
            </div>
        </div>
        <div class="date-picker-box">
              <mt-datetime-picker
                type="date"
                year-format="{value} 年"
                month-format="{value} 月"
                date-format="{value} 日"
                ref="start" v-model="fees_bill.startTime"></mt-datetime-picker>
              <mt-datetime-picker
                type="date"
                year-format="{value} 年"
                month-format="{value} 月"
                date-format="{value} 日"
                ref="end" v-model="fees_bill.endTime"></mt-datetime-picker>
          </div>
    </div>
</template>
<script>
export default {
  name: "feesBuildPage",
 
  data() {
    return {
      fees_bill: {      
        total: "",
        startTime: "2017/06/11",
        endTime: "2018/06/11"
      },

      feetitle: this.$route.params.feetitle,
       
       //feesrcimg: require('@/assets/images/icon/dian.png'),//require 目的是？
      feesrcimg: this.$route.params.feesrcimg,//require 目的是？

    };
  },
  methods:{
      pickDate(name){
          this.$refs[name].open();
      }
  },
  computed: {

    list() {
      return this.$route.params.companies;
    },
    startTime() {
      const date = new Date();
      date.setTime(this.fees_bill.startTime * 1);
      let year = date.getFullYear();
      let month = date.getMonth() + 1;
      let day = date.getDate();
      return `${year}/${month}/${day}`;
    },
    endTime() {
      const date = new Date();
      date.setTime(this.fees_bill.endTime * 1);
      let year = date.getFullYear();
      let month = date.getMonth() + 1;
      let day = date.getDate();
      return `${year}/${month}/${day}`;
    }
  }
};
</script>
<style>
.fees-build-container {
  background: #fff;
}
.fees-build-container .build-header {
  width: 8.88rem;
  margin: 0 auto;
  padding: 0.2rem 0;
}
.fees-build-container .build-header img {
  display: inline-block;
  vertical-align: bottom;
  width: 0.64rem;
  height: 0.64rem;
}
.fees-build-container .build-header span {
  font-size: 0.4rem;
  color: #ec9344;
  vertical-align: bottom;
}
.fees-item-container {
  width: 8.08rem;
  margin: 0 auto;
  border: 1px solid #979797;
  padding: 0.4rem;
  border-radius: 0.1rem;
}
.fees-item {
  font-size: 0.346667rem;
  color: #1f1f1f;
  overflow: hidden;
  position: relative;
  padding: 0.1rem 0 0.1rem 0.4rem;
}
.fees-item:before {
  content: "";
  display: block;
  width: 0.186667rem;
  height: 0.186667rem;
  border-radius: 50%;
  background: #1f1f1f;
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
}
.fees-item .fees-item-left {
  float: left;
}
.fees-item .fees-item-right {
  float: right;
  color: #8b8b8b;
}
.fees-time-box {
  width: 8.88rem;
  margin: 0.3rem auto;
  overflow: hidden;
}
.fees-time-box .mint-field {
  background: transparent !important;
  width: 4.266667rem;
  height: 1.133333rem;
  border: 1px solid #979797;
  border-radius: 0.1rem;
}
.fees-time-box .mint-field input:disabled{
    background: transparent;
}
.fees-time-box .mint-field img {
  width: 0.56rem;
  height: 0.533333rem;
}
.fees-build-container .mint-cell-wrapper {
  background: transparent !important;
  font-size: 0.373333rem;
}
.fees-time-box .mint-field:first-child {
  float: left;
}
.fees-time-box .mint-field:last-child {
  float: right;
}
.fees-item-bottom {
  width: 8.88rem;
  margin: 0 auto;
  padding-bottom: 0.5rem;
}
.fees-item-bottom .mint-field {
  border: 1px solid #ba0404;
  border-radius: 0.1rem;
  height: 1.133333rem;
}
.fees-item-bottom .mint-button {
  font-size: 0.4rem;
  color: #fff;
  background: #ba0404;
  height: 1.133333rem;
  margin: 0.3rem 0 0.5rem;
}
.date-picker-box {
  width: 10rem;
  position: fixed;
  bottom: 0;
}
.date-picker-box .mint-popup {
  position: absolute;
}
.date-picker-box .picker-toolbar span,
.date-picker-box .picker-slot {
  font-size: 0.373333rem;
}
.date-picker-box  .mint-datetime-action{
    color:#fff;
    background: #BA0404;
}
</style>

