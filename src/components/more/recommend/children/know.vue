<template>
  <div class="know-content">
    <ul>
        <li class="know-item">
            <div class="know-title">出行须知</div>
            <div>
                1.本产品门票为团队优惠联票，持老人证、学生证等优惠证件的人群不再享受门票优惠。敬请谅解！
                <br>
                2.患有疾病的客人，参与此行程前请根据自身条件，请遵医嘱，安全第一，谨慎出行。
                <br>
                3.本产品纯玩无购物。
            </div>
        </li>
        <li class="know-item">
            <div class="know-title">温馨提示</div>
            <div>
                1、黄金周、特殊节日等旅游旺季，房间预订以款到确认为准，一经确认不得随意变更。 
                <br>
                2、旅游者应身体健康，确保自身身体条件能够顺利完成旅游活动，避免因自身疾病在旅途中引起不良后果。请根据自己的身体条件参加适宜的旅游活动，以免发生意外。
                <br>
                3、游泳、漂流、潜水等水上运动，均存在危险。参与前请根据自身条件，并充分参考当地海事部门及其它专业机构相关公告及建议 后量力而行。 
                <br>
                4、出游时请尽量穿运动鞋，平底鞋（最好不要穿新皮鞋，高跟鞋，硬底鞋，拖鞋）。建议女同胞们不要穿裙子，尽量穿裤装，景区内许多游玩项目不适宜穿裙游玩。
            </div>
        </li>
        <li class="know-item">
            <div class="know-title">退款说明</div>
            <div>
                所有的产品，在使用有效期内未与商家预约或预约产品出行日期双方未达成一致，且未消费的可以全额退款；如用户已经与商家预约产品，申请退款需要承担实际损失或按照双方签署协议承担损失。
            </div>
        </li>
        <li class="know-item">
            <div class="know-title">出行提示</div>
            <div>
                为普及旅游安全知识及旅游文明公约，使您的旅程顺利圆满完成，特制订《合同》，请您认真阅读并切实遵守。
            </div>
        </li>
    </ul>
    <div @click='changea(100)'>{{abc}}</div>
  </div>
</template>
<script>
export default {
    computed: {
        abc(){
            return this.$store.state.a
        }
    },
    methods:{
        changea(x){
            console.log(x)
            this.$store.commit('changeA',x)
        }
    }
}
</script>
<style>
@import url('./know.css');
</style>