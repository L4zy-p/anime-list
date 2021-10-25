import { AxiosRequestConfig } from 'axios'
import { callApi } from '../../config/callApi'
import { ResponsePatternGetDTO } from '@model/ResponsePatternGetDTO'
import { AnimesDTO } from '@model/AnimesDTO'
import qs from 'qs'

export interface AnimeGetParams {
  limit: number
  offset: number
  sort: string

}

class _ApiGetAnimes {
  async get(params: AnimeGetParams) {
    console.log('qs.stringify(params)', qs.stringify({
      page:{
        limit: params?.limit,
        offset: params?.offset
      },
      sort: params?.sort 
    }))
    const config: AxiosRequestConfig = {
      params: {
        page:{
          limit: params?.limit,
          offset: params?.offset
        },
        sort: params?.sort 
      },
      paramsSerializer: params => {
        return qs.stringify(params)
      }
    }
    return await callApi().get<ResponsePatternGetDTO<AnimesDTO>>('/edge/anime', config)
  }
}
export const ApiGetAnimes = new _ApiGetAnimes()
