<template>
    <div class="active-page-box">
        <back-header title="场地租赁"></back-header>
        <div class="waterfall">
            <Search placeholder="场地地名" style="background:#f6f6f6;margin-left:-0.333333rem"/>
            <div>
                <van-list
                    v-model="loading"
                    :finished="finished"
                    :loading="false"
                    @load="onLoad"

                >
                    <router-link to="/second/rental" class="water-box">
                        <div class="shadow-box water-item" v-for="item in list">
                            <div :class="{'gray-shadow':!item.rental}">
                                <img :src="item.img" alt="">
                                <div class="content-txt">
                                    <div class="con-add">{{item.local | strLengthFilter(12)}}</div>
                                    <div class="con-price">￥ {{item.price}}</div>
                                    <van-button v-if="item.rental" type="default" class="rental-btn">秒租</van-button>
                                    <van-button v-else type="default" class="rental-btn have-rental">已租</van-button>
                                </div>
                            </div>
                        </div>
                    </router-link>

                </van-list>
            </div>
        </div>
    </div>
</template>
<script>
    import Search from '@/components/public/Search'
    import Vue from 'vue'
    import {Button, Cell, List, Waterfall} from 'vant'
    import {strLengthFilter} from '@/util/index.js'

    Vue.use(List).use(Cell);
    Vue.filter('strLengthFilter', strLengthFilter);
    Vue.use(Waterfall).use(Button);
    export default {
        name: 'rentalListPage',
        data() {
            return {
                loading: false,
                finished: false,
                list: [],
                rentalList: [
                    {
                        id: '1',
                        img: 'static/images/p4.png',
                        local: '恒大绿洲A座西侧505胡同',
                        price: "680元/天",
                        rental: true
                    },
                    {
                        id: '1',
                        img: 'static/images/p4.png',
                        local: '恒大绿洲A座西侧505胡同',
                        price: "680元/天",
                        rental: true
                    },
                    {
                        id: '1',
                        img: 'static/images/p4.png',
                        local: '恒大绿洲A座西侧505胡同',
                        price: "680元/天",
                        rental: true
                    },
                    {
                        id: '1',
                        img: 'static/images/p4.png',
                        local: '恒大绿洲A座西侧505胡同',
                        price: "680元/天",
                        rental: false
                    },
                    {
                        id: '1',
                        img: 'static/images/p4.png',
                        local: '恒大绿洲A座西侧505胡同',
                        price: "680元/天",
                        rental: true
                    },
                    {
                        id: '1',
                        img: 'static/images/p4.png',
                        local: '恒大绿洲A座西侧505胡同',
                        price: "680元/天",
                        rental: false
                    },
                    {
                        id: '1',
                        img: 'static/images/p4.png',
                        local: '恒大绿洲A座西侧505胡同',
                        price: "680元/天",
                        rental: false
                    },
                    {
                        id: '1',
                        img: 'static/images/p4.png',
                        local: '恒大绿洲A座西侧505胡同',
                        price: "680元/天",
                        rental: true
                    },
                    {
                        id: '1',
                        img: 'static/images/p4.png',
                        local: '恒大绿洲A座西侧505胡同',
                        price: "680元/天",
                        rental: false
                    },
                    {
                        id: '1',
                        img: 'static/images/p4.png',
                        local: '恒大绿洲A座西侧505胡同',
                        price: "680元/天",
                        rental: false
                    },
                    {
                        id: '1',
                        img: 'static/images/p4.png',
                        local: '恒大绿洲A座西侧505胡同',
                        price: "680元/天",
                        rental: true
                    },
                    {
                        id: '1',
                        img: 'static/images/p4.png',
                        local: '恒大绿洲A座西侧505胡同',
                        price: "680元/天",
                        rental: false
                    },
                    {
                        id: '1',
                        img: 'static/images/p4.png',
                        local: '恒大绿洲A座西侧505胡同',
                        price: "680元/天",
                        rental: false
                    },
                    {
                        id: '1',
                        img: 'static/images/p4.png',
                        local: '恒大绿洲A座西侧505胡同',
                        price: "680元/天",
                        rental: true
                    },
                    {
                        id: '1',
                        img: 'static/images/p4.png',
                        local: '恒大绿洲A座西侧505胡同',
                        price: "680元/天",
                        rental: false
                    },
                    {
                        id: '1',
                        img: 'static/images/p4.png',
                        local: '恒大绿洲A座西侧505胡同',
                        price: "680元/天",
                        rental: false
                    },
                    {
                        id: '1',
                        img: 'static/images/p4.png',
                        local: '恒大绿洲A座西侧505胡同',
                        price: "680元/天",
                        rental: true
                    },
                    {
                        id: '1',
                        img: 'static/images/p4.png',
                        local: '恒大绿洲A座西侧505胡同',
                        price: "680元/天",
                        rental: false
                    },
                    {
                        id: '1',
                        img: 'static/images/p4.png',
                        local: '恒大绿洲A座西侧505胡同',
                        price: "680元/天",
                        rental: false
                    }
                ]
            }
        },
        mounted() {
        },
        methods: {
            switcher() {
                console.log("binding.def.name");
                this.$router.goBack()
            },
            onLoad() {
                var that = this;
                setTimeout(() => {
                    for (let i = 0; i < 6; i++) {
                        that.$set(that.list, that.list.length, that.rentalList[that.list.length])
                        // that.list.push(that.rentalList[that.list.length + 1]);
                    }
                    console.log(that.list)
                    that.loading = false;

                    if (that.list.length >= 18) {
                        that.finished = true;
                    }
                }, 2000);

            },
            toRetalDetail() {

            }
        },

        components: {
            Search
        }
    }
</script>
<style>
    .waterfall {
        padding: 0.266667rem 0.4rem;
    }

    .waterfall .search-sty {
        background: #f6f6f6 ! import;
    }

    .sev-search {
        background: #f6f6f6 ! import;
    }

    .water-box {
        margin-top: 0.133333rem;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
    }

    .water-item {
        width: 4.36rem;
        height: 6rem;
        background: #ffffff;
        margin-bottom: 0.333333rem;
    }

    .water-item img {
        width: 4.36rem;
        height: 4.36rem;
    }

    .content-txt {
        margin-top: 0.02rem;
        padding: 0.1rem;
    }

    .con-add {
        font-size: 0.346667rem;
        font-weight: 600;
        color: #000000;
    }

    .con-price {
        color: #FD2D00;
        margin-top: 0.053333rem;
    }

    .rental-btn {
        font-size: 0.32rem;
        padding: 0.03rem 0.133333rem;
        height: auto;
        color: #FD2D00;
        float: right;
        line-height: 0.4rem;
    }

    .shadow-box {
        position: relative;

    }

    .gray-shadow {
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        background: #ccc;
        opecity: .5;
    }

    .have-rental {
        color: #ccc;
    }


</style>
