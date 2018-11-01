<template>
<div>
    <x-header id="search" :left-options="{backText: ''}">城市选择</x-header>
    <div class='searchContent'>
         <div class='action'>
            <div class='enter'>
                <input type='text' :value='hot'/><span @click=empty>×</span>
            </div>
            <input type='submit' class='submit' value='搜索'/>
        </div>
        <Letter :cities='cities'></Letter>
        <div class="cities">
            <div>
                <div class='hot'>当前城市</div>
                <ul class='list'><li>北京</li></ul>
            </div>
            <div>
                <div class='hot'>热门城市</div>
                <ul class='list'>
                    <li
                        v-for='item in hotCities'
                        :key='item.id'
                        @click=addValue(item.name)
                    >{{item.name}}</li>
                </ul>
            </div>
            <div v-for='(item,key) in cities' :key='key'>
                <div class='hot'>{{key}}</div>
                <ul>
                    <li
                        v-for='innerItem in item'
                        :key='innerItem.id'
                        class='item'
                        @click=addValue(innerItem.name)
                    >{{innerItem.name}}</li>
                </ul>
            </div>

        </div>    
    </div>
   
</div>
</template>

<script>
import { XHeader } from 'vux'
import Letter from '@/components/letter/letter'
import {api} from '@/service/api'
    
export default {
  components:{
    XHeader,
    Letter
  },
  data(){
      return {
          hot:'',
          hotCities:'',
          cities:{}
      }
  },
  methods:{
      addValue(i){
          this.hot=i
      },
      empty(){
          this.hot=''
      }
  },
  mounted(){
      api().then(res=>{
        //   console.log(res.data.data.hotCities)
        //   console.log(res.data.data.cities)
          this.hotCities = res.data.data.hotCities
          this.cities = res.data.data.cities
      })
  }
}
</script>

<style>
@import url('./search.css')
</style>