<template>
    <div>
        <h2>关注页面</h2>
        <div class="content">
            <div class="left-slider">
                <ul class="watch-list">
                    <router-link
                        tag="li"
                        :to="{name:look}"
                    >
                        <img src="https://upload.jianshu.io/collections/images/4/sy_20091020135145113016.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/120/h/120">
                        <span>简友圈</span>
                    </router-link>
                    <li v-if="!list.length">
                        loading...
                    </li>
                    <router-link
                        tag="li"
                        :to="{name:'look',params:{id:item.id}}"
                        v-for="item in list"
                        :key="item.id"
                    >
                        <img src="item.imageUrl">
                        <span>{{item.title}}</span>
                    </router-link>
                </ul>
            </div>
            <div class="right-slider">
                <h3>展示页</h3>
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>
<script>
    import axios from 'axios'
    import jianyouquan from './jianyouquan.vue'
    let url=`https://easy-mock.com/mock/5b2dfc86d901cc25e7df4d52/test/users`
    export default {
        data(){
            return {
                list:[],
                info:{},
                id:''
            }
        },
        components:{jianyouquan},
        watch:{
            $store(){
                //发送ajax
                let {id}=this.$route.params;
                if(id && !isNaN(id)){
                    let item = this.list.find(item => item.id === +id);
                    if(item){
                        this.info = item.info
                    }
                }
                this.id = id
            }
        },
        mounted(){
            
        }
    }
</script>