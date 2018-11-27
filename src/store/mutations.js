
export default {
    changeNowCity(state,i){
        state.nowCity = i
        try{
            localStorage.nowCity = i
        } catch (e) {}
    },

    changeA(state,num){ 
        state.a=num.can
    }
}