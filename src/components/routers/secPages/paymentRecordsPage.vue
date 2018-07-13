<template>
    <div class="active-page-box">
        <back-header title="缴费记录"></back-header>
        <Search placeholder="请输入搜索内容" /> 
        <div class="month-rule">
            <van-steps
                class="date-tit"
              :active="active"
              title="2018年4月"
            >
                <van-step>1月</van-step>
                <van-step>2月</van-step>
                <van-step>3月</van-step>
                <van-step>4月</van-step>
                <van-step>5月</van-step>
                <van-step>6月</van-step>
                <van-step>7月</van-step>
            </van-steps>
        </div>
        <div class="record-card">
            <div class="card-tit">
                <div>2018年4月份水费单</div>
            </div>
            <div class="record-item border-top-sty">
                <div class="record-user">王晓路</div>
                <div class="moner-num">¥ 224.00元</div>
            </div>
        </div>
        <div class="record-card">
            <div class="card-tit">
                <div>2018年4月份水费单</div>
            </div>
            <div class="record-item border-top-sty">
                <div class="record-user">王晓路</div>
                <div class="moner-num">¥ 224.00元</div>
            </div>
        </div>
        <div class="record-card">
            <div class="card-tit">
                <div>2018年4月份水费单</div>
            </div>
            <div class="record-item border-top-sty">
                <div class="record-user">王晓路</div>
                <div class="moner-num">¥ 224.00元</div>
            </div>
        </div>
    </div>
</template>
<script>
    import Search from '@/components/public/Search'
    import Vue from 'vue'
    import {Step, Steps}  from 'vant';
    Vue.use(Step).use(Steps);
    export default {
        name:'paymentSuccess',
        data(){
            return {
                active:3,
                noticeList:[
                    {
                        img:'static/images/p4.png',
                        pid:'1',
                        path:'/second/active',
                        title:'总经办-王杰',
                        info:'关于进一步明确建筑工地施工围栏标准的相关通知'
                    }
                ]
            }
        },
        methods: {
            returnHome(){

            }
        },
        components:{
            Search
        }
    }
</script>
<style>
    .month-rule{
        background:#ccc;
        margin-bottom:0.16rem;
        box-shadow: 0 0.026667rem 0.213333rem 0 #FEB8AA;
        margin-bottom:0.16rem;
    }
    .record-card{
        width:9.146667rem;
        margin:0 auto;
        background:#ffffff;
        margin-bottom:0.32rem;
    }
    .card-tit{
        height:1.146667rem;
        display:flex;
        align-items:center;
    }
    .card-tit div{
        height:0.56rem;
        width:4.666667rem;
        border-left:0.08rem solid #FD2D00;
        padding-left:0.24rem;
        color:#000000;
        font-size:0.4rem;
        font-weight:600;
        margin-left:0.2rem;
    }
    .record-item{
        height:1.253333rem;
        margin:0 0.653333rem 0 0.52rem;
        display:flex;
        align-items:center;
        justify-content:space-between;

    }
    .record-user{
        font-size:0.373333rem;
        color:#4A4A4A;
    }
    .moner-num{
        font-size:0.346667rem;
        color:#AC3D30;
    }
    .border-top-sty{
        border-top:0.04rem solid #DADADA;
    }
    .date-tit{
        font-weight:600;
        font-size:0.48rem;
    }
</style>

