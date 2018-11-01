import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import { routeConfig } from "@/router/config";

let router = new VueRouter({
  mode:'history',
  routes:[
    ...routeConfig,
    {
      path:'*',
      redirect:'/'
    }
  ]
})

export default router