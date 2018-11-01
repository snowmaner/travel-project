import axios from 'axios'

axios.defaults.baseURL = 'https://easy-mock.com/mock/5abdef3d1fc7eb0367395cc9/shop/'

export function getShopList(){
  return axios.get('/shop-list')
}