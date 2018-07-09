<template>
    <div class="active-page-box"  v-switcher="{methods: switcher}">
             <!-- v-switcher -->
        <back-header title="活动公告" right="true" link="/second/build-active"></back-header>
        <mt-swipe :auto="3000">
            <mt-swipe-item>
                <img src="@/assets/images/swipe-1.png" alt="">
            </mt-swipe-item>
            <mt-swipe-item>
                <img src="@/assets/images/swipe-2.png" alt="">
            </mt-swipe-item>
            <mt-swipe-item>
                <img src="@/assets/images/swipe-1.png" alt="">
            </mt-swipe-item>
            <mt-swipe-item>
                <img src="@/assets/images/swipe-2.png" alt="">
            </mt-swipe-item>
        </mt-swipe>
        <div class="active-tips">
            <img src="@/assets/images/icon/tips.png" alt="">
            <div>为促进建设工地文明施工水平不断提高，提升园区城市环境，现进一步明确园区建设工程围栏的相关要求</div>
        </div>
        <div class="active-notice">
            <div v-for="(item,index) in noticeList" :key="index" class="active-notice-item">
                <div class="notice-item-left">
                    <p>{{item.info}}</p>
                    <p>{{item.title}}</p>
                </div>
                <img class="notice-item-right" :src="item.img" alt="">
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name:'activePage',
        data(){
            return {
                noticeList:[
                    {
                        img:'static/images/p4.png',
                        pid:'1',
                        path:'/second/active',
                        title:'总经办-王杰',
                        info:'关于进一步明确建筑工地施工围栏标准的相关通知'
                    },
                    {
                        img:'static/images/p5.png',
                        pid:'1',
                        path:'/second/active',
                        title:'总经办-王杰',
                        info:'关于进一步明确建筑工地施工围栏标准的相关通知'
                    },{
                        img:'static/images/p4.png',
                        pid:'1',
                        path:'/second/active',
                        title:'总经办-王杰',
                        info:'关于进一步明确建筑工地施工围栏标准的相关通知'
                    },{
                        img:'static/images/p5.png',
                        pid:'1',
                        path:'/second/active',
                        title:'总经办-王杰',
                        info:'关于进一步明确建筑工地施工围栏标准的相关通知'
                    },{
                        img:'static/images/p4.png',
                        pid:'1',
                        path:'/second/active',
                        title:'总经办-王杰',
                        info:'关于进一步明确建筑工地施工围栏标准的相关通知'
                    },
                    {
                        img:'static/images/p5.png',
                        pid:'1',
                        path:'/second/active',
                        title:'总经办-王杰',
                        info:'关于进一步明确建筑工地施工围栏标准的相关通知'
                    },{
                        img:'static/images/p4.png',
                        pid:'1',
                        path:'/second/active',
                        title:'总经办-王杰',
                        info:'关于进一步明确建筑工地施工围栏标准的相关通知'
                    },{
                        img:'static/images/p5.png',
                        pid:'1',
                        path:'/second/active',
                        title:'总经办-王杰',
                        info:'关于进一步明确建筑工地施工围栏标准的相关通知'
                    }
                ]
            }
        },
        methods: {
            switcher()
            {
                console.log("binding.def.name");
                this.$router.goBack()






            },
        },

        directives: {
            switcher: {              
                bind: function(element, binding) {
                    var isTouchMove, startTx, startTy
                  
                    var value = binding.value; // 传递给指令的
                    element.handler = function () { // This directive.handler
                        value.methods.call(this, value);
                    };

                    console.log(binding.def.name);console.log(binding.def.name);

                    element.addEventListener('touchstart', function(e) {
                        var touches = e.touches[0]
                        startTx = touches.clientX
                        startTy = touches.clientY
                        isTouchMove = false;
                    }, false);
                    element.addEventListener('touchmove', function(e) {
                        var touches = e.changedTouches[0],
                            endTx = touches.clientX,
                            endTy = touches.clientY,
                            distanceX = startTx - endTx,
                            distanceY = startTy - endTy;
                        if (distanceX < 0) { //右滑
                            if (Math.abs(distanceX) >= Math.abs(distanceY)) {
                                if (Math.abs(distanceX) > 20) {
                                    element.style.transition = "0.3s"
                                    element.style.marginLeft = 0 + "px"
                                     isTouchMove = true
                                     console.log("wlq11110")
                                }
                            }
                        } else { //左滑
                            if ( Math.abs(distanceX) >= Math.abs(distanceY)) {
                                if (distanceX < 156 && distanceX > 20) {
                                    e.preventDefault()
                                    // element.style.transition = "0s"
                                    // element.style.marginLeft = -distanceX + "px"
                                   // isTouchMove = true
                                }
                            }
                        }
                        // e.preventDefault()
                    }, false);
                    element.addEventListener('touchend', function(e) {
                        if (!isTouchMove) {
                            return;
                        }
                        console.log("wlq21111")
                        var touches = e.changedTouches[0],
                            endTx = touches.clientX,
                            endTy = touches.clientY,
                            distanceX = startTx - endTx,
                            distanceY = startTy - endTy,
                            isSwipe = false
                               console.log(Math.abs(distanceX))
                                console.log(Math.abs(distanceY))
                        if (Math.abs(distanceX) >= Math.abs(distanceY)) {
                            // if (distanceX < 0) {
                            //     return;
                            // }
                            console.log(distanceX)
                            if (Math.abs(distanceX) < 60) {
                                isSwipe = true
                                // element.style.transition = "0.3s"
                                // element.style.marginLeft = 0 + "px"
                                console.log("wlq1111")
                            } else {
                                // element.style.transition = "0.3s"
                                // element.style.marginLeft = "-156px"
                                console.log("wlq2222")
                                 element.handler()
                            }
                        }
                    }, false);
                }
            }
        }  
    }
</script>
<style>
.active-page-box .mint-swipe{
    height:4.533333rem;
}
.mint-swipe img{
    width: 100%;
}
.active-notice-item{
    overflow: hidden;
    padding: .2rem 0.6rem;
    width:10rem;
    background: #fff;
    margin-bottom: .2rem;
}
.notice-item-left{
    float: left;
    position: relative;
    height: 2.4rem;
}
.notice-item-left>p:first-child{
    font-size: .4rem;
    color:#000;
    width:4.6rem;
}
.notice-item-left>p:last-child{
    font-size: .293333rem;
    width:4.6rem;
    position: absolute;
    bottom: 0;
    color:#9b9b9b;
}
.notice-item-right{
    float:right;
    width: 3.333333rem;
    height: 2.4rem;
}
.active-tips{
    width: 8.8rem;
    margin: .3rem auto;
    background: #fff;
    padding: .2rem;
}
.active-tips img{
    display: inline-block;
    width: .6rem;
    height: .6rem;
}
.active-tips div{
    width: 8rem;
    display: inline-block;
    font-size: .293333rem;
    color:#4a4a4a;
}
</style>

