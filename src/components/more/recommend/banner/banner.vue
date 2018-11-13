<template>
  <div>
    <div class='banner' @click="showCom">
      <div v-if='comList.length'>
        <img class='banner-img' :src='comList[0].img' alt=''>
      </div>
      <div class='banner-info'>
        <div class='banner-title'>大连圣亚海洋世界（AAAA景区）</div>
        <div class='banner-num'>39</div>
      </div>
    </div>
    <!-- <animation> -->
      <common 
      v-show="list.showCommon" 
      :comList='comList'
      @close='closeCommon'
      ></common>
    <!-- </animation> -->
  </div>
</template>
<script>
import Common from '@/common/common'
// import Animation from '@/common/animation/animation'

import {api} from '@/service/api'


export default {
  components: {
    Common
    // Animation
  },
  data(){
    return {
      list:{},
      comList:[]
    }
  },
  methods: {
    showCom(){
      this.list.showCommon = true
    },
    closeCommon(){
      this.list.showCommon = false
    }
  },
  created () {
    api().then(res=>{
      let recommendList = res.data.data.recommendList
      let bannerList = recommendList.filter(item => item.id == this.$route.params.id);
      let bannerInfo = bannerList[0].children.bannerData
      
      this.list = bannerInfo
      this.comList = bannerInfo.imgList
      // console.log(this.list)
    })
  }
}
</script>
<style>
@import url('./banner.css')
</style>