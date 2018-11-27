
import state from './state'
import mutations from './mutations'

import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)


export default new Vuex.Store({
    state,   //es6语法简写，原为 state:state
    mutations
})



// export default new Vuex.Store({
//     state:{
//         a:1
//     },
//     getters: {
//         getA(state){
//             let j = state.a + 9
//             return j
//         }
//     },
//     mutations:{
//         // changeA(state,num){ 
//         //     state.a=num.can
//         // }
//         changeAAA(state,num){ 
//             state.a=num.can
//         }
//     },
//     actions: {
//         changeA({commit},num){ 

//         //异步操作放在这里
//             setTimeout(()=>{
//                 commit('changeAAA',num)
//             },1000)
//         }
//     }
// })

