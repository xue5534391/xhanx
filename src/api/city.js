import axios from '@/tool/city'

export const cityApi = () => {
  return axios({
    method: 'get',
    url: 'gateway?k=1484217',
    headers: {
      'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"1593973524622327876288513"}',
      'X-Host': 'mall.film-ticket.city.list'
    }
  })
}
