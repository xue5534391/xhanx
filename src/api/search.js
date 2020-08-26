import axios from '@/tool/require'

export const searchTop = () => {
  return axios({
    method: 'get',
    url: 'comic/hotsearch?apptype=8&appversion=1.0&channel=web-app&appType=8'
  })
}

export const searchData = (name) => {
  return axios({
    methods: 'get',
    url: 'https://mhd.zhuishushenqi.com/comic_v2/searchindex?apptype=8&appversion=1.0&channel=web-app&type=2',
    params: {
      name
    }
  })
}
