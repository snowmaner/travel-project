<template>
<div>
    <ul class='letter'>
        <li class='letters' 
        v-for='(item,key) in cities' 
        :key='key'
        >
        <a :href="'#'+key">{{key}}</a>
        </li>
    </ul>
</div>
</template>
<script>

export default {
    name:'Letter',
    props: {
        cities: {
            type:Object,
            default:()=>{({})}
        },
        word:{
            type:String,
            default:''//默认值
        }
    }
}
</script>
<style>
@import url('./letter.css');
</style>


