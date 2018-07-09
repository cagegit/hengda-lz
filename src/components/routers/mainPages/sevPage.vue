<template>
    <div class="sev-page-box">
        <mt-header title="通讯录"></mt-header>
        <Search placeholder="请输入姓名、关键字等" /> 
        <Tree :data.sync="treeData"></Tree>
    </div>
</template>
<script>
import Tree from '../../public/Tree'
import Search from '@/components/public/Search' 
import rs from '../../../assets/images/tx/rs.png'
export default {
  name: "sevPage",
  data(){
      return {
          treeData:[
              {
                  label:'力鼎科技有限公司',
                  id:"1",
                  img:'static/images/p1.png',
                  children:[
                      {
                          label:'人事部',
                          id:"11",
                          img:rs,
                          children:[
                              {
                                  name:'李娜',
                                  img:'static/images/userPhoto.png',
                                  phone:'15309871546'
                              },{
                                  name:'李娜',
                                  img:'static/images/userPhoto.png',
                                  phone:'15309871546'
                              },{
                                  name:'李娜',
                                  img:'static/images/userPhoto.png',
                                  phone:'15309871546'
                              }
                          ]
                      },{
                          label:'人事部',
                          img:rs,
                          id:'12',
                          children:[
                              {
                                  name:'李娜',
                                  img:'static/images/userPhoto.png',
                                  phone:'15309871546'
                              },{
                                  name:'李娜',
                                  img:'static/images/userPhoto.png',
                                  phone:'15309871546'
                              },{
                                  name:'李娜',
                                  img:'static/images/userPhoto.png',
                                  phone:'15309871546'
                              }
                          ]
                      }
                  ]
              },{
                  label:'力鼎科技有限公司',
                  img:'static/images/p1.png',
                  id:'2',
                  children:[
                      {
                          label:'人事部',
                          img:rs,
                          id:'21',
                          children:[
                              {
                                  name:'李娜',
                                  img:'static/images/userPhoto.png',
                                  phone:'15309871546'
                              },{
                                  name:'李娜',
                                  img:'static/images/userPhoto.png',
                                  phone:'15309871546'
                              },{
                                  name:'李娜',
                                  img:'static/images/userPhoto.png',
                                  phone:'15309871546'
                              }
                          ]
                      },{
                          label:'人事部',
                          img:rs,
                          id:'22',
                          children:[
                              {
                                  name:'李娜',
                                  img:'static/images/userPhoto.png',
                                  phone:'15309871546'
                              },{
                                  name:'李娜',
                                  img:'static/images/userPhoto.png',
                                  phone:'15309871546'
                              },{
                                  name:'李娜',
                                  img:'static/images/userPhoto.png',
                                  phone:'15309871546'
                              }
                          ]
                      }
                  ]
              }
          ]
      }
  },
  components:{
      Tree,
      Search
  }
};
</script>
<style>

</style>

