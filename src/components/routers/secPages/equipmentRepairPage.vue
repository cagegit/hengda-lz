<template>
    <div class="approval-page-box">
        <back-header title="设备报修"></back-header>
        <div class="approval-container">
            <mt-navbar v-model="selected">
                <mt-tab-item id="info">
                    <img v-show="selected=='info'" src="@/assets/images/icon/sp-icon1.png" slot="icon" alt="">
                    我要报修
                </mt-tab-item>
                <mt-tab-item id="stuff">
                    <img v-show="selected=='stuff'" src="@/assets/images/icon/sp-icon2.png" slot="icon" alt="">
                    报修记录
                </mt-tab-item>
                <mt-tab-item id="state">
                    <img v-show="selected=='state'" src="@/assets/images/icon/sp-icon3.png" slot="icon" alt="">
                    已完成报修
                </mt-tab-item>
            </mt-navbar>
            <mt-tab-container class="tab-container" v-model="selected" swipeable>
                <mt-tab-container-item id="info">
                  <div class="build-form">

                  <div class="form-bottom">
                        <div>
                            <textarea placeholder="请描述您要报修的详情"></textarea>
                           <a href="javascript:void(0);" class="upload-area" @click.stop="uploadPic()">
                             <!--<input type="file" class="upload-pic-info">-->
                           </a>
                          <ul class="pic-ul">
                            <li v-for="(img, index) in options.imgs" :key="index">
                              <a class="list-link" @click='previewImage(img)'>
                                <img  style="border: none;" :src="img" alt=""/>
                              </a>
                              <span class="list-img-close" @click='delImage(img)'></span>
                            </li>
                            </ul>
                      </div>
                        <mt-cell title="请选择报修的类型" class="cell-bottom-hr cell-top-hr">
                          <span></span>
                          <img slot="icon" src="@/assets/images/xl.png" class="rp-icon-wh" >
                        </mt-cell>
                        <mt-cell is-link title="立即处理" @click="pickerOpen('start')" :value="options.type">
                          <span>另约时间</span>
                          <img slot="icon" src="@/assets/images/rl.png" class="rp-icon-wh">
                        </mt-cell>
                    </div>

                    <!--<div class="form-mid">-->
                           <!--&lt;!&ndash;    <div class="img-box">-->
                              <!--<ul class="list-ul">-->
                                  <!--<li class="list-li" v-for="(img, index) in options.imgs" :key="index">-->
                                    <!--<a class="list-link" @click='previewImage(img)'>-->
                                      <!--<img class="img_file" :src="img" alt=""/>-->
                                    <!--</a>-->
                                    <!--<span class="list-img-close" @click='delImage(index)'></span>-->
                                  <!--</li>-->
                                <!--<li class="list-li">-->
                                  <!--<span class="add-img" @click.stop="upload" src="@/assets/images/upload.png" alt="" > </span>-->
                                <!--</li>-->
                              <!--</ul>-->
                          <!--</div>  &ndash;&gt;-->
                    <!--</div>-->

                    <!--<div class="form-bottom">-->
                        <!---->
                    <!--</div>-->
                    <h5>联系人</h5>
                    <div class="form-bottom">
                        <mt-cell title="王老五" class="cell-bottom-hr cell-bt-txt">
                          <img slot="icon" src="@/assets/images/user.png" class="rp-icon-wh">
                        </mt-cell>
                        <mt-cell title="15260982325" class="cell-bottom-hr">
                          <img slot="icon" src="@/assets/images/phone.png" class="rp-icon-wh">
                        </mt-cell>
                        <mt-cell is-link  title="5号楼3单元602室">
                          <img slot="icon" src="@/assets/images/address.png" class="rp-icon-wh">
                        </mt-cell>
                    </div>
                    <div class="form-bottom">
                      <mt-button size="large" class="repairBtn">提交</mt-button>
                    </div>
                    </div>
                </mt-tab-container-item>
                <mt-tab-container-item id="stuff">
                  <div class="form-bottom">
                       <div class="rp-card">
                         <div class="rp-card-row">
                           <div>
                             <img src="@/assets/images/bx1.png" class="rp-icon">
                             <span class="rp-icon-txt">房屋维修</span>
                           </div>
                           <div style="line-height: 24px" class="rp-right-top">
                             待处理
                           </div>
                         </div>
                           <div class="rp-card-row cell-bottom-hr rp-jj" >
                             <img src="@/assets/images/bx-lf.png" class="rp-lf-img">
                             <div>
                               <p class="rp-lf-desc">
                                 我家墙皮脱落的特别严重，粘好的门框子也掉了，前几天经过还导致划伤，希望有关部门处理一下！</p>
                               <p class="rp-timestamp">2018-07-10</p>
                             </div>
                           </div>
                            <div class="rp-card-row-end">
                              <div>
                                <button size="small" class="rp-bx-btn rp-bx-cancel" >取消报修</button>
                                <button size="small" class="rp-bx-btn rp-bx-done" >完成报修</button>
                              </div>
                            </div>
                       </div>
                  </div>
                  <div class="form-bottom">
                  <div class="rp-card">
                    <div class="rp-card-row">
                      <div>
                        <img src="@/assets/images/bx2.png" class="rp-icon">
                        <span class="rp-icon-txt">水电燃气</span>
                      </div>
                      <div style="line-height: 24px" class="rp-right-top">
                        待处理
                      </div>
                    </div>
                    <div class="rp-card-row cell-bottom-hr rp-jj" >
                      <img src="@/assets/images/bx-lf.png"  class="rp-lf-img">
                      <div>
                        <p  class="rp-lf-desc">
                          我家水管漏水特别严重！水管开裂，还不是水龙头的问题，水管遇热严重变形，多处漏水！</p>
                        <p class="rp-timestamp">2018-07-10</p>
                      </div>
                    </div>
                    <div class="rp-card-row-end">
                      <div>
                        <button size="small" class="rp-bx-btn rp-bx-cancel" >取消报修</button>
                        <button size="small" class="rp-bx-btn rp-bx-done" >完成报修</button>
                      </div>
                    </div>
                  </div>
                </div>
                  <div class="form-bottom">
                    <div class="rp-card">
                      <div class="rp-card-row">
                        <div>
                          <img src="@/assets/images/bx3.png" class="rp-icon">
                          <span class="rp-icon-txt">公共设施</span>
                        </div>
                        <div style="line-height: 24px" class="rp-right-top">
                          待处理
                        </div>
                      </div>
                      <div class="rp-card-row cell-bottom-hr rp-jj" >
                        <!--<img src="@/assets/images/bx-lf.png" height="80px" style="padding: 5px;width: 30%;">-->
                        <div>
                          <p  class="rp-lf-desc">
                            A座西区7楼走廊的声控灯坏了，到晚上黑漆漆的，感觉闹鬼似得，反应了好几次，修好了又坏好几回了都，到底能不能修好啊！</p>
                          <p  class="rp-timestamp">2018-07-10</p>
                        </div>
                      </div>
                      <div class="rp-card-row-end">
                        <div>
                          <button size="small" class="rp-bx-btn rp-bx-cancel" >取消报修</button>
                          <button size="small" class="rp-bx-btn rp-bx-done" >完成报修</button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="rp-bx-bottom">
                     <a href="javascript:void(0)">查看已完成报修 >></a>
                  </div>

                </mt-tab-container-item>
                <mt-tab-container-item id="state">
                  <div class="form-bottom">
                    <div class="rp-card">
                      <div class="rp-card-row">
                        <div>
                          <img src="@/assets/images/bx1.png" class="rp-icon">
                          <span class="rp-icon-txt">房屋维修</span>
                        </div>
                        <div style="line-height: 24px" class="rp-right-top">
                          已处理
                        </div>
                      </div>
                      <div class="rp-card-row cell-bottom-hr rp-jj" >
                        <img src="@/assets/images/bx-lf.png" class="rp-lf-img">
                        <div>
                          <p class="rp-lf-desc">
                            我家墙皮脱落的特别严重，粘好的门框子也掉了，前几天经过还导致划伤，希望有关部门处理一下！</p>
                          <p  class="rp-timestamp">2018-07-10</p>
                        </div>
                      </div>
                      <div class="rp-card-row-start">
                           <span class="rp-fw">服务时间</span> <span class="rp-timestamp">2018-09-10</span>
                      </div>
                    </div>
                  </div>
                  <div class="form-bottom">
                    <div class="rp-card">
                      <div class="rp-card-row">
                        <div>
                          <img src="@/assets/images/bx2.png" class="rp-icon">
                          <span class="rp-icon-txt">水电燃气</span>
                        </div>
                        <div style="line-height: 24px" class="rp-right-top">
                          已处理
                        </div>
                      </div>
                      <div class="rp-card-row cell-bottom-hr rp-jj" >
                        <img src="@/assets/images/bx-lf.png" class="rp-lf-img">
                        <div>
                          <p class="rp-lf-desc">
                            我家水管漏水特别严重！水管开裂，还不是水龙头的问题，水管遇热严重变形，多处漏水！</p>
                          <p  class="rp-timestamp">2018-07-10</p>
                        </div>
                      </div>
                      <div class="rp-card-row-start">
                        <span  class="rp-fw">服务时间</span> <span class="rp-timestamp">2018-09-10</span>
                      </div>
                    </div>
                  </div>
                  <div class="form-bottom">
                    <div class="rp-card">
                      <div class="rp-card-row">
                        <div>
                          <img src="@/assets/images/bx3.png" class="rp-icon">
                          <span class="rp-icon-txt">公共设施</span>
                        </div>
                        <div style="line-height: 24px" class="rp-right-top">
                          待处理
                        </div>
                      </div>
                      <div class="rp-card-row cell-bottom-hr rp-jj" >
                        <!--<img src="@/assets/images/bx-lf.png" height="80px" style="padding: 5px;width: 30%;">-->
                        <div>
                          <p  class="rp-lf-desc">
                            A座西区7楼走廊的声控灯坏了，到晚上黑漆漆的，感觉闹鬼似得，反应了好几次，修好了又坏好几回了都，到底能不能修好啊！</p>
                          <p  class="rp-timestamp">2018-07-10</p>
                        </div>
                      </div>
                      <div class="rp-card-row-start">
                        <span  class="rp-fw">服务时间</span> <span class="rp-timestamp">2018-09-10</span>
                      </div>
                    </div>
                  </div>
                  <div class="form-bottom">
                    <div class="rp-card">
                      <div class="rp-card-row">
                        <div>
                          <img src="@/assets/images/bx3.png" class="rp-icon">
                          <span class="rp-icon-txt">公共设施</span>
                        </div>
                        <div style="line-height: 24px" class="rp-right-top">
                          待处理
                        </div>
                      </div>
                      <div class="rp-card-row cell-bottom-hr rp-jj" >
                        <!--<img src="@/assets/images/bx-lf.png" height="80px" style="padding: 5px;width: 30%;">-->
                        <div>
                          <p  class="rp-lf-desc">
                            A座西区7楼走廊的声控灯坏了，到晚上黑漆漆的，感觉闹鬼似得，反应了好几次，修好了又坏好几回了都，到底能不能修好啊！</p>
                          <p  class="rp-timestamp">2018-07-10</p>
                        </div>
                      </div>
                      <div class="rp-card-row-start">
                        <span class="rx-fw">服务时间</span> <span class="rp-timestamp">2018-09-10</span>
                      </div>
                    </div>
                  </div>
                  <div class="form-bottom">
                    <div class="rp-card">
                      <div class="rp-card-row">
                        <div>
                          <img src="@/assets/images/bx3.png" class="rp-icon">
                          <span class="rp-icon-txt">公共设施</span>
                        </div>
                        <div style="line-height: 24px" class="rp-right-top">
                          待处理
                        </div>
                      </div>
                      <div class="rp-card-row cell-bottom-hr rp-jj" >
                        <!--<img src="@/assets/images/bx-lf.png" height="80px" style="padding: 5px;width: 30%;">-->
                        <div>
                          <p  class="rp-lf-desc">
                            A座西区7楼走廊的声控灯坏了，到晚上黑漆漆的，感觉闹鬼似得，反应了好几次，修好了又坏好几回了都，到底能不能修好啊！</p>
                          <p  class="rp-timestamp">2018-07-10</p>
                        </div>
                      </div>
                      <div class="rp-card-row-start">
                        <span  class="rp-fw">服务时间</span> <span class="rp-timestamp">2018-09-10</span>
                      </div>
                    </div>
                  </div>
                </mt-tab-container-item>
            </mt-tab-container>
        </div>
      <div class="actions-box">
        <mt-actionsheet :actions="actions" cancelText="取消" v-model="sheetVisible"></mt-actionsheet>
      </div>
    </div>
