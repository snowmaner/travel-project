import Home from '@/components/home/home'
import More from '@/components/more/more'
import User from '@/components/user/user'
import Search from '@/components/search/search'
import Weekend from '@/components/more/weekend/weekend'
import Recommend from '@/components/more/recommend/recommend'

import Money from '@/components/more/recommend/children/money'
import Trip from '@/components/more/recommend/children/trip'
import Special from '@/components/more/recommend/children/special'
import Know from '@/components/more/recommend/children/know'

import vue from 'vue'
import VueRouter from 'vue-router'
vue.use(VueRouter)

let router=new VueRouter({
    mode:'history',
    linkActiveClass:'more-nav-active',//设置选中样式
    routes:[
        {
            path:'/',
            name:'Home',
            component:Home //首页 
        },
        {
            path:'/more',
            name:'More',
            component:More //一个路径对应一个组件
        },
        {
            path:'/user',
            name:'User',
            component:User //登录
        },
        {
            path:'/search',
            name:'Search',
            component:Search //搜索
        },
        {
            path:'/recommendList',
            name:'Recommend',
            component:Recommend, //热门推荐详情
            // component:()=>import('@/components/more/recommend/recommend')懒加载
            redirect:{name:'Money'},//重定向
            children:[{
                path:'money',
                name:'Money',
                component:Money
            },
            {
                path:'trip',
                name:'Trip',
                component:Trip
            },{
                path:'special',
                name:'Special',
                component:Special
            },{
                path:'know',
                name:'Know',
                component:Know
            }]
        },
        {
            path:'/weekendList/:id',
            name:'Weekend',
            component:Weekend //周末去哪详情
        }
    ],
    scrollBehavior (to, from, savedPosition) {//跳转页面时不影响其他页面
        return { x: 0, y: 0 }
    }
})

export default router