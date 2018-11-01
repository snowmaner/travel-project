<template>
<div>
    <Banner></Banner>
    <Head></Head>
    <div class="moreContent">
        <div class="more-nav">
            <router-link tag='div' :to="{name:'Money'}">费用信息</router-link>
            <router-link tag='div' :to="{name:'Trip'}">行程信息</router-link>
            <router-link tag='div' :to="{name:'Special'}">线路特色</router-link>
            <router-link tag='div' :to="{name:'Know'}">预定须知</router-link>
        </div>
        <router-view></router-view>
    </div>
</div>
</template>
<script>
import Banner from '@/components/more/recommend/banner/banner'
import Head from '@/components/more/recommend/head/head'
export default {
    components:{
        Banner,
        Head
    }
}
</script>

<style>
@import url('./recommend.css');
</style>
