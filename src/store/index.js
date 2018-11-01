import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        a:1
    },
    mutations:{
        changeA(state,x){ 
            state.a=x
        }
    }
})