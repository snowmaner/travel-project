import axios from 'axios'

// axios.defaults.baseURL = 'https://www.easy-mock.com/mock/5baca0db71ecff25e3cf5a04/house'

export function api(){//发送请求
  return axios.get('/static/mock/city.json')// /home 
  // return axios.get('/dist/static/mock/city.json')
}

