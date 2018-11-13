<template>
  <div>
    <router-link tag='div' :to="{name:'More'}" class="head-back" v-show="showHead">〈</router-link>
    <div 
        class="head-fixed" 
        v-show="!showHead"
        :style="opacityStyle"
        >
        <router-link tag='div' :to="{name:'More'}" class="head-fixed-back">〈</router-link>
        <div class="head-fixed-title">景点详情</div>
    </div>
  </div>
</template>
<script>
export default {
    data () {
        return {
            showHead:true,
            opacityStyle: {
                opacity: 0
            }
        }
    },
    methods: {
        headScroll () {
            const top = document.documentElement.scrollTop

            if(top > 80){
                let opacityBian = top/180
                opacityBian = opacityBian > 1? 1 : opacityBian
                this.opacityStyle = { opacity: opacityBian }
                this.showHead=false
            }else{
                this.showHead=true
            }
        }
    },
    mounted () {//activated keep-alive
        
        window.addEventListener('scroll',this.headScroll)
    },
    updated () {
        window.addEventListener('scroll',this.headScroll)
    }
}
</script>
<style>
@import url('./head.css');
</style>


