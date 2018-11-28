<template>
  <div>
      <x-header id="title" :left-options="{backText: ''}">登录</x-header>
      <div class='info'>
          <div class='head-img'>
            <!-- <img src='./img/2.jpg'/> -->
          </div>
          <div class='sign username'>
            <input type='text' placeholder='用户名'/>
          </div>
           <div class='sign password'>
            <input type='password' placeholder='密码'/>
          </div>
          <div class='signword'>登录</div>
          <div class='register'>
            <div>忘记密码？</div>
            <div>马上注册</div>
          </div>
      </div>
  </div>
</template>

<script>
import { XHeader } from 'vux'

export default {
  components:{
    XHeader
  }
}
</script>

<style>
@import url('./user.css')
</style>

