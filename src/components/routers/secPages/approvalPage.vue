<template>
    <div class="approval-page-box">
        <back-header title="待我审批"></back-header>
        <div class="approval-container">
            <div class="approval-top">
                <h4>第四季度原材料预定协议</h4>
                <p>交办人：张大陆 交办时间：2018-04-27  11：30</p>
            </div>
            <mt-navbar v-model="selected">
                <mt-tab-item id="info">
                    <img v-show="selected=='info'" src="@/assets/images/icon/sp-icon1.png" slot="icon" alt="">
                    基本信息
                </mt-tab-item>
                <mt-tab-item id="stuff">
                    <img v-show="selected=='stuff'" src="@/assets/images/icon/sp-icon2.png" slot="icon" alt="">
                    办理材料
                </mt-tab-item>
                <mt-tab-item id="state">
                    <img v-show="selected=='state'" src="@/assets/images/icon/sp-icon3.png" slot="icon" alt="">
                    审批状态
                </mt-tab-item>
            </mt-navbar>
            <mt-tab-container v-model="selected" swipeable>
                <mt-tab-container-item id="info">
                    <div class="info-wrapper">
                        <div class="info-row" v-for="(item,index) in info" :key="index">
                            <div class="info-row-left">{{item.label}}</div>
                            <div class="info-row-right">{{item.value}}</div>
                        </div>
                    </div>
                    
                </mt-tab-container-item>
                <mt-tab-container-item id="stuff">
                    <div class="stuff-wrapper">
                        <mt-cell v-for="(item,index) in stuff" :key="index" :to="item.path" is-link :title="item.label"></mt-cell>
                    </div>
                    
                </mt-tab-container-item>
                <mt-tab-container-item id="state">
                    <div class="state-wrapper">
                        <div class="line">
                            <img src="@/assets/images/icon/jian.png" alt="">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        <div class="state-item">
                            <div class="item-right">
                                总经办<br>
                                待审批
                            </div>
                        </div>
                        <div class="state-item">
                            <div class="item-left">
                                2018-07-02<br>
                                12:20
                            </div>
                            <div class="item-right">
                                赵琳亲<br>
                                审批通过
                            </div>
                        </div>
                        <div class="state-item">
                            <div class="item-left">
                                2018-07-02<br>
                                12:20
                            </div>
                            <div class="item-right">
                                赵琳亲<br>
                                审批通过
                            </div>
                        </div>
                        <div class="state-item">
                            <div class="item-left">
                                2018-07-02<br>
                                12:20
                            </div>
                            <div class="item-right">
                                赵琳亲<br>
                                审批通过
                            </div>
                        </div>
                    </div>
                </mt-tab-container-item>
            </mt-tab-container>
           
        </div>
         <mt-button class="submit" @click.native="submit" size="large">审批通过</mt-button>
    </div>
