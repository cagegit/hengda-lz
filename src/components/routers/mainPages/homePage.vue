<template>
    <div class="home-page-box">
        <mt-header></mt-header>
        <mt-header title="华夏幸福"></mt-header>
        <mt-swipe :auto="3000">
            <mt-swipe-item>
                <img src="@/assets/images/swipe-1.png" alt="">
            </mt-swipe-item>
        </mt-swipe>
        <!-- 园区基础服务 -->
        <div class="parkservice-box">
            <ul>
                <li v-for="(item,index) in parkServiceList" :key="index">
                    <router-link :to="item.path">
                        <img :src="item.icon" alt="">
                        <span>{{item.title}}</span>
                    </router-link>
                </li>
            </ul>
        </div>
        <p></p>
        <!-- 园区拓展服务 -->
        <div class="service-box">
            <ul>
                <li v-for="(item,index) in serviceList" :key="index">
                    <router-link :to="item.path">
                        <img :src="item.icon" alt="">
                        <span>{{item.title}}</span>
                    </router-link>
                </li>
            </ul>
        </div>


        <div class="trends-box">
            <ul>
                <router-link tag="li" :to="item.path" v-for="(item,index) in trendsList" :key="index" class="trends-item">
                    <img :src="item.img" class="trends-item-left" />
                    <div class="trends-item-right">
                        <mt-cell is-link :to="item.path" :title="item.title"></mt-cell>
                        <p>
                           {{item.info}}
                        </p>
                    </div>
                </router-link>
            </ul>
        </div>
    </div>
</template>
<script>
    import icon1 from '@/assets/images/icon/icon1.png'
    import icon2 from '@/assets/images/icon/icon2.png'
    import icon3 from '@/assets/images/icon/icon3.png'
    import icon4 from '@/assets/images/icon/icon4.png'
    import icon5 from '@/assets/images/icon/icon5.png'
    import icon6 from '@/assets/images/icon/icon6.png'
    import icon7 from '@/assets/images/icon/icon7.png'

   //import iconxmsb from '@/assets/images/icon/xmsb.png'
   import iconwywx from '@/assets/images/icon/wywx.png'
   import iconcdzl from '@/assets/images/icon/cdzl.png'
   import iconcsfu from '@/assets/images/icon/csfu.png'
   import iconflfu from '@/assets/images/icon/flfu.png'
   import icongszc from '@/assets/images/icon/gszc.png'  
   import iconjrfw from '@/assets/images/icon/jrfw.png' 
   import icontfgg from '@/assets/images/icon/tfgg.png'      
   import iconrsfw from '@/assets/images/icon/rsfw.png' 
   import iconzsyz from '@/assets/images/icon/zsyz.png' 
   import iconzscq from '@/assets/images/icon/zscq.png' 
   import iconqyrz from '@/assets/images/icon/qyrz.png' 
   import iconczjf from '@/assets/images/icon/czjf.png' 
