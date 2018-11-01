import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import { getShopList } from '@/server/api'
let store = new Vuex.Store({
  state:{
    shopList:[]
  },
  mutations:{
    changeShopList(state,payload){ // {list:[]}
      state.shopList = payload.list;
    }
  },
  actions:{
    getShopListAction({commit}){
      /* let {data} = await getShopList();
      commit('changeShopList',{list:data.data.list}) */
      // 返回值是作为dispath的返回值
      return getShopList().then(({data}) => {
        commit('changeShopList', { list: data.data.list })
      })
    }
  }
})

export default store;
