<template>
    <div class="check-list">
        <div class="checkbox-item" v-for="(item,index) in data" :key="index">
            <label class="item-label" @click="toggle" :for="index">
                <input type="checkbox" v-show="0" v-model="selected" :id="index" :value="item.innerid">
            </label>
            <mt-cell is-link :title="'abc'+item.name">
                <!-- <img :src= "item.img" slot="icon" alt="">  -->
                 <!-- <img src= "https://sinacloud.net/vue-wechat/images/headers/sunquan.jpg" slot="icon" alt=""> -->
                 <img :src= "httpHost + item.img" slot="icon" alt="">                
            </mt-cell>
        </div>
    </div>
</template>
<script>
    export default{
        name:'CheckList',
        props:['data'],
        
        data(){         
            return {
                httpHost:"https:\\",
                selected:[],
            }
        },
        methods:{
            toggle(e){
                if(e.target.className=='item-label'){
                    e.target.className='';
                }else{
                    e.target.className='item-label';
                }
            }
        },
        watch:{
            'selected':function(n,o){
                this.$emit('selected',n);
            }
        }
    }
</script>
<style>
    .check-list{
        width: 100%;
    }
    .check-list .item-label{
        background: url('../../assets/images/icon/check-no.png') 0 0 no-repeat;
        background-size: .48rem .48rem;
        margin-top: .39rem;
    }
    .check-list label{
        background: url('../../assets/images/icon/check-yes.png') 0 0 no-repeat;
        width: .48rem;
        height: .48rem;
        float: left;
        background-size: .48rem .48rem;
        margin-top: .39rem;
        margin-left: .2rem;
    }
    .checkbox-item{
        overflow: hidden;
        margin: .2rem 0;
         background: #fff;
    }
    .checkbox-item .mint-cell{
        height: .88rem;
    }
    .checkbox-item .mint-cell img{
        display: inline-block;
        width: .613333rem;
        height: .613333rem;
        border-radius: .306667rem;
    }
    .checkbox-item .mint-cell,.checkbox-item .mint-cell-wrapper{
        background: transparent !important;
        font-size: .373333rem;
        height: .88rem;
        padding: 0;
        padding-left: .2rem;
    }
</style>