import iconGroup14 from '@/assets/images/icon/Group14.png' 
import iconGroup15 from '@/assets/images/icon/Group15.png' 
import iconGroup17 from '@/assets/images/icon/Group17.png' 
    export default {
        name:'homePage',
        data(){
            return {
                parkServiceList:[
                    {
                        title:'物业报修',
                        icon:iconwywx,
                        path:'/second/equipmentRepair'
                    },
                    {
                        title:'投诉建议',
                        icon:iconGroup14,
                        path:'/second/active'
                    },{
                        title:'场地租赁',
                        icon:iconcdzl,
                        path:'#'
                    },{
                        title:'充值缴费',
                        icon:iconczjf,
                        path:'/second/review'
                    }
                ],

                serviceList:[
                    {
                        title:'企业入驻',
                        icon:iconqyrz,
                        path:'/second/chart'
                    },{
                        title:'园区企业',
                        icon:icon2,
                        path:'/second/active'
                    },{
                        title:'项目申报',
                        icon:icon7,
                        path:'/second/payment'
                    } ,
                    {
                        title:'投放广告',
                        icon:iconjrfw,
                        path:'/second/review'
                    },{
                        title:'园区企业',
                        icon:icon2,
                        path:'/second/active'
                    },{
                        title:'项目申报',
                        icon:icon7,
                        path:'/second/payment'
                    } ,
                    {
                        title:'投放广告',
                        icon:icon7,
                        path:'/second/review'
                    },
                    // {
                    //     title:'招商引资',
                    //     icon:iconzsyz,
                    //     path:'#'
                    // },
                    // {
                    //     title:'财税服务',
                    //     icon:iconcsfu,
                    //     path:'/second/payment'
                    // },
                    // {
                    //     title:'法律服务',
                    //     icon:iconflfu,
                    //     path:'/second/task'
                    // },{
                    //     title:'工商注册',
                    //     icon:icongszc,
                    //     path:'/second/pact'
                    // },
                    //{
                    //     title:'人事服务',
                    //     icon:iconrsfw,
                    //     path:'/second/payment'
                    // },
                    // {
                    //     title:'金融服务',
                    //     icon:icon6,
                    //     path:'/second/pact'
                    // },{
                    //     title:'知识产权',
                    //     icon:iconzscq,
                    //     path:'/second/payment'
                    // } ,{
                    //     title:'金融服务',
                    //     icon:icon6,
                    //     path:'/second/pact'
                    // }
                    {
                        title:'更多',
                        icon:iconGroup17,
                        path:'/second/payment'
                    }
                ],

                trendsList:[
                    {
                        img:'static/images/p4.png',
                        pid:'1',
                        path:'/second/active',
                        title:'西区LED显示屏已投放广告',
                        info:'西区LED显示屏已投放广告，到期时间：2018-09-31'
                    },
                    {
                        img:'static/images/p4.png',
                        pid:'1',
                        path:'/second/active',
                        title:'总经办-王杰',
                        info:'在建设工程实施过程中，应当坚持“百年大计，质量第一”的方针，坚持安全第一'
                    }
                ]
            }
        }
    }
</script>
<style>
.home-page-box .mint-swipe{
    height:4.533333rem;
}
.mint-swipe img{
    width: 100%;
}
.parkservice-box{
    background: #fff;
}
.parkservice-box>ul{
    overflow: hidden;
    width: 11rem;
    margin: 0 auto;
}
.parkservice-box>ul>li{
    float: left;
    width: 2.5rem;
    text-align: center;
    margin: .333333rem 0;
}
.parkservice-box>ul>li img{
    width: 1.626667rem;
    margin: 0 auto .2rem;
}
.parkservice-box>ul>li a{
    color:rgb(136, 130, 130);
    font-size: .32rem;
}

p {
    height: 0rem;
        width: 136px;
        color: #9b9b9b;
        text-align: center;
        display: inline-block;
}

.service-box{
    background: #fff;
    padding: .3rem 0;
}
.service-box>ul{
    overflow: hidden;
    width: 10rem;
    margin: 0 auto;
}
.service-box>ul>li{
    float: left;
    width: 2.5rem;
    text-align: center;
    margin: .333333rem 0;
}
.service-box>ul>li img{
    width: 1.226667rem;
    /* height:1.226667rem; */
    margin: 0 auto .2rem;
}
.service-box>ul>li a{
    color:rgb(136, 130, 130);
    font-size: .32rem;
}



.trends-box li:last-child{
    border: none;
}
.trends-item{
    overflow: hidden;
    width:9rem;
    margin: 0 auto;
    padding: .3rem 0;
    border-bottom: 1px solid #cccccc;
}
.trends-item-left{
    float: left;
    width: 2.666667rem;
    height: 2rem;
    border-radius: .2rem;
}
.trends-item-right{
    float: right;
    width: 5.893333rem;
    height: 2rem;
    position: relative;
}
.trends-item-right>p{
    position: absolute;
    bottom: 0;
    font-size: .32rem;
    height: .76rem;
    overflow: hidden;
}
.trends-item-right .mint-cell{
    background: transparent;
}
.trends-item-right .mint-cell-wrapper{
    background: transparent;
    font-size: .4rem;
    color:#000;
}
</style>

