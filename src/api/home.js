import axios from '@/tool/require'

export const bannerApi = () => {
  return axios({
    // 发送 POST 请求
    method: 'get',
    url: 'https://mhd.zhuishushenqi.com/comic_v2/getproad?apptype=8&appversion=1.0&channel=web-app&adgroupid=123'
  })
}
