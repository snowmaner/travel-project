<template>
  <div id="main">
    <button @click="testPush">跳转push</button>  
    <button>跳转replace</button>  
    <button @click="testGo">前进</button>  
    <div class="header-box">
				<ul class="nav-list">
          <router-link 
            tag="li"
            :to="{name:item.name}"
            v-for="item in routeConfig"
            :key="item.path"
            :exact="item.path === '/' ? true : false"
          >
          <a>{{item.title}}</a>
          <ul v-if="item.children" class="dropdown-menu">
              <router-link 
                  tag="li"
                  :to="{name:option.name}"
                  v-for="option in item.children"
                  :key="option.path"
                >
                <a>{{option.title}}</a>
              </router-link>
						</ul>
          </router-link>
				</ul>
			</div>
    <div  class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import { routeConfig } from '@/router/config'
export default {
  name: 'App',
  data(){
    return {
      routeConfig
    }
  },
  methods:{
    testPush(){
      //this.$router.push('/')
     /*  this.$router.push({name:'Find'})
      this.$router.push({path:'/'}) */
       //this.$router.push({name:'Look',params:{id:3}});
      // this.$router.push({path:'/look',params:{id:3}});
      // a=1&b=2
      //this.$router.push({name:'Look',params:{id:3},query:{a:1,b:2}});
      //this.$router.push({name:'Look',params:{id:3},query:{a:1,b:2}});
    },
    testGo(){
      this.$router.go(-1);
    }
  }
}
</script>

<style>



.nav-list .router-link-active{
  background: red;
}

.router-link-exact-active {
  background: yellow;
}

body,ul,li {
	margin: 0;
	padding:0;
}
ul {
	list-style: none;
}
a {
	text-decoration: none;
	color: #000;
}

.header-box {
	border-bottom: 1px solid #f0f0f0;
	height: 50px;
}

.nav-list {
	height: 100%;
	width: 800px;
	margin: 0 auto;
	display: flex;
	align-content: center;
}

.nav-list li {
	flex: 1;
	text-align: center;
	align-items:center;
}

.nav-list li a {
	display: block;
	line-height: 50px;
}

.nav-list li.select {
	background: #ea6f5a;
	color: #fff;
}
.nav-list li.select a{
	color: #fff;
}

.nav-list .message {
	position: relative;
}

.message:hover .dropdown-menu {
	display: block;
}

.dropdown-menu {
	width: 200px;
	background: #fff;
	box-shadow: 0 2px 8px rgba(0,0,0,.1);
	margin: 0 auto;
	margin-top: 1px;
	display: none;
}


.container {
	width: 800px;
	margin: 0 auto;
}

.content {
	display: flex;
}

.content > div:nth-child(2) {
	flex: 1;
	text-align: center;
}

.watch-list {
	width: 300px;
}

.left-slider {
	border-right: 1px solid #f0f0f0;
}

.watch-list li {
	overflow:hidden;
	line-height: 40px;
	margin: 10px;
	padding: 10px;
	
}

.watch-list li.active {
	background: #f0f0f0;
}

.watch-list li img{
	width: 40px;
	height: 40px;
	float: left;
	padding-right: 10px;
}
</style>
