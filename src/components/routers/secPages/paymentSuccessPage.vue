<template>
    <div class="active-page-box">
        <back-header title="充值成功"></back-header>
        <div class="banner">
            <div><img src="@/assets/images/icon/success.png"></div>
            <div class="success-txt">
                <div class="txt-tit">充值成功!</div>
                <div class="txt-user">2019年Harbor hous商户场地租赁费已交</div>
            </div>
        </div>
        <div class="payment-mes">
            <div>缴费商家<span class="mes-content">Harbor hous</span></div>
            <div>商户位置<span class="mes-content">平安街Harbor house底商23号</span></div>
            <div>下次缴费日期<span class="mes-content">2018/09/21</span></div>
        </div>
        <div class="payment-mes payment-people">
            <div>缴费人员<span class="mes-content">人事部-王晓露</span></div>
            <div>缴费金额<span class="mes-content">¥ 1126698.00元</span></div>
        </div>
        <div class="payment-button">
            <router-link to="/second/paymentRecords">
                <mt-button type="default" class="payment-log">缴费记录</mt-button>
            </router-link>
            <router-link to="/main/home">
                <mt-button type="danger" class="payment-log return-home">返回首页</mt-button>
            </router-link>
        </div>
    </div>
</template>
<script>
    export default {
        name:'paymentSuccess',
        data(){
            return {
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
    }
</script>
<style>
    .banner{
        height:2.773333rem;
        background: -webkit-linear-gradient(left, #AC4AE2 , #FD2D00); /* Safari 5.1 - 6.0 */
        background: -o-linear-gradient(right, #AC4AE2 , #FD2D00); /* Opera 11.1 - 12.0 */
        background: -moz-linear-gradient(right,  #AC4AE2 , #FD2D00); /* Firefox 3.6 - 15 */
        background: linear-gradient(to right,  #AC4AE2 , #FD2D00); /* 标准的语法 */
        display:flex;
        align-items:center;
        flex-wrap:nowap;
    }
    .banner img{
        width:1.28rem;
        height:1.28rem;
        margin:0 0.4rem 0 0.666667rem;

    }
    .success-txt{
        height:1.28rem;
        color:#ffffff;

    }
    .txt-tit{
        line-height:0.666667rem;
        font-size:0.48rem;
        margin-bottom:0.16rem;
        font-weight:bold;
    }
    .txt-user{
        line-height:0.533333rem;
        font-size:0.373333rem
    }
    .payment-mes{
        padding:0.32rem 0.693333rem;
        height:2.36rem;
        background:#ffffff;
        margin-bottom:0.266667rem;
        font-size:0.373333rem;
        color:#9B9B9B;

    }
    .payment-mes div{
        margin-bottom:0.32rem;
    }
    .mes-content{
        font-size:0.346667rem;
        color:#4A4A4A;
        margin-left:0.213333rem;
    }
    .payment-people{
        height:1.36rem;

    }    
    .payment-button{
        margin-top:1.333333rem;
        display:flex;
        flex-wrap:nowap;
        align-items:center;
        font-size:0.426667rem;
        justify-content:center;
    }
    .payment-log{
        width:3.733333rem;
        height:1.066667rem;
        border-top-right-radius:0.533333rem;
        border-bottom-right-radius:0.533333rem;
        border-top-left-radius:0.533333rem;
        border-bottom-left-radius:0.533333rem;
        border:0.026667rem solid #D0021B;
        color:#D0021B;
        margin-right:0.426667rem;
    }
    .return-home{
        color:#ffffff;
    }

</style>

