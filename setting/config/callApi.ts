import axios from 'axios'
import conf from './config'

export const callApi = () => {
  return axios.create({
    baseURL: conf.baseURL
  })
}