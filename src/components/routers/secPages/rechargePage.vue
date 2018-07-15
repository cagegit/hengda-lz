<template>
  <div class="build-active-box">
    <mt-header title="充值中心" style="background-color: #FD2D00;">
      <mt-button slot="left" @click.native="back" icon="back"></mt-button>
                
        <!-- <router-link to="/second/paymentRecords">
          <mt-button slot="right" class="header-title-rt">缴费记录</mt-button>
        </router-link> -->
     <mt-button slot="right" class="header-title-rt">
     <router-link to="/second/paymentRecords" style="color:#ffffff">缴费记录 </router-link>
   </mt-button>
    </mt-header>
    <div class="rc-head">
      <div class="rc-head-txt">等待-Harbor house缴费....</div>
      <div class="rc-head-box">
           <div class="rc-head-img">
             <div class="rc-t1">¥ 1126698</div>
             <div class="rc-t2">2019年租赁费用</div>
             <button class="rc-t3" @click="payBill()">立即支付</button>
           </div>
      </div>
    </div>
    <div class="rc-bd-title">
       <span>缴费单位</span>
    </div>
    <van-cell-swipe :right-width="65" :on-close="onClose">
      <van-cell-group>
        <van-cell  @click="toBill()">
            <img src="@/assets/images/location.png" slot="icon" class="c-cell-icon">
            <div class="van-cell__title van-cus-tt">
            <span>恒大绿洲-C座-平安街Harbor house底商23号</span>
              <!--<div class="van-cell__label">&nbsp;</div>-->
            </div>
        </van-cell>
      </van-cell-group>
      <span slot="right">缴费记录</span>
    </van-cell-swipe>
    <van-cell-swipe :right-width="65" :on-close="onClose">
      <van-cell-group>
        <van-cell  @click="toBill()">
          <img src="@/assets/images/zlf.png" slot="icon" class="c-cell-icon">
          <div class="van-cell__title van-cus-tt"><span>租赁费</span>
            <div class="van-cell__label">恒大绿洲-C座-平安街Harbor house底商23号</div>
          </div>
        </van-cell>
      </van-cell-group>
      <span slot="right">缴费记录</span>
    </van-cell-swipe>
    <van-cell-swipe :right-width="65" :on-close="onClose">
      <van-cell-group>
        <!--<van-cell title="物业费" label="购物业费次数 00000011次" icon="location" />-->
        <van-cell  @click="toBill()">
          <img src="@/assets/images/wyf.png" slot="icon" class="c-cell-icon">
          <div class="van-cell__title van-cus-tt"><span>物业费</span>
            <div class="van-cell__label">购物业费次数 00000011次</div>
          </div>
        </van-cell>
      </van-cell-group>
      <span slot="right">缴费记录</span>
    </van-cell-swipe>
    <van-cell-swipe :right-width="65" :on-close="onClose">
      <van-cell-group>
        <!--<van-cell title="电费" label="购电次数 00000011次" icon="location" />-->
        <van-cell  @click="toBill()">
          <img src="@/assets/images/dianf.png" slot="icon" class="c-cell-icon">
          <div class="van-cell__title van-cus-tt"><span>电费</span>
            <div class="van-cell__label">购电次数 00000011次</div>
          </div>
        </van-cell>
      </van-cell-group>
      <span slot="right">缴费记录</span>
    </van-cell-swipe>
    <van-cell-swipe :right-width="65" :on-close="onClose">
      <van-cell-group>
        <!--<van-cell title="水费" label="购水次数 00000011次" icon="location" />-->
        <van-cell  @click="toBill()">
          <img src="@/assets/images/dianf.png" slot="icon" class="c-cell-icon">
          <div class="van-cell__title van-cus-tt"><span>水费</span>
            <div class="van-cell__label">购水次数 00000011次</div>
          </div>
        </van-cell>
      </van-cell-group>
      <span slot="right">缴费记录</span>
    </van-cell-swipe>
    <!--带标题的弹窗-->
    <van-actionsheet v-model="isZf" title="确认付款" class="cus-sheet">
       <div class="rp-sheet-money"><span>¥ 1126698.00元</span></div>
      <mt-cell title="缴费类型" value="年交" class="cell-bottom-hr cell-st-txt"></mt-cell>
      <mt-cell title="付款方式" value="中国银行(0400)" class="cell-bottom-hr cell-st-txt"></mt-cell>
      <div class="rp-sheet-btn">
        <router-link to="/second/paymentSuccess">
                <button>立即付款</button>
        </router-link>
      </div>
    </van-actionsheet>
  </div>
