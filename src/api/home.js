import axios from '@/tool/require'

export const bannerApi = () => {
  return axios({
    // 发送 POST 请求
    method: 'get',
    url: 'comic_v2/getproad?apptype=8&appversion=1.0&channel=web-app&adgroupid=123'
  })
}

export const recommendApi = () => {
  return axios({
    // 发送 POST 请求
    method: 'get',
    url: 'comic_v2/customerview?apptype=8&appversion=1.0&channel=web-app&viewtype=1'
  })
}
