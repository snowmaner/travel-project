<template>
  <div>
      <router-link tag='div' :to="{name:'Home'}" class="head-fixed">
        <div class="head-fixed-back">〈</div>
        <div class="head-fixed-title">特卖汇</div>
      </router-link>
      <div class='show'>
        <div>
          <div class="shouList">周末去哪儿</div>
          <ul>
            <router-link 
            tag='li'
            :to="'/weekendList/'+item.id"
            class='weekend' 
            v-for='item in weekendList' 
            :key='item.id'
            >
                <img class='weekend-img' :src='item.imgUrl' >
              <div class='weekend-info'>
                <p class='weekend-title'>{{item.title}}</p>
                <p class='weekend-desc'>{{item.desc}}</p>
              </div>
            </router-link >
          </ul>
        </div>
        <div>
          <div class="shouList">热门推荐</div>
          <ul>
            <router-link 
            tag='li'
            :to="{name:'Recommend',params:{id:item.id}}"
            class='item' 
            v-for='item in recommendList' 
            :key='item.id'>
                <img class='item-img' :src= 'item.imgUrl'/>
              <div class='item-info'>
                <p class='item-title'>{{item.title}}</p>
                <p class='item-desc'>{{item.desc}}</p>
                <p class='item-button'>查看详情</p>
              </div>
            </router-link>
          </ul>
        </div>
      </div>
  </div>
</template>

<script>
import { XHeader } from 'vux'
import {api} from '@/service/api'

export default {
  name:'More',
  components:{
    XHeader
  },
  data(){
    return {
      recommendList:'',
      weekendList:''
    }
  },
  mounted(){
    api().then(res=>{
      // console.log(res.data.data.weekendList)
      this.recommendList= res.data.data.recommendList
      this.weekendList= res.data.data.weekendList
    })
  }
}
</script>
<style>
@import url('./more.css')
</style>