<template>
<div>
    <x-header id="search" :left-options="{backText: ''}">城市选择</x-header>
    <div class='searchContent'>
         <div class='action'>
                <input v-model="keyword" type='text' placeholder="请输入城市名或拼音" ref='o'/><!--<span @click=empty>×</span>-->
                <div v-show="keyword" class="down-list">
                    <ul>
                        <li 
                        class="search-city"
                        v-for='item of list' 
                        :key='item.id'
                        @click=change(item.name)
                        >
                            {{item.name}}
                        </li>
                        <li v-show="!list.length">没有找到匹配数据</li>
                    </ul>
                </div>
                <!-- <input 
                type='submit' 
                @click="sousuo"
                /> -->
        </div>
        <Letter :cities='cities'></Letter>
        <div class="cities">
            <div>
                <div class='hot'>当前城市</div>
                <ul class='list'>
                    <li>{{this.$store.state.nowCity}}</li>
                </ul>
            </div>
            <div>
                <div class='hot'>热门城市</div>
                <ul class='list'>
                    <li
                        v-for='item in hotCities'
                        :key='item.id'
                        @click=change(item.name)

                    >{{item.name}}</li>
                </ul>
            </div>
            <div class="letter-city" v-for='(item,key) in cities' :key='key'>
                <div class="id-href" :id='key'></div>
                <div class='hot'>{{key}}</div>
                <ul>
                    <li
                        v-for='innerItem in item'
                        :key='innerItem.id'
                        class='item'
                        @click=change(innerItem.name)
                    >{{innerItem.name}}</li>
                </ul>
            </div>
        </div>    
    </div>
   
</div>
</template>

<script>
import { XHeader } from 'vux'
import Letter from '@/components/search/letter/letter'
import {api} from '@/service/api'
    
export default {
  components:{
    XHeader,
    Letter
  },
  data(){
      return {
          nowCity:'北京',
          hotCities:'',
          cities:{},
          keyword:'',
          list:[],
          timer:null
      }
  },
  watch:{
      keyword(){
          if(this.timer){
              clearTimeout(this.timer)
          }
          if(!this.keyword){
              this.list = []
              return
          }
          this.timer = setTimeout(() => {
              const cityarr = []
              for (let i in this.cities) {
                  this.cities[i].forEach(item => {
                      if (item.spell.indexOf(this.keyword) > -1 || item.name.indexOf(this.keyword) > -1) {
                          cityarr.push(item)
                      }
                  });
              }
              this.list = cityarr
          }, 1);
      }
  },
  methods:{
    //   sousuo(){
    //       if(this.$refs['o'].value){
    //         this.nowCity = this.$refs['o'].value
    //       }
    //   },
      change(i){
        this.$store.commit('changeNowCity',i)
        this.$router.push('/')
      }
  },
  mounted(){
      api().then(res=>{
          this.hotCities = res.data.data.hotCities
          this.cities = res.data.data.cities
      })
  }
}
</script>

<style>
@import url('./search.css')
</style>