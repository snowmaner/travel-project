<template>
  <div>
    <router-link tag='div' :to="{name:'More'}" class="head-back" v-show="showHead">〈</router-link>
    <div class="head-fixed" v-show="!showHead">
        <div class="head-fixed-back">〈</div>
        <div class="head-fixed-title">景点详情</div>
    </div>
  </div>
</template>
<script>
export default {
    data () {
        return {
            showHead:true
        }
    },
    methods: {
        headScroll () {
            // console.log(1)
            const top = document.documentElement.scrollTop
            // console.log(top)
            if(top > 60){
                this.showHead=false
            }else{
                this.showHead=true
            }
        }
    },
    mounted () {//activated keep-alive
        
        window.addEventListener('scroll',this.headScroll)
        // window.addEventListener('scroll',function(){
        //     console.log(1)
        // })
    },
    updated () {

    }
}
</script>
<style>
@import url('./head.css');
</style>


