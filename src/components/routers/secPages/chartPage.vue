<template>
    <!--<div class="chart-page-box">-->
        <!--<pie-chart :data="[10,20,60]" :colors="['yellow','pink','black']" :labels="['1','2','3']"></pie-chart>-->
    <!--</div>-->
  <div class="build-active-box chart-page">
    <back-header title="企业入驻"></back-header>
    <van-tabs type="card" style="margin-top:15px; margin-bottom: 5px;">
      <van-tab v-for="item in dateList" :title="item.desc" :key="item.month"></van-tab>
    </van-tabs>
    <canvas id="mountNode"></canvas>
    <canvas id="mountMap"></canvas>
    <van-row>
      <van-col span="12">
        <canvas id="mountCircleMap1"></canvas>
      </van-col>
      <van-col span="12">
        <canvas id="mountCircleMap2"></canvas>
      </van-col>
    </van-row>
  </div>
</template>
<script>
import { Tab, Tabs,Row, Col } from 'vant';
import F2 from '@antv/f2/lib';
import _ from 'lodash/core';
let chart = null;
let chart1 = null;
function initChart() {
  chart = new F2.Chart({
    id: 'mountNode',
    width: document.getElementById('app').offsetWidth,
    height: 200
  });
  chart.source(chartData);
  chart.axis(false);
  // chart.scale('date', {
  //   type: 'timeCat',
  //   tickCount: 3
  // });
  // chart.scale('value', {
  //   tickCount: 5
  // });
  chart.legend({
    align: 'center'
  });
  // chart.axis('date', {
  //   label: function label(text, index, total) {
  //     // 只显示每一年的第一天
  //     let textCfg = {};
  //     if (index === 0) {
  //       textCfg.textAlign = 'left';
  //     } else if (index === total - 1) {
  //       textCfg.textAlign = 'right';
  //     }
  //     return textCfg;
  //   }
  // });
  chart.tooltip({
    custom: true, // 自定义 tooltip 内容框
    onChange: function onChange(obj) {
      let legend = chart.get('legendController').legends.top[0];
      let tooltipItems = obj.items;
      let legendItems = legend.items;
      let map = {};
      legendItems.map(function(item) {
        map[item.name] = _.clone(item);
      });
      tooltipItems.map(function(item) {
        let name = item.name;
        let value = item.value;
        if (map[name]) {
          map[name].value = value;
        }
      });
      legend.setItems(_.values(map));
    },
    onHide: function onHide() {
      let legend = chart.get('legendController').legends.top[0];
      legend.setItems(chart.getLegendItems().country);
    }
  });
  chart.line().position('date*value').color('type');
  chart.render();
}
const chartData = [{"date":"2010-01-10","type":"能源","value":99.9},{"date":"2010-01-10","type":"金属","value":96.6},{"date":"2010-01-10","type":"农副产品","value":96.2},{"date":"2010-02-10","type":"能源","value":96.7},{"date":"2010-02-10","type":"金属","value":91.1},{"date":"2010-02-10","type":"农副产品","value":93.4},{"date":"2010-03-10","type":"能源","value":100.2},{"date":"2010-03-10","type":"金属","value":99.4},{"date":"2010-03-10","type":"农副产品","value":91.7},{"date":"2010-04-10","type":"能源","value":104.7},{"date":"2010-04-10","type":"金属","value":108.1},{"date":"2010-04-10","type":"农副产品","value":93.1},{"date":"2010-05-10","type":"能源","value":95.6},{"date":"2010-05-10","type":"金属","value":96},{"date":"2010-05-10","type":"农副产品","value":92.3},{"date":"2010-06-10","type":"能源","value":95.6},{"date":"2010-06-10","type":"金属","value":89.1},{"date":"2010-06-10","type":"农副产品","value":92.5},{"date":"2010-07-10","type":"能源","value":95.3},{"date":"2010-07-10","type":"金属","value":89.2},{"date":"2010-07-10","type":"农副产品","value":95.7},{"date":"2010-08-10","type":"能源","value":96.1},{"date":"2010-08-10","type":"金属","value":97.6},{"date":"2010-08-10","type":"农副产品","value":99.9},{"date":"2010-09-10","type":"能源","value":96.1},{"date":"2010-09-10","type":"金属","value":100.6},{"date":"2010-09-10","type":"农副产品","value":103.8},{"date":"2010-10-10","type":"能源","value":101.6},{"date":"2010-10-10","type":"金属","value":108.3},{"date":"2010-10-10","type":"农副产品","value":108.9},{"date":"2010-11-10","type":"能源","value":105.6},{"date":"2010-11-10","type":"金属","value":109.4},{"date":"2010-11-10","type":"农副产品","value":113.7},{"date":"2010-12-10","type":"能源","value":112.7},{"date":"2010-12-10","type":"金属","value":114.5},{"date":"2010-12-10","type":"农副产品","value":118.8},{"date":"2011-01-11","type":"能源","value":117},{"date":"2011-01-11","type":"金属","value":120.8},{"date":"2011-01-11","type":"农副产品","value":124.3},{"date":"2011-02-11","type":"能源","value":121.8},{"date":"2011-02-11","type":"金属","value":125.8},{"date":"2011-02-11","type":"农副产品","value":130.1},{"date":"2011-03-11","type":"能源","value":133.1},{"date":"2011-03-11","type":"金属","value":121.4},{"date":"2011-03-11","type":"农副产品","value":125.8},{"date":"2011-04-11","type":"能源","value":141.9},{"date":"2011-04-11","type":"金属","value":124.3},{"date":"2011-04-11","type":"农副产品","value":127.4},{"date":"2011-05-11","type":"能源","value":133.1},{"date":"2011-05-11","type":"金属","value":118.5},{"date":"2011-05-11","type":"农副产品","value":123.9},{"date":"2011-06-11","type":"能源","value":131.2},{"date":"2011-06-11","type":"金属","value":117},{"date":"2011-06-11","type":"农副产品","value":123.2},{"date":"2011-07-11","type":"能源","value":133.7},{"date":"2011-07-11","type":"金属","value":121},{"date":"2011-07-11","type":"农副产品","value":122.6},{"date":"2011-08-11","type":"能源","value":125.2},{"date":"2011-08-11","type":"金属","value":114.8},{"date":"2011-08-11","type":"农副产品","value":123.2},{"date":"2011-09-11","type":"能源","value":125.5},{"date":"2011-09-11","type":"金属","value":109.1},{"date":"2011-09-11","type":"农副产品","value":121.6},{"date":"2011-10-11","type":"能源","value":124.2},{"date":"2011-10-11","type":"金属","value":98.4},{"date":"2011-10-11","type":"农副产品","value":115.6},{"date":"2011-11-11","type":"能源","value":129.4},{"date":"2011-11-11","type":"金属","value":95.8},{"date":"2011-11-11","type":"农副产品","value":112.2},{"date":"2011-12-11","type":"能源","value":128},{"date":"2011-12-11","type":"金属","value":95.1},{"date":"2011-12-11","type":"农副产品","value":109.1},{"date":"2012-01-12","type":"能源","value":130.6},{"date":"2012-01-12","type":"金属","value":100.5},{"date":"2012-01-12","type":"农副产品","value":111},{"date":"2012-02-12","type":"能源","value":136.2},{"date":"2012-02-12","type":"金属","value":104},{"date":"2012-02-12","type":"农副产品","value":113.4},{"date":"2012-03-12","type":"能源","value":141.2},{"date":"2012-03-12","type":"金属","value":103.5},{"date":"2012-03-12","type":"农副产品","value":114.6},{"date":"2012-04-12","type":"能源","value":136.1},{"date":"2012-04-12","type":"金属","value":101},{"date":"2012-04-12","type":"农副产品","value":114.8},{"date":"2012-05-12","type":"能源","value":126.3},{"date":"2012-05-12","type":"金属","value":96.6},{"date":"2012-05-12","type":"农副产品","value":113.1},{"date":"2012-06-12","type":"能源","value":111.5},{"date":"2012-06-12","type":"金属","value":91.6},{"date":"2012-06-12","type":"农副产品","value":110.7},{"date":"2012-07-12","type":"能源","value":118.6},{"date":"2012-07-12","type":"金属","value":91.2},{"date":"2012-07-12","type":"农副产品","value":118.7},{"date":"2012-08-12","type":"能源","value":127.7},{"date":"2012-08-12","type":"金属","value":87.7},{"date":"2012-08-12","type":"农副产品","value":118.6},{"date":"2012-09-12","type":"能源","value":128.5},{"date":"2012-09-12","type":"金属","value":93.6},{"date":"2012-09-12","type":"农副产品","value":118.5},{"date":"2012-10-12","type":"能源","value":125.9},{"date":"2012-10-12","type":"金属","value":94},{"date":"2012-10-12","type":"农副产品","value":115.2},{"date":"2012-11-12","type":"能源","value":124.1},{"date":"2012-11-12","type":"金属","value":92.4},{"date":"2012-11-12","type":"农副产品","value":113},{"date":"2012-12-12","type":"能源","value":124.2},{"date":"2012-12-12","type":"金属","value":97.4},{"date":"2012-12-12","type":"农副产品","value":112.4},{"date":"2013-01-13","type":"能源","value":128.4},{"date":"2013-01-13","type":"金属","value":100.3},{"date":"2013-01-13","type":"农副产品","value":111.5},{"date":"2013-02-13","type":"能源","value":131.2},{"date":"2013-02-13","type":"金属","value":101.3},{"date":"2013-02-13","type":"农副产品","value":110.4},{"date":"2013-03-13","type":"能源","value":126.2},{"date":"2013-03-13","type":"金属","value":94.5},{"date":"2013-03-13","type":"农副产品","value":108.4},{"date":"2013-04-13","type":"能源","value":123.1},{"date":"2013-04-13","type":"金属","value":90.7},{"date":"2013-04-13","type":"农副产品","value":106},{"date":"2013-05-13","type":"能源","value":123.2},{"date":"2013-05-13","type":"金属","value":88.3},{"date":"2013-05-13","type":"农副产品","value":108.1},{"date":"2013-06-13","type":"能源","value":122.9},{"date":"2013-06-13","type":"金属","value":85.4},{"date":"2013-06-13","type":"农副产品","value":107.7},{"date":"2013-07-13","type":"能源","value":128.1},{"date":"2013-07-13","type":"金属","value":85.7},{"date":"2013-07-13","type":"农副产品","value":105.6},{"date":"2013-08-13","type":"能源","value":130.9},{"date":"2013-08-13","type":"金属","value":89.6},{"date":"2013-08-13","type":"农副产品","value":103.8},{"date":"2013-09-13","type":"能源","value":131.6},{"date":"2013-09-13","type":"金属","value":88.2},{"date":"2013-09-13","type":"农副产品","value":103.6},{"date":"2013-10-13","type":"能源","value":128.3},{"date":"2013-10-13","type":"金属","value":89.1},{"date":"2013-10-13","type":"农副产品","value":104},{"date":"2013-11-13","type":"能源","value":125.4},{"date":"2013-11-13","type":"金属","value":87.8},{"date":"2013-11-13","type":"农副产品","value":103.3},{"date":"2013-12-13","type":"能源","value":129.5},{"date":"2013-12-13","type":"金属","value":88.7},{"date":"2013-12-13","type":"农副产品","value":103.4},{"date":"2014-01-14","type":"能源","value":126.4},{"date":"2014-01-14","type":"金属","value":88.1},{"date":"2014-01-14","type":"农副产品","value":102.3},{"date":"2014-02-14","type":"能源","value":130.6},{"date":"2014-02-14","type":"金属","value":86.2},{"date":"2014-02-14","type":"农副产品","value":106.1},{"date":"2014-03-14","type":"能源","value":127.9},{"date":"2014-03-14","type":"金属","value":83},{"date":"2014-03-14","type":"农副产品","value":108},{"date":"2014-04-14","type":"能源","value":128.4},{"date":"2014-04-14","type":"金属","value":85.5},{"date":"2014-04-14","type":"农副产品","value":107.2},{"date":"2014-05-14","type":"能源","value":129},{"date":"2014-05-14","type":"金属","value":84.8},{"date":"2014-05-14","type":"农副产品","value":107.2},{"date":"2014-06-14","type":"能源","value":131.5},{"date":"2014-06-14","type":"金属","value":84.4},{"date":"2014-06-14","type":"农副产品","value":105.2},{"date":"2014-07-14","type":"能源","value":126.9},{"date":"2014-07-14","type":"金属","value":88.2},{"date":"2014-07-14","type":"农副产品","value":103.2},{"date":"2014-08-14","type":"能源","value":121.2},{"date":"2014-08-14","type":"金属","value":88},{"date":"2014-08-14","type":"农副产品","value":102.1},{"date":"2014-09-14","type":"能源","value":116.6},{"date":"2014-09-14","type":"金属","value":85.1},{"date":"2014-09-14","type":"农副产品","value":98.4},{"date":"2014-10-14","type":"能源","value":106.2},{"date":"2014-10-14","type":"金属","value":82.6},{"date":"2014-10-14","type":"农副产品","value":98},{"date":"2014-11-14","type":"能源","value":96.4},{"date":"2014-11-14","type":"金属","value":82.9},{"date":"2014-11-14","type":"农副产品","value":98.3},{"date":"2014-12-14","type":"能源","value":78.6},{"date":"2014-12-14","type":"金属","value":78.8},{"date":"2014-12-14","type":"农副产品","value":96.8},{"date":"2015-01-15","type":"能源","value":63.1},{"date":"2015-01-15","type":"金属","value":73.9},{"date":"2015-01-15","type":"农副产品","value":94.7},{"date":"2015-02-15","type":"能源","value":70.4},{"date":"2015-02-15","type":"金属","value":72.4},{"date":"2015-02-15","type":"农副产品","value":93.4},{"date":"2015-03-15","type":"能源","value":68.1},{"date":"2015-03-15","type":"金属","value":71.8},{"date":"2015-03-15","type":"农副产品","value":90.7},{"date":"2015-04-15","type":"能源","value":72.2},{"date":"2015-04-15","type":"金属","value":72.1},{"date":"2015-04-15","type":"农副产品","value":90.4},{"date":"2015-05-15","type":"能源","value":77.8},{"date":"2015-05-15","type":"金属","value":74.6},{"date":"2015-05-15","type":"农副产品","value":90.1},{"date":"2015-06-15","type":"能源","value":76.3},{"date":"2015-06-15","type":"金属","value":70.3},{"date":"2015-06-15","type":"农副产品","value":90.2},{"date":"2015-07-15","type":"能源","value":68.8},{"date":"2015-07-15","type":"金属","value":65.7},{"date":"2015-07-15","type":"农副产品","value":90.8},{"date":"2015-08-15","type":"能源","value":59.5},{"date":"2015-08-15","type":"金属","value":62.7},{"date":"2015-08-15","type":"农副产品","value":87.5},{"date":"2015-09-15","type":"能源","value":59.7},{"date":"2015-09-15","type":"金属","value":63.4},{"date":"2015-09-15","type":"农副产品","value":85.8},{"date":"2015-10-15","type":"能源","value":59.7},{"date":"2015-10-15","type":"金属","value":62.2},{"date":"2015-10-15","type":"农副产品","value":86.8},{"date":"2015-11-15","type":"能源","value":55.2},{"date":"2015-11-15","type":"金属","value":57.8},{"date":"2015-11-15","type":"农副产品","value":85.7},{"date":"2015-12-15","type":"能源","value":47.8},{"date":"2015-12-15","type":"金属","value":56.3},{"date":"2015-12-15","type":"农副产品","value":85.4},{"date":"2016-01-16","type":"能源","value":40.5},{"date":"2016-01-16","type":"金属","value":55.2},{"date":"2016-01-16","type":"农副产品","value":83.5},{"date":"2016-02-16","type":"能源","value":41.2},{"date":"2016-02-16","type":"金属","value":57.7},{"date":"2016-02-16","type":"农副产品","value":84.2},{"date":"2016-03-16","type":"能源","value":47.3},{"date":"2016-03-16","type":"金属","value":61.2},{"date":"2016-03-16","type":"农副产品","value":85.9},{"date":"2016-04-16","type":"能源","value":51.1},{"date":"2016-04-16","type":"金属","value":62},{"date":"2016-04-16","type":"农副产品","value":88.3},{"date":"2016-05-16","type":"能源","value":56.6},{"date":"2016-05-16","type":"金属","value":60},{"date":"2016-05-16","type":"农副产品","value":91.1},{"date":"2016-06-16","type":"能源","value":59.4},{"date":"2016-06-16","type":"金属","value":60.3},{"date":"2016-06-16","type":"农副产品","value":93.8},{"date":"2016-07-16","type":"能源","value":56.6},{"date":"2016-07-16","type":"金属","value":63.5},{"date":"2016-07-16","type":"农副产品","value":91.9},{"date":"2016-08-16","type":"能源","value":57.6},{"date":"2016-08-16","type":"金属","value":63.8},{"date":"2016-08-16","type":"农副产品","value":90.9},{"date":"2016-09-16","type":"能源","value":58.2},{"date":"2016-09-16","type":"金属","value":62.8},{"date":"2016-09-16","type":"农副产品","value":90.5},{"date":"2016-10-16","type":"能源","value":63.7},{"date":"2016-10-16","type":"金属","value":64.1},{"date":"2016-10-16","type":"农副产品","value":89.5},{"date":"2016-11-16","type":"能源","value":59.4},{"date":"2016-11-16","type":"金属","value":71.5},{"date":"2016-11-16","type":"农副产品","value":89.9},{"date":"2016-12-16","type":"能源","value":68.4},{"date":"2016-12-16","type":"金属","value":73.5},{"date":"2016-12-16","type":"农副产品","value":89.4},{"date":"2017-01-17","type":"能源","value":68.9},{"date":"2017-01-17","type":"金属","value":74.5},{"date":"2017-01-17","type":"农副产品","value":91.3},{"date":"2017-02-17","type":"能源","value":69.4},{"date":"2017-02-17","type":"金属","value":77.9},{"date":"2017-02-17","type":"农副产品","value":91.3},{"date":"2017-03-17","type":"能源","value":65.3},{"date":"2017-03-17","type":"金属","value":77.3},{"date":"2017-03-17","type":"农副产品","value":89.2},{"date":"2017-04-17","type":"能源","value":67.1},{"date":"2017-04-17","type":"金属","value":74},{"date":"2017-04-17","type":"农副产品","value":87.7},{"date":"2017-05-17","type":"能源","value":64.3},{"date":"2017-05-17","type":"金属","value":72.2},{"date":"2017-05-17","type":"农副产品","value":88.9},{"date":"2017-06-17","type":"能源","value":60.4},{"date":"2017-06-17","type":"金属","value":71.7},{"date":"2017-06-17","type":"农副产品","value":87.4},{"date":"2017-07-17","type":"能源","value":62.3},{"date":"2017-07-17","type":"金属","value":75.4},{"date":"2017-07-17","type":"农副产品","value":88.1},{"date":"2017-08-17","type":"能源","value":65},{"date":"2017-08-17","type":"金属","value":81.6},{"date":"2017-08-17","type":"农副产品","value":86.5},{"date":"2017-09-17","type":"能源","value":68.5},{"date":"2017-09-17","type":"金属","value":82.7},{"date":"2017-09-17","type":"农副产品","value":87.7}];

