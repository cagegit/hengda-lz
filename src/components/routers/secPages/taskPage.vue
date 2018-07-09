<template>
    <div class="task-page-box">
       <back-header title="个人任务"></back-header>
       <mt-navbar v-model="selected">
           <mt-tab-item id="waiting">需办理</mt-tab-item>
           <mt-tab-item id="handling">处理中</mt-tab-item>
           <mt-tab-item id="finish">已完成</mt-tab-item>
       </mt-navbar>
       <div class="task-container">
           <router-link class="task-item" v-for="(item,index) in taskList[selected].valueList" :key="index" tag="div" to="#">
               <p>{{item.label}}</p>
               <mt-cell :title="item.person" :value="item.date"></mt-cell>
           </router-link>
       </div>
    </div>
</template>
<script>
export default {
  name: "taskPage",
  data() {
    return {
      selected: "waiting",
      taskList: {
          'waiting':{
              pid:'1',
              valueList:[
                  {
                      label:'园区建设效果图',
                      person:'总务处-张璐',
                      date:'07/06/03'
                  },{
                      label:'园区建设效果图',
                      person:'总务处-张璐',
                      date:'07/06/03'
                  },{
                      label:'园区建设效果图',
                      person:'总务处-张璐',
                      date:'07/06/03'
                  },{
                      label:'园区建设效果图',
                      person:'总务处-张璐',
                      date:'07/06/03'
                  },{
                      label:'园区建设效果图',
                      person:'总务处-张璐',
                      date:'07/06/03'
                  },{
                      label:'园区建设效果图',
                      person:'总务处-张璐',
                      date:'07/06/03'
                  },{
                      label:'园区建设效果图',
                      person:'总务处-张璐',
                      date:'07/06/03'
                  },{
                      label:'园区建设效果图',
                      person:'总务处-张璐',
                      date:'07/06/03'
                  },{
                      label:'园区建设效果图',
                      person:'总务处-张璐',
                      date:'07/06/03'
                  },{
                      label:'园区建设效果图',
                      person:'总务处-张璐',
                      date:'07/06/03'
                  }
              ]
          },
          'handling':{
              pid:'2',
              valueList:[
                  {
                      label:'园区建设效果图2',
                      person:'总务处-张璐',
                      date:'07/06/03'
                  },{
                      label:'园区建设效果图2',
                      person:'总务处-张璐',
                      date:'07/06/03'
                  },{
                      label:'园区建设效果图2',
                      person:'总务处-张璐',
                      date:'07/06/03'
                  },{
                      label:'园区建设效果图2',
                      person:'总务处-张璐',
                      date:'07/06/03'
                  },{
                      label:'园区建设效果图2',
                      person:'总务处-张璐',
                      date:'07/06/03'
                  },{
                      label:'园区建设效果图2',
                      person:'总务处-张璐',
                      date:'07/06/03'
                  },{
                      label:'园区建设效果图2',
                      person:'总务处-张璐',
                      date:'07/06/03'
                  },{
                      label:'园区建设效果图2',
                      person:'总务处-张璐',
                      date:'07/06/03'
                  },{
                      label:'园区建设效果图2',
                      person:'总务处-张璐',
                      date:'07/06/03'
                  },{
                      label:'园区建设效果图2',
                      person:'总务处-张璐',
                      date:'07/06/03'
                  }
              ]
          },
          'finish':{
              pid:'3',
              valueList:[
                  {
                      label:'园区建设效果图3',
                      person:'总务处-张璐',
                      date:'07/06/03'
                  },{
                      label:'园区建设效果图3',
                      person:'总务处-张璐',
                      date:'07/06/03'
                  },{
                      label:'园区建设效果图3',
                      person:'总务处-张璐',
                      date:'07/06/03'
                  },{
                      label:'园区建设效果图3',
                      person:'总务处-张璐',
                      date:'07/06/03'
                  },{
                      label:'园区建设效果图3',
                      person:'总务处-张璐',
                      date:'07/06/03'
                  },{
                      label:'园区建设效果图3',
                      person:'总务处-张璐',
                      date:'07/06/03'
                  },{
                      label:'园区建设效果图3',
                      person:'总务处-张璐',
                      date:'07/06/03'
                  },{
                      label:'园区建设效果图3',
                      person:'总务处-张璐',
                      date:'07/06/03'
                  },{
                      label:'园区建设效果图3',
                      person:'总务处-张璐',
                      date:'07/06/03'
                  },{
                      label:'园区建设效果图3',
                      person:'总务处-张璐',
                      date:'07/06/03'
                  }
              ]
          }
      }
    };
  }
};
</script>
<style>
.task-page-box .mint-navbar {
  margin: 0.3rem auto;
  width: 9.2rem;
  border: 1px solid #ba0404;
}
.task-page-box .mint-navbar .mint-tab-item {
  padding: 0.2rem;
  margin: 0;
  border-right: 1px solid #ba0404;
}
.task-page-box .mint-navbar .mint-tab-item > div {
  font-size: 0.373333rem;
}
.task-page-box .mint-navbar .mint-tab-item:last-child {
  border: none;
}
.task-page-box .mint-navbar .mint-tab-item.is-selected {
  border: 0;
  color: #fff;
  background: #ba0404;
}
.task-container{
  width: 9.2rem;
  margin: 0 auto;
}
.task-item{
  background: #fff;
  border-radius: .15rem;
  margin-bottom: .3rem;
}
.task-item>p{
  font-size: .4rem;
  padding: .4rem;
}
.task-item .mint-cell{
  padding: 0 .4rem !important;
}
.task-item .mint-cell,.task-item .mint-cell-wrapper{
  background: transparent;
  font-size: .373333rem;
  padding: 0;
}
</style>