</template>
<script>
  import { CellGroup, Cell, CellSwipe,Actionsheet  } from 'vant';
  export default {
    name: "rechargePage",
    components: {
      [Cell.name]: Cell,
      [CellGroup.name]: CellGroup,
      [CellSwipe.name]: CellSwipe,
      [Actionsheet.name]: Actionsheet
    },
    data() {
       return  {
         isZf: false
       }
    },
    methods: {
      payBill() {
        this.isZf = true;
      },
      back() {
        this.$router.back();
      },
      onClose(clickPosition, instance) {
        switch (clickPosition) {
          case 'left':
          case 'cell':
          case 'outside':
            instance.close();
            break;
          case 'right':
            break;
        }
      },
      toBill() {
        console.log('切换路由');
        this.$router.replace('/second/bill');
      }
    }
  };
</script>
<style>
.header-title-rt {
  margin-right: 33px;
  font-size: 30px !important;
}
  .rc-head {
    background-color: #FD2D00;
    padding-top: 28px;
  }
  .rc-head-box {
    /*display: flex;*/
    /*!*align-content: center;*!*/
    /*justify-content: center;*/
    /*flex-basis: 100%;*/
    padding-top: 35px;
    padding-bottom: 35px;
  }
  .rc-head-txt {
    font-size: 28px;
    color: #FFFFFF;
    width: 341px;
    height: 40px;
    overflow: hidden;
    line-height: 40px;
    padding-left: 37px;
  }
  .rc-head-img {
    background: url('../../../assets/images/rc1.png') no-repeat;
    background-size: contain;
    width: 409px;
    height: 312px;
    position: relative;
    margin: 0 auto;
    text-align: center;
  }
  .rc-head-img .rc-t1 {
     color: #FD2D00;
     font-size: 40px;
     padding-top: 60px;
  }
  .rc-head-img .rc-t2 {
    font-size: 24px;
    color: #9B9B9B;
  }
.rc-head-img button {
  font-size: 30px;
  width: 212px;
  height: 50px;
  line-height: 50px;
  color: #FFFFFF;
  background: #4A90E2;
  border-radius: 100px;
  border: none;
  margin-top: 110px;
  cursor: pointer;
}
  .rc-bd-title {
    padding: 20px 0 10px;
    background-color: #fff;
  }
  .rc-bd-title span {
    font-size: 34px;
    color: #000000;
    padding-left: 37px;
  }
  .build-active-box {
    user-select: none;
  }
.build-active-box .van-cell-swipe__right {
   display: flex;
   color: #FFFFFF;
   font-size: 15px;
   width: 150px;
   height: 100%;
   align-items: center;
   justify-content: center;
   background-color: #F44;
 }
  .c-cell-icon {
    display: inline-block;
    width: 52px;
    height: 52px;
    border: none;
    margin-right: 15px;
    margin-top: 10px;
  }
  .rp-sheet-money {
    padding-top: 67px;
    text-align: center;
  }
  .rp-sheet-money span{
    font-size: 64px;
    color: #000000;
  }
  .rp-sheet-btn {
    text-align: center;
    margin: 220px auto 50px;
  }
  .rp-sheet-btn button {
    background: #FD2D00;
    border-radius: 100px;
    width: 394px;
    height: 80px;
    line-height: 80px;
    border: none;
    font-size: 32px;
    color: #FFFFFF;
  }
  .cell-st-txt{
    font-size: 30px !important;
    color: #9B9B9B !important;
  }
  .cell-st-txt .mint-cell-value {
    font-size: 30px !important;
    color: #000000 !important;
  }
  .cus-sheet .van-icon-close {
    left: 0 !important;
    right: auto !important;
  }
  .van-cus-tt {
    font-size: 30px !important;
    color: #000000 !important;
  }
  .van-cus-tt .van-cell__label {
    font-size: 24px;
    color: #9B9B9B;
    line-height: 2;
  }
</style>
