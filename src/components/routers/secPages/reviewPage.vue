<template>
    <div class="review-page-box">
        <back-header title="业务审批"></back-header>
        <Search placeholder="事项名称或事件编号" />
        <mt-navbar v-model="selected">
           <mt-tab-item id="waiting">待我审批</mt-tab-item>
           <mt-tab-item id="finish">已办结件</mt-tab-item>
       </mt-navbar>
       <div class="review-container">
           <div class="review-item" v-for="(item,index) in reviewList[selected].valueList" :key="index">
               <div class="item-title">
                   <p class="title-left">{{item.title}}</p>
                   <p class="title-right" v-if="item.state==0">待审批</p>
                   <p class="title-right" v-else>已审批</p>
               </div>
               <div class="item-flow">办理流程：申请—受理—审查—决定</div>
               <div class="item-number">事项编号：{{item.number}}</div>
               <div class="item-time">承诺时间：{{item.time}}</div>
               <mt-button v-if="item.state==0" @click.native="approval(item)">审批</mt-button>
           </div>
       </div>
    </div>
</template>
<script>
    import Search from '@/components/public/Search'
    export default {
        name:'reviewPage',
        data(){
            return {
                selected:'waiting',
                reviewList:{
                    'waiting':{
                        pid:'1',
                        valueList:[
                            {
                                title:'第四季度原材料预定协议',
                                state:'0',
                                number:'ISHNCIHDB2018082392',
                                time:'2018-08-21   13:32:22'
                            },{
                                title:'第四季度原材料预定协议',
                                state:'0',
                                number:'ISHNCIHDB2018082392',
                                time:'2018-08-21   13:32:22'
                            },{
                                title:'第四季度原材料预定协议',
                                state:'0',
                                number:'ISHNCIHDB2018082392',
                                time:'2018-08-21   13:32:22'
                            },{
                                title:'第四季度原材料预定协议',
                                state:'0',
                                number:'ISHNCIHDB2018082392',
                                time:'2018-08-21   13:32:22'
                            },{
                                title:'第四季度原材料预定协议',
                                state:'0',
                                number:'ISHNCIHDB2018082392',
                                time:'2018-08-21   13:32:22'
                            },{
                                title:'第四季度原材料预定协议',
                                state:'0',
                                number:'ISHNCIHDB2018082392',
                                time:'2018-08-21   13:32:22'
                            },{
                                title:'第四季度原材料预定协议',
                                state:'0',
                                number:'ISHNCIHDB2018082392',
                                time:'2018-08-21   13:32:22'
                            },{
                                title:'第四季度原材料预定协议',
                                state:'0',
                                number:'ISHNCIHDB2018082392',
                                time:'2018-08-21   13:32:22'
                            },{
                                title:'第四季度原材料预定协议',
                                state:'0',
                                number:'ISHNCIHDB2018082392',
                                time:'2018-08-21   13:32:22'
                            }
                        ]
                    },
                    'finish':{
                        pid:'1',
                        valueList:[
                            {
                                title:'第四季度原材料预定协议',
                                state:'1',
                                number:'ISHNCIHDB2018082392',
                                time:'2018-08-21   13:32:22'
                            },{
                                title:'第四季度原材料预定协议',
                                state:'1',
                                number:'ISHNCIHDB2018082392',
                                time:'2018-08-21   13:32:22'
                            },{
                                title:'第四季度原材料预定协议',
                                state:'1',
                                number:'ISHNCIHDB2018082392',
                                time:'2018-08-21   13:32:22'
                            },{
                                title:'第四季度原材料预定协议',
                                state:'1',
                                number:'ISHNCIHDB2018082392',
                                time:'2018-08-21   13:32:22'
                            },{
                                title:'第四季度原材料预定协议',
                                state:'1',
                                number:'ISHNCIHDB2018082392',
                                time:'2018-08-21   13:32:22'
                            },{
                                title:'第四季度原材料预定协议',
                                state:'1',
                                number:'ISHNCIHDB2018082392',
                                time:'2018-08-21   13:32:22'
                            },{
                                title:'第四季度原材料预定协议',
                                state:'1',
                                number:'ISHNCIHDB2018082392',
                                time:'2018-08-21   13:32:22'
                            },{
                                title:'第四季度原材料预定协议',
                                state:'1',
                                number:'ISHNCIHDB2018082392',
                                time:'2018-08-21   13:32:22'
                            },{
                                title:'第四季度原材料预定协议',
                                state:'1',
                                number:'ISHNCIHDB2018082392',
                                time:'2018-08-21   13:32:22'
                            }
                        ]
                    }
                }
            }
        },
        methods:{
            approval(data){
                this.$router.push('/second/approval')
            }
        },
        components:{Search}
    }
</script>
<style>
.review-page-box .mint-navbar {
  margin: 0.3rem auto;
  width: 9.2rem;
  border: 1px solid #ba0404;
}
.review-page-box .mint-navbar .mint-tab-item {
  padding: 0.2rem;
  margin: 0;
  border-right: 1px solid #ba0404;
}
.review-page-box .mint-navbar .mint-tab-item > div {
  font-size: 0.373333rem;
}
.review-page-box .mint-navbar .mint-tab-item:last-child {
  border: none;
}
.review-page-box .mint-navbar .mint-tab-item.is-selected {
  border: 0;
  color: #fff;
  background: #ba0404;
}
.review-container{
   
    background: #fff;
}
.review-item {
    padding: .3rem 0 .1rem;
     width: 9.2rem;
    margin: 0 auto;
    position: relative;
    margin-bottom: .2rem;
    border-bottom: 1px solid #ccc;
}
.review-item .item-title{
    overflow: hidden;
    padding: .2rem 0;
}
.review-item .item-title .title-left{
    float: left;
    font-size: .426667rem;
    color:#4a4a4a;
}
.review-item .item-title .title-right{
    float: right;
    font-size:.4rem;
    color:#BA0404;
}
.review-item .item-flow{
    font-size: .346667rem;
    color:#BA0404;
    background: rgba(186, 4, 4, 0.164);
    width: 5.866667rem;
    line-height: .666667rem;
    height: .666667rem;
    padding-left: .1rem;
    margin-bottom: .18rem;
}
.review-item .item-number,.review-item .item-time{
    font-size: .373333rem;
    margin-bottom: .3rem;
}
.review-item .mint-button{
    position: absolute;
    right: .3rem;
    bottom: .3rem;
    color:#fff;
    font-size: .4rem;
    background: #ba0404;
}
</style>
