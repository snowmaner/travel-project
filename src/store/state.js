
let tryCity = '希腊'
try {
    if(localStorage.nowCity){
        tryCity = localStorage.nowCity
    }
} catch (e) {}

export default {
    a:1,
    nowCity:tryCity
}