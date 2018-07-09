<template>
    <div class="msg-page-box">
        <mt-header title="消息"></mt-header>
        <div class="msg-box">
            <ul>
                <router-link tag="li" :to="item.path" v-for="(item,index) in trendsList" :key="index" class="msg-trends-item">
                    <img :src="item.img" class="msg-trends-item-left" />
                    <div class="msg-trends-item-right">
                        <mt-cell is-link :to="item.path" :title="item.title">{{item.time}}</mt-cell>
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
    export default {
        name:'msgPage',

        data(){
            return {
                trendsList:[
                     {
                        img:'static/images/Group11.png',
                        pid:'1',
                        path:'/second/active',
                        title:'园区助手',
                        time:"2018-01-21",
                        info:'西区LED显示屏已投放广告'
                    },
                    {
                        img:'static/images/Group12.png',
                        pid:'1',
                        path:'/second/active',
                        title:'订单消息',
                        time:"2018-01-21",
                        info:'在建设工程实施过程中，应当坚持“百年大计，质量第一”的方针，坚持安全第一'
                    },
                    {
                        img:'static/images/Group13.png',
                        pid:'1',
                        path:'/second/active',
                        title:'办公消息',
                        time:"2018-01-21",
                        info:'西区LED显示屏已投放广告，到期时间：2018-09-31'
                    },
                    {
                        img:'static/images/Group14.png',
                        pid:'1',
                        path:'/second/active',
                        title:'我的预定',
                        time:"2018-01-21",
                        info:'在建设工程实施过程中，应当坚持“百年大计，质量第一”的方针，坚持安全第一'
                    },
                    {
                        img:'static/images/Group15.png',
                        pid:'1',
                        path:'/second/active',
                        title:'报修进度',
                        time:"2018-01-21",
                        info:'西区LED显示屏已投放广告，到期时间：2018-09-31'
                    },
                    {
                        img:'static/images/Group16.png',
                        pid:'1',
                        path:'/second/active',
                        title:'报名通知',
                        time:"2018-01-21",
                        info:'在建设工程实施过程中，应当坚持“百年大计，质量第一”的方针，坚持安全第一'
                    }
                ]
            }
        }
    }
</script>
<style>
.msg-ctn{
    margin-top:.5rem; 
    overflow: hidden;
}
.user-row>h5{
    font-size:.4rem;
    padding: .2rem .5rem;
    background: #f6f6f6;
}
.user-row{
    background-color: #ffffff;
    margin: .6rem 0;
}
.user-row img{
    display: inline-block;
    width: .266667rem;
    margin: 0 .2rem;
}
.user-row .phone{
    width: auto;
    height:.533333rem;
    margin-right: .36rem;
}
.user-row .mint-cell {
    width: 9.2rem;
    height: 1.2rem;
    line-height: 1.2rem;
    margin-left: .5rem;
    background: transparent !important;
}
.user-row .mint-cell-wrapper{
    height: 1.2rem;
    line-height: 1.2rem;
    background: transparent;
}
.user-row .mint-cell-text{
    font-size: .36rem;
}
.msg-box
{
   background: #fff;
}
.msg-box li:last-child{
    border: none;
}
.msg-trends-item{
    overflow: hidden;
    width:9rem;
    margin: 0 auto;
    padding: .2rem 0;
    border-bottom: 1px solid #cccccc;
}
.msg-trends-item-left{
    float: left;
    width: 1.5rem;
    height: 1.5rem;
    border-radius: .2rem;
}
.msg-trends-item-right{
    float: right;
    width: 6.893333rem;
    height: 1.5rem;
    position: relative;
    
}
.msg-trends-item-right>p{
    position: absolute;
    bottom: 0;
    width: 5.893333rem;
    font-size: .32rem;
    height: .56rem;
    overflow: hidden;
}
.msg-trends-item-right .mint-cell{
    background: transparent;
}
.msg-item-right .mint-cell-wrapper{
    background: transparent;
    font-size: .4rem;
    color:#000;
}

</style>

