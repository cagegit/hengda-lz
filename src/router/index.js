import Vue from 'vue'
import Router from 'vue-router'
//起始页
import startPage from '@/components/routers/startPage'
import EntryPage from '@/components/routers/startPages/Entry' //广告
import Login from '@/components/routers/startPages/Login'  //登录
import Reset from '@/components/routers/startPages/Reset'
import ModifyPassWord from '@/components/routers/startPages/ModifyPassWord'

//主界面
import mainPage from '@/components/routers/mainPage'
import homePage from '@/components/routers/mainPages/homePage'  //首页
import msgPage from '@/components/routers/mainPages/msgPage'   //消息
import sevPage from '@/components/routers/mainPages/sevPage'   //服务
import userPage from '@/components/routers/mainPages/userPage'   //我的

//二级页面
import secPage from '@/components/routers/secPage'
import activePage from  '@/components/routers/secPages/activePage'  //主页-活动公告
import buildActivePage from '@/components/routers/secPages/buildActivePage' //创建活动
import taskPage from  '@/components/routers/secPages/taskPage'  //主页-任务
import pactPage from '@/components/routers/secPages/pactPage'  //主页-合同
import reviewPage from '@/components/routers/secPages/reviewPage'  //主页-审批
import paymentPage from '@/components/routers/secPages/paymentPage'  //主页-收付款
import feesBuildPage from '@/components/routers/secPages/feesBuildPage'  //生成费用单
import approvalPage from '@/components/routers/secPages/approvalPage'    //审批流程

import equipmentRepairPage from '@/components/routers/secPages/equipmentRepairPage'    //报修
import chartPage from '@/components/routers/secPages/chartPage'  //领导驾驶舱
import placeRentalPage from  '@/components/routers/secPages/placeRentalPage'  //主页-场地租赁
import rechargePage from  '@/components/routers/secPages/rechargePage'
import billPage from  '@/components/routers/secPages/billPage'
import paymentSuccessPage from  '@/components/routers/secPages/paymentSuccessPage'  //付款成功
import paymentRecordsPage from  '@/components/routers/secPages/paymentRecordsPage'  //缴费记录





Vue.use(Router)

Router.prototype.goBack = function () {
  this.isBack = true
  window.history.go(-1)
}


export default new Router({
  // mode: 'history',
  routes: [
    {
      path:'/',
      redirect:'/start'
    },
    {
      path: '/start',
      name: 'start',
      component:startPage,
      children:[
        {
          path:'/start',
          redirect:'entry'
        },
        {
          path: 'entry',
          name: 'entry',
          component:EntryPage
        },
        {
          path:'login',
          name:'login',
          component:Login
        },
        {
          path:'reset',
          name:'reset',
          component:Reset
        },
        {
          path:'modifypassword',
          name:'modifypassword',
          component:ModifyPassWord
        }
      ]
    },
    {
      path:'/main',
      name:'main',
      component:mainPage,
      children:[
        {
          path:'/main',
          redirect:'home'
        },
        {
          path:'home',
          name:'home',
          component:homePage
        },
        {
          path:'message',
          name:'message',
          component:msgPage
        },{
          path:'serve',
          name:'serve',
          component:sevPage
        },{
          path:'user',
          name:'user',
          component:userPage
        }
      ]
    },
    {
      path:'/second',
      name:'second',
      component:secPage,
      children:[
        {
          path:'active',
          name:'active',
          component:activePage
        },
        {
          path:'build-active',
          name:'build-active',
          component:buildActivePage
        },
        {
          path:'task',
          name:'task',
          component:taskPage
        },
        {
          path:'pact',
          name:'pact',
          component:pactPage
        },
        {
          path:'review',
          name:'review',
          component:reviewPage
        },
        {
          path:'payment',
          name:'payment',
          component:paymentPage
        }, {
          path:'fees-build',
          name:'fees-build',
          component:feesBuildPage
        },
        {
          path:'chart',
          name:'chart',
          component:chartPage
        },
        {
          path:'approval',
          name:'approval',
          component:approvalPage
        },
        {
          path:'equipmentRepair',
          name:'equipmentRepair',
          component:equipmentRepairPage
        },
        {
          path:'rental',
          name:'rental',
          component:placeRentalPage
        },
        {
          path:'recharge',
          name:'recharge',
          component:rechargePage
        },
        {
          path:'bill',
          name:'bill',
          component:billPage
        },
        {
          path:'paymentSuccess',
          name:'paymentSuccess',
          component:paymentSuccessPage
        },
        {
          path:'paymentRecords',
          name:'paymentRecords',
          component:paymentRecordsPage
        }

      ]
    }
  ]
})
