<template>
  <div class="build-active-box">
    <mt-header title="2018租赁费用" style="background-color: #FD2D00;">
      <mt-button slot="left" @click.native="back" icon="back"></mt-button>
      <mt-button slot="right" class="header-title-rt">缴费记录</mt-button>
    </mt-header>
    <div class="rc-head">
      <div class="rc-head-txt">等待-Harbor house缴费....</div>
      <div class="rc-head-money">
        ¥ 1126698.00元
      </div>
    </div>
    <div class="rc-bill-box">
      <div class="rc-bl-jf ">
        <i></i><span>缴费信息</span>
      </div>
      <mt-cell title="缴费商家" value="Harbor hous" class="cell-top-hr cell-bt-txt"></mt-cell>
      <mt-cell title="缴费方式" value="年交" class="cell-bt-txt"></mt-cell>
      <mt-cell title="商户面积" value="200米/平" class="cell-bt-txt"></mt-cell>

      <mt-cell title="商户位置" value="平安街Harbor house底商23号" class="cell-top-hr cell-bt-txt"></mt-cell>
      <mt-cell title="户名" value="人事部-王晓露" class="cell-bt-txt"></mt-cell>
      <mt-cell title="联系方式" value="13282391122" class="cell-bt-txt"></mt-cell>
      <mt-cell title="上次缴费日期" value="2018/08/21" class="cell-bt-txt"></mt-cell>
      <mt-cell title="下次代缴费日期" value="2019/08/21" class="cell-bt-txt"></mt-cell>
      <mt-cell title="缴费方式" value="年交" class="cell-bt-txt"></mt-cell>
    </div>
    <div class="rc-bill-btn">
      <button>下一步</button>
    </div>
  </div>
</template>
<script>
  import { CellGroup, Cell, CellSwipe } from 'vant';
  import Vue from 'vue'
  Vue.use(CellSwipe).use(Cell).use(CellGroup);
  export default {
    name: "rechargePage",
    components: {
      [Cell.name]: Cell,
      [CellGroup.name]: CellGroup,
      [CellSwipe.name]: CellSwipe
    },
    methods: {
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
//            this.$dialog.confirm({
//              message: this.$t('confirm')
//            }).then(() => {
//              instance.close();
//            });
            break;
        }
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
    height: 412px;
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
  .rc-head-money {
    font-size: 50px;
    color: #FFFFFF;
    padding-left: 37px;
    line-height: 70px;
    width: 362px;
    height: 70px;
    overflow: hidden;
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

  .rc-bill-box {
    width: 676px;
    height: 954px;
    background: #fff;
    border-radius: 10px;
    padding: 10px;
    margin: -280px auto 0;
  }
  .rc-bill-btn {
    text-align: center;
    margin-top: 50px;
    margin-bottom: 50px;
  }
  .rc-bill-btn button {
    width: 394px;
    height: 80px;
    line-height: 80px;
    font-size: 32px;
    color: #FFFFFF;
    background: #FD2D00;
    border-radius: 100px;
    border: none;
  }
  .rc-bl-jf {
    padding-bottom: 20px;
  }
  .rc-bl-jf i {
    border: 3px solid #FD2D00;
    background-color: #FD2D00;
  }
  .rc-bl-jf span {
    padding-left: 10px;
    font-size: 32px;
    color: #000000;
  }
  .rp-icon-wh {
    width: 25px;
    height: 26px;
    display: inline-block;
  }
  .cell-bottom-hr {
    border-bottom: 1px solid #dadada;
  }
  .cell-top-hr {
    border-top: 1px solid #dadada;
  }
  .cell-bt-txt{
    font-size: 28px !important;
    color: #4A4A4A !important;
  }
  .cell-bt-txt .mint-cell-value {
    font-size: 26px !important;
    color: #AC3D30 !important;
  }
</style>
