import React from 'react'
import { Card } from 'antd'
import { AnimesDTO } from '@model/AnimesDTO'
import Image from 'next/image'

interface AnimeCardProps {
  item: AnimesDTO
}

const { Meta } = Card

const AnimeCard: React.FC<AnimeCardProps> = ({ item }: AnimeCardProps) => {
  return <>
    <Card
      hoverable
      style={{ width: 240 }}
      cover={<Image 
        quality={40}
        loading='lazy'
        placeholder='blur'
        blurDataURL={item?.attributes?.posterImage?.original}
        alt={item?.attributes.titles?.en_jp}
        width={item?.attributes?.posterImage?.meta?.dimensions?.small?.width || 240}
        height={item?.attributes?.posterImage?.meta?.dimensions?.small?.height || 340}
        src={item?.attributes?.posterImage?.original} />}
      >
        <Meta title={item?.attributes.titles?.en_jp} description="www.instagram.com" />
    </Card>
  </>
}

export default AnimeCard