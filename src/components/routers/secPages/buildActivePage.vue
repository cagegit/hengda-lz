<template>
    <div class="build-active-box">
        <back-header title="创建活动"></back-header>
        <div class="build-form">
            <div class="form-top">
                <div>
                     <mt-field v-model="options.title" placeholder="请输入活动标题"></mt-field>
                </div>
                <div>
                     <mt-field v-model="options.zy" placeholder="请输入摘要内容"></mt-field>
                </div>
            </div>
          <div class="form-mid">
                <textarea placeholder="请输入活动内容"></textarea>
                <div class="img-upload">
                    <!-- <div class="img-box">

                      <li class="list-li" v-for="(img, index) in options.imgs" :key="index">
                        <a class="list-link" @click='previewImage(img)'>
                          <img class="img_file" :src="img" alt="">
                        </a>
				                <span class="list-img-close" @click='delImage(index)'></span>
		                	</li>

                         <img class="img_file" v-for="(img,index) in options.imgs" :key="index" :src="img" alt="">
                        <span class="img_upload_btn" v-if="!options.imgs.length" @click="upload" src="@/assets/images/upload.png" alt="">
                        <img class="img_upload_btn_normal" v-else @click="upload" src="@/assets/images/upload.png" alt="" >
                    </div> -->

<div class="img-box">

                  <ul class="list-ul">
                      <li class="list-li" v-for="(img, index) in options.imgs" :key="index">
                        <a class="list-link" @click='previewImage(img)'>
                          <img class="img_file" :src="img" alt=""/>
                        </a>
				                <span class="list-img-close" @click='delImage(index)'></span>
		                	</li>
                    <li class="list-li">
                      <span class="add-img" @click.stop="upload" src="@/assets/images/upload.png" alt="" > </span>
                    </li>
                  </ul>


                </div>
                <input type="file" name="fileUpload" id="fileUp" @change="change($event)" ref="inputFile" >
                </div>
          </div>
          <div class="form-bottom">
              <mt-cell is-link title="通知类型" @click.native="pickerOpen('type')" :value="options.type"></mt-cell>
              <mt-cell title="通知时间">
                  <p>
                      <span class="date" @click="pickerOpen('start')">{{startTime}}</span>
                      <span class="tag">至</span>
                      <span class="date" @click="pickerOpen('end')">{{endTime}}</span>
                  </p>
              </mt-cell>
              <mt-cell is-link @click.native="pickerOpen('object')" title="通知对象" :value="options.object"></mt-cell>
              <!-- <mt-cell is-link @click.native="pickerOpen('comment')" title="开放评论" :value="options.comment"></mt-cell> -->
              <mt-button size="large" @click.native="issue">发布</mt-button>
          </div>
          <div class="actions-box">
            <mt-actionsheet :actions="actions" cancelText="取消" v-model="sheetVisible"></mt-actionsheet>
          </div>
          <div class="date-picker-box">
              <mt-datetime-picker
                type="date"
                year-format="{value} 年"
                month-format="{value} 月"
                date-format="{value} 日"
                ref="start" v-model="options.startTime"></mt-datetime-picker>
              <mt-datetime-picker
                type="date"
                year-format="{value} 年"
                month-format="{value} 月"
                date-format="{value} 日"
                ref="end" v-model="options.endTime"></mt-datetime-picker>
          </div>
          <Picker :data="typeList" ref="type" @confirm="getType" title="请选择通知类型"/>
          <Picker :data="objectList" ref="object" @confirm="getObject" title="请选择通知对象"/>
          <Picker :data="commentList" ref="comment" @confirm="getComment" title="是否开放评论"/>
        </div>
    </div>
</template>
<script>
import Picker from "@/components/public/Picker";
import Api from '@/Api';
import { MessageBox } from 'mint-ui';