const dataMap =  [
  {
    memo: '债券资产',
  percent: 43.76,
    ratio: 0.1,
  const: 'const'
}, {
    memo: '其他资产',
  percent: 22.11,
    ratio: 0.5,
  const: 'const'
}, {
    memo: '股票资产',
  percent: 32.20,
    ratio: 0.05,
  const: 'const'
}, {
    memo: '现金资产',
  percent: 1.93,
    ratio: 0.15,
  const: 'const'
}];

function initMap() {
  var colorMap = {
    '债券资产': '#1890FF',
    '其他资产': '#2FC25B',
    '股票资产': '#FACC14',
    '现金资产': '#F04864'
  };
  // 设置图例项的内容
  var legendItems = [];
  dataMap.map(function(obj) {
    var item = {
      name: obj.memo,
      value: '    ' + obj.percent.toFixed(2) + '%',
      marker: {
        symbol: 'square',
        fill: colorMap[obj.memo],
        radius: 2
      }
    };
    legendItems.push(item);
  });
  chart1 = new F2.Chart({
    id: 'mountMap',
    width: document.getElementById('app').offsetWidth,
    height: 200
  });
  chart1.source(dataMap, {
    percent: {
      formatter: function formatter(val) {
        return val * 100 + '%';
      }
    }
  });

  chart1.legend({
    position: 'right',
    custom: true,
    items: legendItems,
    nameStyle: {
      fill: '#808080'
    }, // 图例项 key 值文本样式
    valueStyle: {
      fill: '#333',
      fontWeight: 'bold' // 图例项 value 值文本样式
    },
    clickable: false
  });
  chart1.tooltip(false);
  chart1.coord('polar', {
    transposed: true,
    radius: 0.6
  });
  chart1.axis(false);
  chart1.interval().position('const*percent').color('memo', function(val) {
    return colorMap[val];
  }).adjust('stack').style({
    lineWidth: 1,
    stroke: '#fff',
    lineJoin: 'round',
    lineCap: 'round'
  }).animate({
    appear: {
      duration: 1200,
      easing: 'bounceOut'
    }
  });
  chart1.render();
  drawLabelForMap(chart1,dataMap);
}

