<template>
  <div>
    <div class='banner' @click="showCom">
      <img class='banner-img' :src='comList[0].img'>
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

let obj={
  showCommon:false,
  imgList:[{
    img: 'https://img1.qunarzz.com/p/tts5/1708/40/7da690593fe50f02.jpg_r_1280x840x90_87ec67fa.jpg'
  }, {
    img: 'https://img1.qunarzz.com/p/tts0/1708/1d/a20a4bb92135ac02.jpg_r_1280x840x90_f3bc7ee4.jpg'
  }, {
    img: 'https://img1.qunarzz.com/p/tts6/1708/51/23d9bbdd6a184e02.jpg_r_1280x840x90_825a14f0.jpg'
  },{
    img: 'https://img1.qunarzz.com/p/tts7/1708/6a/a538c07f036c2b02.jpg_r_1280x840x90_d164d7e5.jpg'
  }]
  }

export default {
  components: {
    Common
    // Animation
  },
  data(){
    return {
      list:obj,
      comList:obj.imgList
    }
  },
  methods: {
    showCom(){
      // console.log(this.comList)
      this.list.showCommon = true
    },
    closeCommon(){
      this.list.showCommon = false
    }
  },
  created () {
    api().then(res=>{
      let recommendList = res.data.data.recommendList
      let bannerList = recommendList.filter(item => item.id == this.$route.query.id);
      console.log(bannerList)

      
    })
  }
}
</script>
<style>
@import url('./banner.css')
</style>