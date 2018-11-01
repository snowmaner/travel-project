<template>
  <div id="common" @click="comClick">
    <div>
        <swiper :list="comList" v-model="index" :show-dots='false' :show-desc-mask='false' height='7rem'></swiper>
        <p id="index">{{index+1}}/{{comList.length}}</p>
    </div>
  </div>
</template>
<script>
import { Swiper } from 'vux'


export default {
  components: {
    Swiper
  },
  props: {
      comList: {
          type:Array,
          default:[]
      }
  },
  data(){
        return {
            index:0
        }
    },
    methods: {
        comClick(){
            this.$emit('close')
        }
    }
}
</script>
<style>
@import url('./common.css');
</style>