export default {
  name: "buildActivePage",
  data() {
    return {
      typeList: [
        {
          flex: 1,
          values: [
            "紧急通知",
            "重要通知",
            "喜讯通知",
            "检查通知",
            "放假通知",
            "警示通知"
          ],
          showToolbar: true,
          className: "slot1",
          textAlign: "center"
        }
      ],
      objectList:[
           {
          flex: 1,
          values: [
            "恒大集团事业部1",
            "恒大集团事业部2",
            "恒大集团事业部3",
            "恒大集团事业部4",
            "恒大集团事业部5",
            "恒大集团事业部6"
          ],
          showToolbar: true,
          className: "slot1",
          textAlign: "center"
        }
      ],
      commentList:[
           {
          flex: 1,
          values: [
            "是",
            "否"
          ],
          showToolbar: true,
          className: "slot1",
          textAlign: "center"
        }
      ],
      options: {
        title: "",
        zy: "",
        type: "紧急通知",
        startTime: "2018/06/07",
        endTime: "2018/06/12",
        object: "恒大集团事业部",
        comment: "是",
        imgs: [
          // "static/images/p4.png",
          // "static/images/p5.png",
          // "static/images/p4.png"
        ]
      },
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
      sheetVisible:false
    };
  },
  components: { Picker },
  computed: {
    startTime() {
      const date = new Date();
      date.setTime(this.options.startTime * 1);
      let year = date.getFullYear();
      let month = date.getMonth() + 1;
      let day = date.getDate();
      return `${year}/${month}/${day}`;
    },
    endTime() {
      const date = new Date();
      date.setTime(this.options.endTime * 1);
      let year = date.getFullYear();
      let month = date.getMonth() + 1;
      let day = date.getDate();
      return `${year}/${month}/${day}`;
    }
  },

  methods: {
     change:function(event){
        this.file = event.target.files[0];
       // this.file = this.options.imgs[0]
        console.log(this.file);
      },
    datePickerOpen(name) {
      this.$refs[name].open();
    },
    pickerOpen(name) {
      this.$refs[name].open();
    },
    upload() {
      this.sheetVisible = true;
    },
    a_callback_one(a,b){
    //  this.getimage(b);
      this.options.imgs.push("static/images/p4.png");
      this.options.imgs.push("static/images/p5.png");
    },
    dataURLtoFile: function (dataurl, filename) {
      var arr = dataurl.split(',')
      var mime = arr[0].match(/:(.*?);/)[1]
      var bstr = window.atob(arr[1])
      var n = bstr.length
      var u8arr = new Uint8Array(n)
      while (n--) {
        u8arr[n] = bstr.charCodeAt(n)
      }
      var blob = new Blob([u8arr], {type: mime})
      blob.lastModifiedDate = new Date()
      blob.name = filename
      return blob
    }  ,
    //发布通知
    issue(){

let file1 = this.dataURLtoFile('data:image/jpeg;base64,' + imageURI, 'test.jpeg')

console.log("issue upload File begin");
          //创建formdata
                let formData = new FormData();
                formData.append('filename', 'p4.png');
                formData.append('file', this.file);


                Api.post('/sp/files/images/IndustrialBase/z29f73527c568000?note=12443',formData,{headers :{'Content-Type': 'multipart/form-data'},}).then(rep => {

                    console.log("wlq");
                     console.log(rep.data);

                    if(rep.data == true){
                        Indicator.close();
                        this.$router.replace('/main')
                    }
                  }).catch(err => {
                     //响应失败
                     console.log("22");
                 })
console.log("issue upload File beginend ");


    },
    getType(value) {
      this.options.type = value;
    },
    getObject(value) {
      this.options.object = value;
    },
    getComment(value) {
      this.options.comment = value;
    },
    getimage(nSourceType){
       console.log("www");

        var me= this;
        navigator.camera.getPicture(onSuccess, onFail, { quality: 50,
            destinationType: Camera.DestinationType.FILE_URI,sourceType:nSourceType });

        function onSuccess(imageURI) {
            this.options.imgs.push.push(imageURI);
           // me.imgsrc = imageURI;
        }

        function onFail(message) {
            alert('Failed because: ' + message);
        }
   },
   delImage: function (index) {
        let vm = this;

        MessageBox.confirm("确定删除该图片?").then(action => {
            console.log(true);
        },() => {
            console.log(false);
        });

        // vm.$vux.confirm.show({
        //   title: '确定删除该图片?',
        //   onConfirm() {
        //     vm.imgUrls.splice(index, 1);
        //   }
        // })

      },
            previewImage: function (url) {
        let vm = this;
        vm.isPreview = true;
        vm.previewImg = url;
      },
      closePreview: function () {
        let vm = this;
        vm.isPreview = false;
        vm.previewImg = "";
      },






  }
};
</script>
<style>

  .list-ul {
    list-style: none;
    /* 去掉ul前面的符号 */
    margin: 0px;
    /* 与外界元素的距离为0 */
    padding: 0px;
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

  .add-img {
    display: block;
    background-image: url('../../../assets/images/upload.png');
    background-repeat: no-repeat;
    width: 100px;
    height: 100px;
    background-position: center;
    background-size: 100px 100px;
  }


.build-active-box .mint-cell-wrapper {
  background: transparent;
  height: 1.226667rem;
  padding: 0;
  font-size: 0.373333rem;
}
.build-active-box .mint-field {
  margin: 0.2rem 0.56rem;
  background: #fff !important;
}
.form-top > div {
  background: #fff;
}
.build-active-box .mint-field input {
  font-size: 0.373333rem;
}
:focus {
  outline: none;
}
.build-form .form-mid {
  background: #fff;
}
.build-form textarea {
  resize: none;
  display: block;
  width: 8.88rem;
  border: none;
  margin: 0 auto;
  font-size: 0.373333rem;
  padding: 0.2rem 0;
  height: 3.653333rem;
  border-bottom: 2px solid #f6f6f6;
}
.img-box {
  width: 10rem;
  padding-bottom: 0.3rem;
}
.img-upload {
  width: 8.88rem;
  margin: 0.2rem auto 0;
}
/* .img-box img {
  display:  inline-block;
  width: 2.8rem;
  height: 2.173333rem;
  margin-right: 0.24rem;
  margin-bottom: 0.2rem;
} */
.img_upload_btn {
  display: inline-block;
  width: 2.8rem;
  height: 2.173333rem;
  margin-left: 0rem;
  margin-bottom: 0.2rem;

}
.img_upload_btn_normal {
  display: inline-block;
  width: 2.8rem;
  height: 2.173333rem;
  margin-left: -0.07rem;
  margin-bottom: 0.2rem;
}
.img_file {
  display:inline-block;
  width: 2.8rem;
  height: 2.173333rem;
  margin-right: 0.24rem;
  margin-bottom: 0.2rem;
}

.form-bottom {
  background: #fff;
  margin-top: 0.2rem;
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
.actions-box{
  width: 10rem;
  position: fixed;
  bottom: 0;
}
.actions-box .mint-actionsheet{
  position: absolute;
}
</style>