</template>
<script>

import { MessageBox } from 'mint-ui';
//import { Card,Button } from 'vant'

export default {
  name: "equipmentRepairPage",
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
      ],
      actions:[
        {
          name:"拍照",
          method:this.a_callback_one
        },
        {
          name:'从相册中选择',
          method:this.a_callback_one
        }
      ],
      sheetVisible: false,
      options: {
        title: "",
        zy: "",
        type: "紧急通知",
        startTime: "2018/06/07",
        endTime: "2018/06/12",
        object: "恒大集团事业部",
        comment: "是",
        imgs: []
      },
    };
  },
  methods: {
    submit() {
      MessageBox.confirm("确定执行此操作?").then(action => {});
    },
    onRead(file) {
      console.log(file);
    },
    pickerOpen(type) {
      console.log(type);
    },
    a_callback_one(a,b){
      //  this.getimage(b);
      this.options.imgs.push("static/images/p4.png");
      this.options.imgs.push("static/images/p5.png");
    },
    uploadPic() {
      this.sheetVisible = true;
    },
    delImage: function (v) {
      const that = this;
      MessageBox.confirm("确定删除该图片?").then(action => {
        console.log(action);
        console.log(true);
        let index = that.options.imgs.findIndex((val) => val === v);
        that.options.imgs.splice(index,1);
      },() => {
        console.log(false);
      });

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
.approval-container .tab-container {
 padding: 0.35rem;
}
h5{
    font-size:.4rem;
    padding: .2rem .5rem;
    background: #f6f6f6;
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

.form-top > div {
  background: #fff;
}

.build-form .form-mid {
  background: #fff;
}
.build-form textarea {
  resize: none;
  display: block;
  width: 646px;
  border: none;
  margin: 0 auto;
  font-size: 0.373333rem;
  padding: 0.56rem 0;
  height: 3.653333rem;
  /*border-bottom: 2px solid #f6f6f6;*/
}
.img_file {
  display:inline-block;
  width: 2.8rem;
  height: 2.173333rem;
  margin-right: 0.24rem;
  margin-bottom: 0.2rem;
}
 .list-img-close {
    background: url(../../../assets/images/login-close.png) no-repeat right top;
    border-color: #ff4a00;
    background-position: center;
    background-size: 35px 35px;
    display: block;
    float: left;
    width: 10px;
    height: 10px;
    position: absolute;
    top: 3%;
    left: 75%;
    margin-top: 0px;
    margin-left: 0px;
    padding: 2px 5px;
    z-index: 10;
    border-radius: 5px;
    text-align: center;
  }
.img-box {
  width: 10rem;
  padding-bottom: 0.3rem;
  background: #fff;
}
.img-upload {
  width: 8.88rem;
  margin: 0.2rem auto 0;
}

.list-ul {
    list-style: none;
    /* 去掉ul前面的符号 */
    margin: 0px;
    /* 与外界元素的距离为0 */
    padding: 2px;
    /* 与内部元素的距离为0 */
    width: auto;
    /* 宽度根据元素内容调整 */
  }

  /* 所有class为menu的div中的ul中的li样式 */

  .list-li {
    float: left;
    /* 向左漂移，将竖排变为横排 */
    padding: 2px;
    /* 与内部元素的距离为0 */
    display: inline-block;
    position: relative;
    text-align: center;
  }


  .list-link img {
    width: 100px;
    height: 100px;
  }


  .list-link a:visited {
    background-color: #465c71;
    /* 背景色 */
    border: 1px #4e667d solid;
    /* 边框 */
    color: #dde4ec;
    /* 文字颜色 */
    display: flex;
    /* 此元素将显示为块级元素，此元素前后会带有换行符 */
    line-height: 1.35em;
    /* 行高 */
    padding: 4px 20px;
    /* 内部填充的距离 */
    text-decoration: none;
    /* 不显示超链接下划线 */
    white-space: nowrap;
    /* 对于文本内的空白处，不会换行，文本会在在同一行上继续，直到遇到 <br> 标签为止。 */
    overflow: hidden;
  }

  /* 所有class为menu的div中的ul中的a样式(鼠标移动到元素中的样式) */

  .list-link a:hover {
    background-color: #bfcbd6;
    /* 背景色 */
    color: #465c71;
    /* 文字颜色 */
    text-decoration: none;
    /* 不显示超链接下划线 */
  }

  /* 所有class为menu的div中的ul中的a样式(鼠标点击元素时的样式) */

  .list-link a:active {
    background-color: #465c71;
    /* 背景色 */
    color: #cfdbe6;
    /* 文字颜色 */
    text-decoration: none;
    /* 不显示超链接下划线 */
  }

  .add-img {
    display: block;
    background-image: url('../../../assets/images/upload.png');
    background-repeat: no-repeat;
    width: 100px;
    height: 100px;
    background-position: center;
    background-size: 100px 100px;
  }

.form-bottom {
  background: #fff;
  margin-top: 0.1rem;
  padding-bottom: .2rem;
}
.form-bottom .mint-cell {
  margin: 0 0.56rem;
}
.form-bottom .mint-cell-allow-right {
  margin-left: 0.2rem;
}
.form-bottom .date {
  color: #000;
}
.form-bottom .tag {
  margin: 0 0.15rem;
}
.form-bottom .mint-button{
  width: 8rem;
  margin: .2rem auto 0;
  font-size: .4rem;
  color:#fff;
  background: #BA0404;
}
.upload-area{
  position: relative;
  display: inline-block;
  width: 100px;
  height: 100px;
  margin-left: 0.56rem;
  margin-bottom: 5px;
  background: url('../../../assets/images/sc.png') center no-repeat;
  background-size: contain;
  border: none;
  overflow: hidden;
  color: #1E88C7;
  text-decoration: none;
  text-indent: 0;
  line-height: 20px;
}
.upload-area input {
  position: absolute;
  font-size: 100px;
  right: 0;
  top: 0;
  opacity: 0;
  cursor: pointer
  }
  .cell-bottom-hr {
    border-bottom: 1px solid #dadada;
  }
  .cell-top-hr {
    border-top: 1px solid #dadada;
  }
  .cell-bt-txt{
    font-size: 28px !important;
  }
  .repairBtn {
    background: #FD2D00 !important;
    color: #fff !important;
    border-radius: 78px;
    /*font-size: 16px !important;;*/
    font-size: 32px !important;
    height: 92px;
    line-height: 92px;
  }
  .rp-card {
    display: flex;
    flex-wrap: wrap;
    padding: 0.2rem 0.2rem 0;
  }
  .rp-card-row {
    display: flex;
    justify-content: space-between;
    flex-basis: 100%;
  }
  .rp-card-row-end {
    display: flex;
    justify-content: flex-end;
    margin-top: 5px;
    flex-basis: 100%;
  }
  .rp-card-row-start {
    display: flex;
    justify-content: flex-start;
    margin-top: 5px;
    flex-basis: 100%;
  }
  .rp-icon-wh {
    width: 25px;
    height: 26px;
    display: inline-block;
  }
  .rp-jj {
    padding-bottom: 5px;
    margin: 5px 0;
  }
  .rp-bx-btn {
    width: 140px;
    border-radius: 65px;
    background: #fff;
    color:#4A4A4A;
    border: none;
    height: 60px;
    line-height: 60px;
    font-size: 26px;
  }
  .rp-bx-cancel {
    border: 1px solid #979797;
    color: #979797;
  }
  .rp-bx-done {
    margin-left: 20px;
    border: 1px solid #FD2D00;
    color: #FD2D00;
  }
  .rp-right-top {
    font-size: 28px;
    line-height: 28px;
    color: #FD2D00;
  }
  .rp-icon {
    display: inline-block;
    vertical-align: bottom;
    width: 39px;
    height: 36px;
  }
  .rp-icon-txt {
    font-size: 28px;
    font-weight: bold;
    line-height: 24px;
    padding-left: 5px;
  }
  .rp-lf-img {
    padding: 5px 10px 5px 0;
    width: 30%;
    height: 125px;
  }
  .rp-lf-desc {
    word-break: break-all;
    max-height: 120px;
    overflow: hidden;
    color:  #4A4A4A;
    font-size: 26px;
  }
  .rp-bx-bottom {
    margin: 20px 0;
    text-align: center;
  }
  .rp-bx-bottom a {
    color: #4A4A4A;
    font-size: 26px;
  }
  .rp-timestamp {
    color: #9B9B9B;
    font-size: 24px;
    line-height: 42px;
  }
  .rp-fw {
    padding-right: 20px;
    font-size: 26px;
  }
.actions-box{
  width: 10rem;
  position: fixed;
  bottom: 0;
}
.actions-box .mint-actionsheet{
  position: absolute;
}
.pic-ul {
 display: inline-block;
  margin-left: 0.56rem;
}
.pic-ul li {
  display: inline-block;
  margin-right: 10px;
  margin-bottom: 5px;
  position: relative;
}
.pic-ul li img {
  width: 100px;
  height: 100px;
}
</style>


