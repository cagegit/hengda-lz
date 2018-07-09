<template>
    <div class="pact-page-box">
        <back-header title="合同列表"></back-header>
        <Search placeholder="请输入公司名称、关键字等" /> 
        <mt-navbar v-model="selected">
           <mt-tab-item id="all">所有合同</mt-tab-item>
           <mt-tab-item id="warning">到期预警</mt-tab-item>
           <mt-tab-item id="finish">到期未处理</mt-tab-item>
       </mt-navbar>
       <div class="pact-container">
           <div v-for="(item,index) in pactList[selected].valueList" :key="index" class="pact-item">
               <mt-cell :title="item.staff" :label="'@'+item.company" is-link></mt-cell>
               <div class="item-ctn">
                   <p class="item-ctn-title">{{item.title}}</p>
                  <div class="item-ctn-time">
                      <p>
                          <span>合同起租日</span>
                          <span>合同结束日</span>
                      </p>
                      <p>
                          <span>{{item.startTime}}</span>
                          <span>{{item.endTime}}</span>
                      </p>
                  </div>
               </div>
           </div>
       </div>
    </div>
</template>
<script>
    import Search from '@/components/public/Search' 
    export default {
        name:'pactPage',
        data(){
            return {
                selected:'all',
                pactList:{
                    'all':{
                        pid:'1',
                        valueList:[
                            {
                                staff:'张启宽1',
                                company:'乐恒家业',
                                title:'第四季度原材料预定协议',
                                startTime:'2018/06/12',
                                endTime:'2018/06/22'
                            },{
                                staff:'张启宽',
                                company:'乐恒家业',
                                title:'第四季度原材料预定协议',
                                startTime:'2018/06/12',
                                endTime:'2018/06/22'
                            },{
                                staff:'张启宽',
                                company:'乐恒家业',
                                title:'第四季度原材料预定协议',
                                startTime:'2018/06/12',
                                endTime:'2018/06/22'
                            },{
                                staff:'张启宽',
                                company:'乐恒家业',
                                title:'第四季度原材料预定协议',
                                startTime:'2018/06/12',
                                endTime:'2018/06/22'
                            },{
                                staff:'张启宽',
                                company:'乐恒家业',
                                title:'第四季度原材料预定协议',
                                startTime:'2018/06/12',
                                endTime:'2018/06/22'
                            },{
                                staff:'张启宽',
                                company:'乐恒家业',
                                title:'第四季度原材料预定协议',
                                startTime:'2018/06/12',
                                endTime:'2018/06/22'
                            },{
                                staff:'张启宽',
                                company:'乐恒家业',
                                title:'第四季度原材料预定协议',
                                startTime:'2018/06/12',
                                endTime:'2018/06/22'
                            },{
                                staff:'张启宽',
                                company:'乐恒家业',
                                title:'第四季度原材料预定协议',
                                startTime:'2018/06/12',
                                endTime:'2018/06/22'
                            },{
                                staff:'张启宽',
                                company:'乐恒家业',
                                title:'第四季度原材料预定协议',
                                startTime:'2018/06/12',
                                endTime:'2018/06/22'
                            }
                        ]
                    },
                     'warning':{
                        pid:'2',
                        valueList:[
                            {
                                staff:'张启宽2',
                                company:'乐恒家业',
                                title:'第四季度原材料预定协议',
                                startTime:'2018/06/12',
                                endTime:'2018/06/22'
                            },{
                                staff:'张启宽',
                                company:'乐恒家业',
                                title:'第四季度原材料预定协议',
                                startTime:'2018/06/12',
                                endTime:'2018/06/22'
                            },{
                                staff:'张启宽',
                                company:'乐恒家业',
                                title:'第四季度原材料预定协议',
                                startTime:'2018/06/12',
                                endTime:'2018/06/22'
                            },{
                                staff:'张启宽',
                                company:'乐恒家业',
                                title:'第四季度原材料预定协议',
                                startTime:'2018/06/12',
                                endTime:'2018/06/22'
                            },{
                                staff:'张启宽',
                                company:'乐恒家业',
                                title:'第四季度原材料预定协议',
                                startTime:'2018/06/12',
                                endTime:'2018/06/22'
                            },{
                                staff:'张启宽',
                                company:'乐恒家业',
                                title:'第四季度原材料预定协议',
                                startTime:'2018/06/12',
                                endTime:'2018/06/22'
                            },{
                                staff:'张启宽',
                                company:'乐恒家业',
                                title:'第四季度原材料预定协议',
                                startTime:'2018/06/12',
                                endTime:'2018/06/22'
                            },{
                                staff:'张启宽',
                                company:'乐恒家业',
                                title:'第四季度原材料预定协议',
                                startTime:'2018/06/12',
                                endTime:'2018/06/22'
                            },{
                                staff:'张启宽',
                                company:'乐恒家业',
                                title:'第四季度原材料预定协议',
                                startTime:'2018/06/12',
                                endTime:'2018/06/22'
                            }
                        ]
                    },
                     'finish':{
                        pid:'1',
                        valueList:[
                            {
                                staff:'张启宽3',
                                company:'乐恒家业',
                                title:'第四季度原材料预定协议',
                                startTime:'2018/06/12',
                                endTime:'2018/06/22'
                            },{
                                staff:'张启宽',
                                company:'乐恒家业',
                                title:'第四季度原材料预定协议',
                                startTime:'2018/06/12',
                                endTime:'2018/06/22'
                            },{
                                staff:'张启宽',
                                company:'乐恒家业',
                                title:'第四季度原材料预定协议',
                                startTime:'2018/06/12',
                                endTime:'2018/06/22'
                            },{
                                staff:'张启宽',
                                company:'乐恒家业',
                                title:'第四季度原材料预定协议',
                                startTime:'2018/06/12',
                                endTime:'2018/06/22'
                            },{
                                staff:'张启宽',
                                company:'乐恒家业',
                                title:'第四季度原材料预定协议',
                                startTime:'2018/06/12',
                                endTime:'2018/06/22'
                            },{
                                staff:'张启宽',
                                company:'乐恒家业',
                                title:'第四季度原材料预定协议',
                                startTime:'2018/06/12',
                                endTime:'2018/06/22'
                            },{
                                staff:'张启宽',
                                company:'乐恒家业',
                                title:'第四季度原材料预定协议',
                                startTime:'2018/06/12',
                                endTime:'2018/06/22'
                            },{
                                staff:'张启宽',
                                company:'乐恒家业',
                                title:'第四季度原材料预定协议',
                                startTime:'2018/06/12',
                                endTime:'2018/06/22'
                            },{
                                staff:'张启宽',
                                company:'乐恒家业',
                                title:'第四季度原材料预定协议',
                                startTime:'2018/06/12',
                                endTime:'2018/06/22'
                            }
                        ]
                    }
                }
            }
        },
        components:{
            Search
        }
    }
