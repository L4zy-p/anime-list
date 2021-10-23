import { AxiosRequestConfig } from 'axios'
import { callApi } from '../../config/callApi'
import { ResponsePatternGetDTO } from '@model/ResponsePatternGetDTO'
import { AnimesDTO } from '@model/AnimesDTO'

export interface AnimeGetParams {
  limit: number
}

class _ApiGetAnimes {
  async get(params: AnimeGetParams) {
    const config: AxiosRequestConfig = { params: params }

    return await callApi().get<ResponsePatternGetDTO<AnimesDTO>>('/edge/trending/anime', config)
  }
}
export const ApiGetAnimes = new _ApiGetAnimes()
