import { AnimesDTO } from '@model/AnimesDTO'

interface CarouselCardProps {
  item: AnimesDTO
  cardStyle: string
  handlePointerEvent: (event: any) => void
}

const CarouselCard = ({ handlePointerEvent, item, cardStyle }: CarouselCardProps) => {
  return <article className={cardStyle}>
    <div
      className='card'
      onMouseDown={handlePointerEvent}
      onTouchStart={handlePointerEvent}
    >
      <div className='picture'>
      <img src={item?.attributes?.posterImage?.original} alt={item?.attributes?.titles?.en_jp} />
      </div>
      <div className='text'>{item?.attributes?.titles?.en_jp}</div>
    </div>
  </article>
}

export default CarouselCard