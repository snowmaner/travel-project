import Find from '@/components/find'
import Look from '@/components/look'
import Message from '@/components/message'
import Pinglun from '@/components/message-child/pinglun'
import Jianxin from '@/components/message-child/jianxin'
import Guanzhu from '@/components/message-child/guanzhu'

// /users/:id?
// 二级导航

export let messageChild = [
  {
    path: 'pinglun',
    name: 'Pinglun',
    title: '评论',
    component: Pinglun,
    icon: 'https://upload.jianshu.io/collections/images/283250/%E6%BC%AB%E7%94%BB%E4%B8%93%E9%A2%98.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64'
  },
  {
    path: 'jianxin',
    name: 'Jianxin',
    title: '简信',
    component: Jianxin,
    icon: 'https://upload.jianshu.io/collections/images/283250/%E6%BC%AB%E7%94%BB%E4%B8%93%E9%A2%98.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64'
  },
  {
    path: 'guanzhu',
    name: 'Guanzhu',
    title: '关注',
    component: Guanzhu,
    icon: 'https://upload.jianshu.io/collections/images/14/6249340_194140034135_2.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64'
  }
]


export let routeConfig = [
  {
    path: '/',
    name: 'Find',
    component: Find,
    title: '发现'
  },
  {
    path: '/look/:id?',  // /look/1 /look/2
    name: 'Look',
    component: Look,
    title: '关注'
  },
  {
    path: '/message',
    name: 'Message',
    component: Message,
    title: '消息',
    redirect: { name: messageChild[0].name},
    children:[
      ...messageChild
    ]
  }
]