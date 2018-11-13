<template>
  <div class="know-content">
    <ul>
        <li class="know-item" v-for="item in knowlist" :key="item.id">
            <div class="know-title">{{item.knowTitle}}</div>
            <div v-for="(it,key) in item.knoeItem" :key="key">{{it}}</div>
        </li>
    </ul>
    <div @click='changea(100)'>{{abc}}</div>
  </div>
</template>
<script>
import { api } from '@/service/api'
export default {
    data () {
        return {
            knowlist:[]
        }
    },
    created () {
        api().then(res => {
            let knowinfo = res.data.data.recommendList[0].children.infoData.knowData
            this.knowlist = knowinfo
        })
    },
    computed: {
        abc(){
            return this.$store.state.a
        }
    },
    methods:{
        changea(x){
            console.log(x)
            this.$store.commit('changeA',x)
        }
    }
}
</script>
<style>
@import url('./know.css');
</style>