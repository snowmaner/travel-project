import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

let tryCity = '希腊'

export default new Vuex.Store({
    state:{
        a:1,
        nowCity:localStorage.nowCity || '希腊',
    },
    mutations:{
        changeNowCity(state,i){
            state.nowCity = i
            localStorage.nowCity = i
        },
        changeA(state,x){ 
            state.a=x
        }
    }
})