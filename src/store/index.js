
import state from './state'
import mutations from './mutations'

import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)



export default new Vuex.Store({
    state,   //es6语法简写，原为 state:state
    mutations
})