</script>
<style>
.pact-page-box .mint-navbar {
  margin: 0.3rem auto;
  width: 9.2rem;
  border: 1px solid #ba0404;
}
.pact-page-box .mint-navbar .mint-tab-item {
  padding: 0.2rem;
  margin: 0;
  border-right: 1px solid #ba0404;
}
.pact-page-box .mint-navbar .mint-tab-item > div {
  font-size: 0.373333rem;
}
.pact-page-box .mint-navbar .mint-tab-item:last-child {
  border: none;
}
.pact-page-box .mint-navbar .mint-tab-item.is-selected {
  border: 0;
  color: #fff;
  background: #ba0404;
}

.pact-container{
    width: 9.2rem;
    margin: 0 auto;
}
.pact-item{
    background: #fff;
    margin-bottom: .2rem;
}
.pact-item .mint-cell{
    background: transparent;
    padding: 0 .3rem;
}
.pact-item .mint-cell-wrapper{
    background: transparent;
    font-size: .373333rem;
    border-bottom: 1px solid #cccccc;
}
.pact-item .mint-cell-text{
    color:#4a4a4a;
}
.pact-item .mint-cell-label{
    display: inline-block;
    font-size: .373333rem;
    margin:0;
    vertical-align: middle;
    margin-left: .1rem;
}
.item-ctn{
    padding: .4rem .3rem .2rem;
}
.item-ctn .item-ctn-title{
    font-size: .4rem;
    margin-bottom: .4rem;
    color:#000;
}
.item-ctn .item-ctn-time{
    font-size: .373333rem;
    color:#4a4a4a;
}
.item-ctn .item-ctn-time>p:first-child{
    color:#9b9b9b;
    margin-bottom: .3rem;
}
.item-ctn .item-ctn-time span{
    margin-right: .3rem;
}
</style>

