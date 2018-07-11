<template>
  <div class="active-page-box">
    <!-- v-switcher -->
    <back-header title="场地详情"></back-header>
    <div class="rental-banner">
      <img src="@/assets/images/icon/Bitmap5.png" alt="">
    </div>
    <div class="active-tips">
      <div class="place-name">恒大绿洲E座青城驿站瑜伽馆…</div>
      <div class="palce-addr">
        恒大绿洲E座 东城
      </div>
    </div>
    <div class="rental-intro">
      <div class="intro-item">租金<span class="money">￥ 106.00元/天</span></div>
      <div class="intro-item">
        <div class="type-content">户型<span>1室3厅</span></div>
        <div class="type-content">面积<span>300 m/2</span></div>
      </div>
      <div class="intro-item">
        <div class="type-content">楼盘<span>503氧层</span></div>
        <div class="type-content">朝向<span>南</span></div>
      </div>
      <div class="intro-item">
        <div class="type-content">装修<span>精装修</span></div>
        <div class="type-content">发布时间<span>今日发布</span></div>
      </div>
      <div class="intro-item item-bottom">
        <div class="type-content">可租用时间<span>立即租用</span></div>
      </div>
    </div>
    <div class="map-location">
      <div class="map-tit">地图位置</div>
      <div id="baiduMap"></div>
    </div>
    <div class="bottom-bar">
      <div class="private-chat">
        <div>
          <img src="@/assets/images/tx/sms.png">
          <span>私聊</span>
        </div>
      </div>
      <div class="appointment">预约看房</div>
    </div>
  </div>
</template>
<script>
  import BMap from 'BMap'
  import BMapLib from 'BMapLib'
  export default {
    name: 'placeRentalPage',
    data() {
      return {
       
      }
    },
    mounted () {
      this.baiduMap()
    },
    methods: {
      switcher() {
        console.log("binding.def.name");
        this.$router.goBack()
      },
      baiduMap(){
        var map = new BMap.Map("baiduMap");          // 创建地图实例  
        var point = new BMap.Point(111.742579, 40.818675)
        map.centerAndZoom(point, 12)
        var marker = new BMap.Marker(point)  // 创建标注
        map.addOverlay(marker)              // 将标注添加到地图中
      }
    },
  }
</script>
<style>
  .active-page-box .mint-swipe {
    height: 4.533333rem;
  }

  .mint-swipe img {
    width: 100%;
  }

  .active-notice-item {
    overflow: hidden;
    padding: .2rem 0.6rem;
    width: 10rem;
    background: #fff;
    margin-bottom: .2rem;
  }

  .notice-item-left {
    float: left;
    position: relative;
    height: 2.4rem;
  }

  .notice-item-left > p:first-child {
    font-size: .4rem;
    color: #000;
    width: 4.6rem;
  }

  .notice-item-left > p:last-child {
    font-size: .293333rem;
    width: 4.6rem;
    position: absolute;
    bottom: 0;
    color: #9b9b9b;
  }

  .notice-item-right {
    float: right;
    width: 3.333333rem;
    height: 2.4rem;
  }

  .active-tips {
    width: 100%;
    height: 1.306667rem;
    background: #fff;
    padding: 0.4rem 0 0 .4rem;
    margin-bottom: 0.266667rem;
  }

  .rental-banner img {
    width: 100%;
    height: 5.333333rem;
  }

  .place-name {
    font-size: 0.426667rem;
    font-weight: 800;
    line-height: 0.6rem;
    margin-bottom: 0.133333rem;
  }

  .palce-addr {
    font-size: 0.32rem;
    color: #9B9B9B;
    line-height: 0.44rem;
  }
  .rental-intro{
    height:5.333333rem;
    padding:0 0.4rem;
    background:#ffffff;
    margin-bottom:0.266667rem;
  }
  .intro-item{
      height:1.066667rem;
      display:flex;
      color:#9B9B9B;
      font-size:0.346667rem;
      align-items:center;
      font-weight:500;
      width:100%;
  }
  .money{
    color:#FD2D00;
    margin-left:0.533333rem;
  }
  .type-content{
    width:50%;
  }
  .type-content span{
    margin-left:0.533333rem;
    color:#000000;
  }
  .item-bottom{
    border-top:1px solid #dadada;
  }
  .map-location{
    padding:0 0.4rem;
    background:#ffffff;
    margin-bottom:1.333333rem;
    height:5.68rem;
  }
  .map-tit{
    display:flex;
    align-items:center;
    height:1.173333rem;
    font-weight:0.6rem;
    font-weight:900;
  }
  #baiduMap{
    height:4.506667rem;
    background:#ccc;
  }
  .bottom-bar{
    width:100%;
    height:1.333333rem;
    position:fixed;
    bottom:0;
    display:flex;
    flex-wrap:no-wrap;

  }
  .private-chat{
    width:2.933333rem;
    background:#FD2D00;
    margin-right:0.133333rem;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-wrap:wrap;
    color:#ffffff;

  }
  .private-chat img, .private-chat span{
    display:block;
  }
  .appointment{
    width:7.0rem;
    background:#FD2D00;
    display:flex;
    justify-content:center;
    align-items:center;
    font-size:0.293333rem;
    color:#ffffff;
  }
</style>




