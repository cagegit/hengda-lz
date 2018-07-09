<template>
    <div v-show="isOpen" class="picker-container">
        <transition name="slideUp">
            <div v-show="isOpen" class="picker-box">
                                    
                <mt-picker :slots="data" showToolbar :itemHeight="36" @change="pickerItem">
                    <!-- <div class="picker-box-title"> -->
                           <div class="area_btn_box">
                              <div class="area_btn larea_cancel" @click="cancel">取消</div>
                              <div>
                               
                              {{title}}
                             
                              </div>
                              <div class="area_btn larea_finish" @click="confirm">确定</div>
                          <!-- </div> -->

                      <!-- <table>
                         <tr>
                           <td>
                             <mt-button style="padding:0rem 0.24rem;background: #ba0404; color: #fff;  font-size: 0.4rem;" slot="left"  @click.native="cancel">取消</mt-button>
                          </td>
                          <td >
                            <h6 style="padding:0rem 0.24rem;background: #ba0404;  color: #fff;"> 
                            {{title}}
                            </h6>
                          </td>
                            <td>
                        <mt-button style="background: #ba0404;  color: #fff;  font-size: 0.4rem;" slot="right"  @click.native="confirm">确定</mt-button>
                         </td>
                         </tr>
                     </table> -->

                        <!-- <mt-header :title="title">
                              <mt-button slot="left" @click.native="back" icon="back"></mt-button>
                              <mt-button slot="right" @click.native="add" v-if="right">
                                <img id="add" src="@/assets/images/icon/add.png" slot="icon" alt="">
                              </mt-button>
                        </mt-header> -->
                      <!--   <mt-button slot="left"  style="width:2rem"   @click.native="cancel">取消</mt-button>
                        <h6 style="width:6rem"> 
                         {{title}}
                        </h6>
                        <mt-button slot="right" style="width:2rem"  @click.native="confirm">确定</mt-button> -->
                     <!--   <h6> 
                  <mt-button slot="left" class="first-child" @click.native="cancel">取消</mt-button> 
                        <span v-on:click="cancel">关闭</span> 
                
                         <!-- <mt-button class="first-child" size="small" slot="left" @click.native="cancel">取消</mt-button>
                        {{title}}
                        <!-- <mt-button size="small" slot="right" @click.native="confirm">确定</mt-button> -->
                        <!-- <span class = "spanright" v-on:click="confirm">确定</span>
                        </h6> -->
                                        
                           
                            <!-- <mt-button class="last-child"  @click.native="confirm">确认</mt-button> -->
                        

                        <!-- <p class="btns">
                            <mt-button @click.native="cancel">取消</mt-button>
                            <mt-button @click.native="confirm">确认</mt-button>
                        </p> -->
                    </div>
                </mt-picker>
            </div>
        </transition>
    </div>
</template>
<script>
export default {
  name: "Picker",
  props: ["data", "title"],
  data() {
    return {
      isOpen: false,
      value: ""
    };
  },
  methods: {
    open() {
      this.isOpen = true;
    },
    confirm() {
      this.isOpen = false;
      this.$emit("confirm", this.value[0]);
    },
    cancel() {
      this.isOpen = false;
    },
    pickerItem(picker, value) {
      this.value = value;
    }
  }
};
</script>
<style>
.picker-container {
  width: 10rem;
  height: 100%;
  position: fixed;
  background: rgba(83, 83, 83, 0.658);
  top: 0;
}
.picker-box {
  width: 10rem;
  position: absolute;
  bottom: 0;
  background: #fff;
}
.picker-box-title {
  font-size: 0.4rem;
  text-align: center;
  color: #fff;
  padding: 0.1rem 0.1rem;
  background: #ba0404;
  height: 1rem;
}
.area_btn_box {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  font-size: 0.4rem;
  color: #fff;
  text-align: center;
  height: 0.5rem;
  padding: 0.1rem 0.1rem;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-box-align: stretch;
  -webkit-align-items: stretch;
  -ms-flex-align: stretch;
  align-items: stretch;
  background-color: #ba0404;
  position: relative
}

/* .picker-box h6 {
  font-size: 0.4rem;
  text-align: center;
  color: #fff;
  padding: 0.3rem 0.3rem;
  margin: 0 0  0.3rem;
  background: #ba0404;
} 
 .picker-box h6 {
  font-size: 0.4rem;
  text-align: center;
  color: #fff;
  padding: 0.3rem 0;
  margin: 0 0 0.3rem;
  background: #ba0404;
} */

.h6 spanright{
  margin-right: .36rem;
}
.picker-box .picker-slot {
  font-size: 0.373333rem;
}
.picker-box .picker-toolbar {
  height: auto;
}
.picker-box .picker-toolbar .btns {
  width: 6rem;
  overflow: hidden;
  margin: 0 auto;
}
.picker-box .picker-toolbar .btns .mint-button:first-child {
  float: left;
  font-size: 0.373333rem;
}
.picker-box .picker-toolbar .btns .mint-button:last-child {
  float: right;
  font-size: 0.373333rem;
  background: #ba0404;
  color: #fff;
}
.slideUp-enter,.slideUp-leave-to{
    transform: translateY(100%);
}
.slideUp-enter-active,.slideUp-leave-active{
    transition: transform .2s ease-out;
}
</style>

