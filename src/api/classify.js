import axios from '@/tool/require'
import { format } from '@/tool/enc'
export const classificationList = () => {
  return axios({
    method: 'get',
    url: 'comic_v2/getproad',
    params: {
      apptype: '8',
      appversion: '1.0',
      channel: 'web-app',
      adgroupid: '125'
    }
  })
}

export const classificationMain = (subject, pageno = 1, pagesize = 20) => {
  return axios({
    method: 'post',
    url: 'comic_v2/comicsfilterlist_v2?apptype=8&appversion=1.0&channel=web-app',
    data: format({
      subject,
      pageno,
      pagesize
    })
  })
}
