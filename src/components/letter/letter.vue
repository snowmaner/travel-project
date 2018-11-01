<template>
<div>
    <ul class='letter'>
        <li class='letters' 
        v-for='(item,key) in cities' 
        :key='key'
        @click='letterClick'
        >
        {{key}}
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
        
    },
    methods: {
        letterClick(e){
            console.log(e.target.innerText)
        }
    }
}
</script>
