<template>
<div>
    <header class="head">
        <div class="sou"><input type='text' placeholder="输入城市/景点/游玩主题"></div>
        <router-link to='/search'>{{this.$store.state.nowCity}}<span>∨</span></router-link>
    </header>
    <div class="content">
        <div class="body">
            <swiper :show-desc-mask='false' loop auto :list="demo06_list" :index="demo06_index" @on-index-change="demo06_onIndexChange"></swiper>
            <div class="series">
                <ul class="hotel flex">
                    <li>国内游</li>
                    <li>
                        <div class="cell">跟团游</div>
                        <div class="cell">民宿</div>
                    </li>
                    <li>
                        <div class="cell">高标无消费</div>
                        <div class="cell">客栈</div>
                    </li>
                </ul>
                <ul class="vehicle flex">
                    <li>境外游</li>
                    <li>
                        <div class="cell">海岛游</div>
                        <div class="cell">北欧</div>
                    </li>
                    <li>
                        <div class="cell">美国</div>
                        <div class="cell">日韩</div>
                    </li>
                </ul>
                <ul class="travel flex">
                    <li>自由行</li>
                    <li>
                        <div class="cell">门票</div>
                        <div class="cell">目的地攻略</div>
                    </li>
                    <li>
                        <div class="cell">游轮旅行</div>
                        <div class="cell">定制旅行</div>
                    </li>
                </ul>
            </div>
            <div class="enjoy">
                <ul class="flex cheap plaything">
                    <li>景点·玩乐</li>
                    <li>周边游</li>
                    <li>一日游</li>
                    <li>当地攻略</li>
                </ul>
                <ul class="flex expensive plaything">
                    <li>出境游</li>
                    <li>自由行</li>
                    <li>私人定制</li>
                    <li>更多</li>
                </ul>
            </div>
            <div class="discount">
                <div class="caption">
                    <div class="sale">特卖汇</div>
                    <router-link class="more" to="/more">more></router-link> 
                </div>
                <div class="flex">
                    <ul class='example'>
                        <li>
                            <img class='example-img' src='https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1537946316268&di=967ecb00395ce6682ddb60b2899cba08&imgtype=0&src=http%3A%2F%2Fs3img.city.sina.com.cn%2Ftravel%2Ftrip%2Ftrip_tuijian%2F1396591711.jpg'/>
                        </li>
                        <li class="example-word">希腊+圣托里尼+意大利+法国+瑞士14日跟团游(4钻)·【25人团 4星+两晚悬崖+庄园 巴黎琉森市区酒店 塞纳河游船晚宴+限量蜜月大礼包 圣岛两日 内陆飞】2人1台WIFI</li>
                        <li class="price">￥17899<span>起</span></li>
                    </ul>
                    <div>
                        <ul class="slogan">
                            <li>千款特价</li>
                            <li>走过路过不要错过</li>
                        </ul>
                        <div class="flex">
                            <ul class="back">
                                <li class="bold"><span>境外精选</span></li>
                                <li><span>百元</span>出境游</li>
                            </ul>
                            <ul class="back">
                                <li class="bold"><span>周边玩乐</span></li>
                                <li><span>十元</span>度周末</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <footer>
            <div class="about">
                <div>下载App</div>
                <div>我的订单</div>
                <router-link :to="{name:'User'}">我的</router-link>
            </div>
            <div  class="foot">
                <div><span>Qunar 京ICP备05021087</span></div>
                <div>意见反馈</div>
                <div>关于我们</div>
            </div>
        </footer>
    </div>
</div>
</template>

<script>

import More from '@/components/more/more' 
import { api } from '@/service/api.js'//解构

import { Swiper } from 'vux'



export default {
    components:{
        More,
        Swiper
    },
    data(){
        return {
            demo06_list: [],
            demo06_index: 0//默认选中的图片
        }
    },
    methods:{
        demo06_onIndexChange (index) {
            this.demo06_index = index
        }
    },
    mounted(){
        api().then(res=>{
            this.demo06_list = res.data.data.list
        })
    }
}

</script>

<style>
    @import url('./home.css');
</style>