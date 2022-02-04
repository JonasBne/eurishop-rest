// TODO: dit is een herschreven sendhttprequest uit de useUpdate hook
const request = (methid: string, data: any) => {

} 

export const get = () => { return request('GET')}
export const put = () => {}
export const post = () => {}
export const delete= () => {}

export default {
  get,
  post,
  put
}


import api from 'fetchHelper'

api.get<ProductDTO>(url)