function drawLabelForMap(chart,data) {
  // 开始绘制文本
  var ANCHOR_OFFSET = 5; // 锚点偏移量
  var OFFSET = 18; // 连接线拐弯点偏移量
  var APPEND_OFFSET = 30; // 文本同 canvas 四边的偏移值
  var coord = chart.get('coord'); // 获取坐标系对象
  var center = coord.center; // 极坐标圆心坐标
  var r = coord.circleRadius; // 极坐标半径
  var canvas = chart.get('canvas'); // 获取 canvas 对象
  var canvasWidth = chart.get('width') - 110; // 获取 canvas 的宽度

  var drawnLabels = []; // 用于存储被绘制的文本图形对象
  var labelGroup = canvas.addGroup(); // 用于存储文本以及文本连接线

// 判断两个矩形是否相交
  function _isOverlap(label1, label2) {
    var label1BBox = label1.getBBox();
    var label2BBox = label2.getBBox();
    return Math.max(label1BBox.minX, label2BBox.minX) <= Math.min(label1BBox.maxX, label2BBox.minX) && Math.max(label1BBox.minY, label2BBox.minY) <= Math.min(label1BBox.maxY, label2BBox.maxY);
  }

  function _getEndPoint(center, angle, r) {
    return {
      x: center.x + r * Math.cos(angle),
      y: center.y + r * Math.sin(angle)
    };
  }

// 绘制文本连接线
  function _drawLabelLine(label, labelGroup) {
    var _anchor = label._anchor,
      _router = label._router,
      fill = label.fill,
      y = label.y,
      _side = label._side;

    var lastPoint = {
      x: _side === 'left' ? APPEND_OFFSET : canvasWidth - APPEND_OFFSET,
      y: y
    };

    // 绘制锚点
    labelGroup.addShape('Circle', {
      attrs: {
        x: _anchor.x,
        y: _anchor.y,
        r: 2,
        fill: fill
      }
    });

    // 绘制文本连接线
    labelGroup.addShape('Polyline', {
      attrs: {
        points: [_anchor, _router, lastPoint],
        lineWidth: 1,
        stroke: fill
      }
    });
  }

// 绘制文本
  function _drawLabel(label) {
    var _data = label._data,
      y = label.y,
      _side = label._side;

    var text = new F2.G.Shape.Text({
      attrs: {
        x: _side === 'left' ? APPEND_OFFSET : canvasWidth - APPEND_OFFSET,
        y: y,
        fontSize: 12, // 字体大小
        fill: '#808080',
        text:  _data.memo + '\n' + _data.percent.toFixed(2),
        textBaseline: 'middle',
        textAlign: _side === 'left' ? 'left' : 'right',
        lineHeight: 16
      },
      origin: _data // 存储原始数据
    });
    return text;
  }

// 查找被点击的 label
  function _findClickedLabel(point) {
    var clickedShape = void 0;
    for (var i = 0, len = drawnLabels.length; i < len; i++) {
      var shape = drawnLabels[i];
      var bbox = shape.getBBox();
      if (point.x >= bbox.minX && point.x <= bbox.maxX && point.y >= bbox.minY && point.y <= bbox.maxY) {
        clickedShape = shape;
        break;
      }
    }

    return clickedShape;
  }

// 开始添加饼图的文本
  function addPieLabel(chart) {
    labelGroup && labelGroup.clear();

    // 获取 top5 的数据
    var top5 = [];
    var cloneData = data.concat([]);
    cloneData.sort(function(obj1, obj2) {
      return obj2.ratio - obj1.ratio;
    });
    cloneData.map(function(obj, index) {
      if (index <= 4) {
        top5.push(obj.memo);
      }
    });

    var labels = []; // 存储要绘制的文本
    // 获取文本的信息
    var geom = chart.get('geoms')[0];
    var shapes = geom.get('container').get('children');
    shapes.forEach(function(shape) {
      var shapeAttrs = shape.attr();
      var origin = shape.get('origin');
      if (top5.indexOf(origin._origin.memo) !== -1) {
        // 只展示 top5 的文本
        var startAngle = shapeAttrs.startAngle,
          endAngle = shapeAttrs.endAngle;

        var middleAngle = (startAngle + endAngle) / 2;
        var edgePoint = _getEndPoint(center, middleAngle, r + ANCHOR_OFFSET);
        var routerPoint = _getEndPoint(center, middleAngle, r + OFFSET);
        var label = {
          _anchor: edgePoint,
          _router: routerPoint,
          _data: origin._origin,
          x: routerPoint.x,
          y: routerPoint.y,
          r: r + OFFSET,
          fill: origin.color // 字体颜色
        };
        // 判断文本的方向
        if (edgePoint.x < center.x) {
          label._side = 'left';
          labels.push(label);
        } else {
          label._side = 'right';
          labels.push(label);
        }
      }
    });

    var last_label = void 0; // 存储上一个 label 对象，用于检测文本是否重叠
    for (var i = 0; i < labels.length; i++) {
      var label = labels[i];
      var labelShape = _drawLabel(label); // 绘制文本图形对象

      if (last_label) {
        if (_isOverlap(labelShape, last_label)) {
          // 重叠了就不绘制
          last_label = labelShape;
          continue;
        }
      }
      drawnLabels.push(labelShape);

      labelGroup.add(labelShape);
      _drawLabelLine(label, labelGroup);
      last_label = labelShape;
    }

    canvas.draw();
  }
  addPieLabel(chart);
}

