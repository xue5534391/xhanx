import axios from '@/tool/require'
import { format } from '@/tool/enc.js'
export const rankingMain = (ranktype, pageno = 1, pagesize = 20) => {
  return axios({
    // 发送 POST 请求
    method: 'post',
    url: 'comic_v2/comicsrank',
    params: {
      apptype: '8',
      appversion: '1.0',
      channel: 'web-app'
    },
    data: format({
      ranktype,
      pageno,
      pagesize
    })
  })
}