</template>
<script>
import { MessageBox } from 'mint-ui';
export default {
  name: "approvalPage",
  data() {
    return {
      selected: "info",
      info: [
        {
          label: "申报事项",
          value: "东城区域装修(未批先建）科经管绿化"
        },
        {
          label: "事项分类",
          value: "装修整顿费用"
        },
        {
          label: "事项编码",
          value: "WNEJUDE201807938"
        },
        {
          label: "申报人(单位)",
          value: "水域新城建设有限公司"
        },
        {
          label: "经办人",
          value: "张美元"
        },
        {
          label: "手机号",
          value: "13139895859"
        },
        {
          label: "固定电话",
          value: "092837893"
        },
        {
          label: "具体地址",
          value: "北京市赛罕区伦杯建材城"
        }
      ],
      stuff: [
        {
          label: "申报报告(正式文件).doc",
          path: "#"
        },
        {
          label: "申报报告(正式文件).doc",
          path: "#"
        },
        {
          label: "申报报告(正式文件).doc",
          path: "#"
        },
        {
          label: "申报报告(正式文件).doc",
          path: "#"
        },
        {
          label: "申报报告(正式文件).doc",
          path: "#"
        },
        {
          label: "申报报告(正式文件).doc",
          path: "#"
        },
        {
          label: "申报报告(正式文件).doc",
          path: "#"
        }
      ]
    };
  },
  methods: {
    submit() {
      MessageBox.confirm("确定执行此操作?").then(action => {});
    }
  }
};
</script>
<style>
.approval-page-box {
  min-height: 14rem;
}
.approval-top {
  width: 9rem;
  padding: 0 0.5rem;
  background: #fff;
  border-bottom: 1px solid #cccccc;
}
.approval-top h4 {
  color: #1f1f1f;
  font-size: 0.453333rem;
  padding: 0.3rem 0;
}
.approval-top p {
  color: #ba0404;
  font-size: 0.32rem;
  padding: 0 0 0.3rem;
}
.approval-container {
  min-height: 14rem;
}
.approval-container .mint-tab-item.is-selected {
  color: #ba0404;
  border-color: #ba0404;
}
.approval-container .mint-tab-item-icon,
.approval-container .mint-tab-item-label {
  display: inline-block;
  vertical-align: middle;
  font-size: 0.453333rem;
}
.approval-container .mint-tab-item-icon {
  width: 0.453333rem;
  height: 0.453333rem;
}
.mint-tab-item-icon img {
  width: 100%;
  height: 100%;
}
.info-wrapper {
  font-size: 0.426667rem;
  width: 7rem;
  margin: 1.3rem auto 0;
}
.info-row {
  overflow: hidden;
  margin-bottom: 0.3rem;
}
.info-row > div {
  float: left;
}
.info-row > .info-row-left {
  width: 1.733333rem;
  margin-right: 0.5rem;
  text-align: right;
  color: #1f1f1f;
}
.info-row > .info-row-right {
  width: 4.72rem;
}
.stuff-wrapper {
  margin-top: 3px;
}
.stuff-wrapper .mint-cell,
.stuff-wrapper .mint-cell-wrapper {
  background: transparent;
}
.stuff-wrapper .mint-cell {
  padding: 0 0.3rem;
  margin-bottom: 0.05rem;
  background: #fff;
}
.stuff-wrapper .mint-cell-wrapper .mint-cell-text {
  font-size: 0.4rem;
}
.state-wrapper {
  width: 9.6rem;
  margin: 0 auto;
  min-height: 10rem;
  border-bottom: 1px solid #d8d8d8;
  position: relative;
  overflow: hidden;
}
.line {
  width: 0.053333rem;
  height: 8rem;
  background: #d8d8d8;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 0;
}
.line > span {
  position: absolute;
  width: 0.266667rem;
  height: 0.266667rem;
  background: #d8d8d8;
  border-radius: 50%;
  transform: translateX(-45%);
}
.line > span:nth-child(2) {
  top: 2rem;
}
.line > span:nth-child(3) {
  top: 4rem;
}
.line > span:nth-child(4) {
  top: 6rem;
}
.line > img {
  width: 0.586667rem;
  height: 0.586667rem;
  position: absolute;
  top: -0.293333rem;
  left: -0.266667rem;
}
.state-item {
  width: 5rem;
  margin: 0 auto;
  overflow: hidden;
  font-size: 0.4rem;
}
.state-item .item-left {
  float: left;
  /* text-align: center; */
  width: 2.5rem;
}
.state-item .item-right {
  float: right;
  width: 2.5rem;
  text-align: right;
}
.state-wrapper .state-item:nth-of-type(2) {
  margin-top: 1.5rem;
}
.state-wrapper .state-item:nth-of-type(3) {
  margin-top: 1.2rem;
}
.state-wrapper .state-item:nth-of-type(4) {
  margin-top: 1rem;
}
.state-wrapper .state-item:nth-of-type(5) {
  margin-top: 1.2rem;
}
.approval-page-box .submit {
  width: 8rem;
  font-size: 0.4rem;
  color: #fff;
  background: #ba0404;
  margin: 0.3rem auto;
}
.mint-msgbox{
    width: 6rem;
}
.mint-msgbox-confirm{
    color:#fff;background: #ba0404;
}
</style>


