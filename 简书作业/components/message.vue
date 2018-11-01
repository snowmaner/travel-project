<template>
    <div>
        <h2>消息页面</h2>
        <div class="content">
            <div class="left-slider">
                <ul class="watch-list">
                    <router-link
                        tag="li"
                        v-for="item in messageChild" :key="item.name"
                        :to="{name:item.name}"
                    >
                    <img :src="item.icon">
                    <span>{{item.title}}</span>
                    </router-link>
                    <!--<li class="active">
                        <img src="https://upload.jianshu.io/collections/images/4/sy_20091020135145113016.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/120/h/120">
                        <span>评论</span>
                    </li>
                    <li>
                        <img src="https://upload.jianshu.io/collections/images/4/sy_20091020135145113016.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/120/h/120">
                        <span>简信</span>
                    </li>
                    <li>
                        <img src="https://upload.jianshu.io/collections/images/4/sy_20091020135145113016.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/120/h/120">
                        <span>关注</span>
                    </li>-->
                </ul>
            </div>
            <div class="right-slider">
                <h3>展示页</h3>
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>
<script>
    import { messageChild } from '@/router/config'
    export default {
        data (){
            return {
                messageChild
            }
        }
    }
</script>