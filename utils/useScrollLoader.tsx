import { ClassType, useEffect, useState } from 'react'
import { AxiosResponse } from 'axios'
import { ResponsePatternGetDTO } from '@model/ResponsePatternGetDTO'
import { AnimesDTO } from '@model/AnimesDTO'

type queryType = {
  limit: number
}


export const useScrollLoader: Function = (
  query: queryType,
  api: any) => {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [data, setData] = useState([])
  const [hasMore, setHasMore] = useState(false)

  const loadMore = async () => {
    setLoading(true)
    setError(false)

    const res: AxiosResponse<ResponsePatternGetDTO<AnimesDTO>, any> = await api.get({
      ...query
    })

    if (res && res?.status === 200) {
      setData((prevdata: any): any => {
        return [...new Set([...prevdata, ...res?.data?.data])]
      })
      setHasMore(res?.data?.data?.length > 0)
      setLoading(false)
    } else {
      // statusFunc(res?.data?.errno || res?.status, message)
      setData([])
      setHasMore(false)
      setLoading(false)
      setError(true)
    }
  }

  useEffect(() => {
    loadMore()
  }, [query, api])

  return { loading, error, data, hasMore }
}