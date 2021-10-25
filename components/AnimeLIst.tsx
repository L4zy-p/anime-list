import React, { useState, useRef, useCallback, RefObject } from 'react'
import { Row, Col } from 'antd'
import { ApiGetAnimes } from '@api/anime'
import { useScrollLoader } from '@utils/useScrollLoader'
import AnimeCard from '@component/AnimeCard'


const AnimeList: React.FC = () => {
  const [animeList, setAnimeList] = useState()
  const [query, setQuery] = useState({ limit: 20, offset: 0, sort: '-averageRating' })
  const { loading, error, data, hasMore } = useScrollLoader(query, ApiGetAnimes)

  const observer: any = useRef(null)

  const lastElement = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setQuery((prev: any): any => {
            return { ...prev, offset: prev.offset + 20 }
          })
        }
      });
      if (node) observer.current.observe(node);
    }, [loading, hasMore]
  )

  return <>
    {
      data?.length > 0 && <Row style={{ width: '100%' }} gutter={[15, 15]} justify='center'>
        {data?.map((d, i) => {
          if (data?.length === i + 1) {
            return (
              <Col ref={lastElement} key={i}>
                <AnimeCard
                  item={d}
                />
              </Col>
            );
          } else {
            return (
              <Col key={i}>
                <AnimeCard
                  item={d}
                />
              </Col>
            );
          }
        })}
      </Row>
    }
  </>
}

export default AnimeList