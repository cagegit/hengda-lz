<template>
    <div class="payment-page-box">
        <back-header title="企业缴费"></back-header>
        <Search placeholder="请输入公司名称、关键字等" />
        <div class="payment-ctn">
            <div class="fees-btns-container">
                <div class="fees-btns" :class="{'slideDown':!isShow}">
                    <router-link tag="div" :to="{name:'fees-build',params:{'companies':companies, 'feetitle':'生成电费清单', 'feesrcimg':'./static/images/p1.png'}}">
                        <img src="@/assets/images/icon/dian.png" alt="">
                        <span>生成电费单</span>
                    </router-link>
                    <router-link tag="div" :to="{name:'fees-build',params:{'companies':companies, 'feetitle':'生成租赁费清单', 'feesrcimg':'@/assets/images/icon/zl.png'}}">
                        <img src="@/assets/images/icon/zl.png" alt="">
                        <span>生成租赁单</span>
                    </router-link>
                    <router-link tag="div" :to="{name:'fees-build',params:{'companies':companies, 'feetitle':'生成水费清单', 'feesrcimg':'@/assets/images/icon/shui.png'}}">
                        <img src="@/assets/images/icon/shui.png" alt="">
                        <span>生成水费单</span>
                    </router-link>
                    <router-link tag="div" :to="{name:'fees-build',params:{'companies':companies, 'feetitle':'生成物业费清单', 'feesrcimg':'@/assets/images/icon/wy.png'}}">
                        <img src="@/assets/images/icon/wy.png" alt="">
                        <span>生成物业费</span>
                    </router-link>
                    <router-link tag="div" :to="{name:'fees-build',params:{'companies':companies, 'feetitle':'生成停车费清单', 'feesrcimg':'@/assets/images/icon/tc.png'}}">
                        <img src="@/assets/images/icon/tc.png" alt="">
                        <span>生成停车费</span>
                    </router-link>
                    <router-link tag="div" :to="{name:'fees-build',params:{'companies':companies, 'feetitle':'生成宽带费清单', 'feesrcimg':'@/assets/images/icon/kd.png'}}">
                        <img src="@/assets/images/icon/kd.png" alt="">
                        <span>生成宽带费</span>
                    </router-link>
                </div>
                <mt-button @click.native="toggle" size="large">
                    <img src="@/assets/images/icon/more.png" alt="">
                </mt-button>
            </div>
            <div class="company-list">
               <!-- <check-list :data="data" @selected="getSelect"> -->
               <check-list :data="data" @selected="getSelect">
               </check-list>
            </div>
        </div>
    </div>
</template>
<script>
import Search from "@/components/public/Search";
import CheckList from "@/components/public/CheckList";
// import Api from '@/Api'
export default {
  name: "paymentPage",

  //创建时获取企业列表
  // created() {
  //             // Api.get('/sp/resource/district/IndustrialGroup',{                
  //             //     params:{classId:"a", innerId:"b"}
  //             // // Api.get('/sp/inproject/getProByGroupId',{                
  //             // //     params:{groupInnerid:"z29e0ab0a5568000"}
                  
  //             // }).then(rep => { 
  //             //    this.compinfo = rep.data;
  //             //    console.log(rep.data);

  //             // }).catch(err => {
  //             //     //响应失败
  //             //      console.log(err);
  //             // })

	//         // apiHandler({
	//         // 	name: 'singer',
	//         // 	params: {
	//         // 		begin: 0,
	//         // 		singermid: this.$route.params.id
	//         // 	}
	//         // },(response) => {
	//         // 	/*
	//         // 	 * 延迟400ms执行等待页面切换动画完成
	//         // 	 * 原由: 当不存在延迟时组件的内容渲染与页面的切换将会同时执行
	//         // 	 * 由此将会导致在Chrome下产生卡顿
	//         // 	 * */
	// 	      //   setTimeout(() => {
	// 	      //   	this.topinfo = response.data;
	// 	      //   	// 将歌手歌曲的数据结构与Ranklist的歌曲数据结构统一
	// 	      //   	response.data.list.forEach(song => this.songlist.push({
	// 	      //   		data: song.musicData
	// 	      //   	}))

	// 		    //     // enable scroll
	// 		    //     this.$nextTick(() => {
	// 		    //     	this._initScroll();
	// 		    //     });
	// 	      //   }, 400);
	//         // })
	// 	},

  data() {
    return {
      isShow: false,
      companies: [],
      compinfo: [],
      data: [
        {
          id: "1",
          name: "新疆喀什成立公司",
          //img: "static/images/p1.png"
          img: "sinacloud.net/vue-wechat/images/headers/sunquan.jpg"          
        },{
          id: "2",
          name: "新疆喀什成立公司",
          img: "static/images/p1.png"
        },{
          id: "3",
          name: "新疆喀什成立公司",
          img: "static/images/p1.png"
        },{
          id: "4",
          name: "新疆喀什成立公司",
          img: "static/images/p1.png"
        },{
          id: "5",
          name: "新疆喀什成立公司",
          img: "static/images/p1.png"
        },{
          id: "6",
          name: "新疆喀什成立公司",
          img: "static/images/p1.png"
        },{
          id: "7",
          name: "新疆喀什成立公司",
          img: "static/images/p1.png"
        },{
          id: "8",
          name: "新疆喀什成立公司",
          img: "static/images/p1.png"
        },{
          id: "9",
          name: "新疆喀什成立公司",
          img: "static/images/p1.png"
        }
      ]
    };
  },
  methods: {
    toggle() {
      this.isShow = !this.isShow;
    },
    getSelect(arr) {
      this.companies = arr;
      console.log(arr);
    }
  },
  //
  




  components: { Search, CheckList }
};
</script>
<style>
.payment-ctn {
  position: relative;
}
.fees-btns-container {
  background: #fff;
  padding: 0.4rem 0 0;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
}
.fees-btns-container .mint-button {
  background: transparent;
  border: 0;
  border-radius: 0;
  box-shadow: none;
  text-align: center;
  height: 0.8rem;
}
.fees-btns-container .mint-button img {
  display: inline-block;
  width: 0.8rem;
}
.fees-btns-container .mint-button:after {
  background: #fff;
  outline: none;
}
.fees-btns {
  overflow: hidden;
  height: 3.6rem;
  transition: height 0.2s ease-out;
}
.fees-btns.slideDown {
  height: 1.84rem;
}
.fees-btns > div {
  float: left;
  width: 3.33333333rem;
  font-size: .4rem;
  text-align: center;
  margin-bottom: 0.5rem;
}
.fees-btns > div > img {
  width: 1.066667rem;
  margin: 0 auto;
}
.company-list {
  width: 10rem;
  position: absolute;
  top: 3.04rem;
}
</style>