function initCircleMap(id, title, percent,c) {
  var colorMap = [
    '#FACC14',
    '#F04864'
  ];
  var data = [{
    x: title,
    y: percent
  }];
  var chart = new F2.Chart({
    id: id,
    width: document.getElementById('app').offsetWidth/2,
    height: 200
  });
  chart.source(data, {
    y: {
      max: 100,
      min: 0
    }
  });
  chart.axis(false);
  chart.legend({
    custom: true,
    position: 'top',
    align: 'center',
    itemWidth: null,
    items: [{
      name: title
    }]
  });
  chart.tooltip(false);
  chart.coord('polar', {
    transposed: true,
    innerRadius: 0.8,
    radius: 0.85
  });
  chart.guide().arc({
    start: [0, 0],
    end: [1, 99.98],
    top: false,
    style: {
      lineWidth: 20,
      stroke: '#ccc'
    }
  });

  chart.guide().text({
    position: ['50%', '50%'],
    content: percent +'万',
    style: {
      fontSize: 24,
      fill: '#333'
    }
  });
  chart.interval().position('x*y')
    .color('x', [colorMap[c]]).size(20).animate({
    appear: {
      duration: 1200,
      easing: 'cubicIn'
    }
  });
  chart.render();
}

function makeCircleMap() {

  initCircleMap('mountCircleMap1','资产1',60,0);
  initCircleMap('mountCircleMap2','资产2',88,1);
}

export default {
  name: "chartPage",
  data() {
    return {
       dateList: [
         {month: 1, desc: '近1月'},
         {month: 3, desc: '近3月'},
         {month: 6, desc: '近6月'},
         {month: 12, desc: '近1年'},
         {month: 24, desc: '近3年'}
       ]
    };
  },
  components:{
    [Tab.name]: Tab,
    [Tabs.name]: Tabs,
    [Row.name]: Row,
    [Col.name]: Col
  },
  mounted: function () {
    initChart();
    initMap();
    makeCircleMap();
    window.onresize = function () {
      setTimeout(() => {
         console.log('resize page');
         initChart();
         initMap();
        makeCircleMap();
      },350);
    }
  }
};
</script>
<style>
  .chart-page {
    background-color: #fff;
    height: 100vh;
  }
  .chart-page .van-tab{
     flex: 1 !important;
  }
  #mountNode {
    margin: 0 auto;
  }
</style>
