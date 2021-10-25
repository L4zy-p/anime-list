interface CarouselPaginatorProps {
  dataLength: number
  activeIndex: number
  handlePageChange: (index: number) => void
}

const CarouselPaginator = ({ dataLength, activeIndex, handlePageChange }: CarouselPaginatorProps) => {
  let dots: any = [];
  let classes = '';
  for (let index = 0; index < dataLength; index++) {
    classes = activeIndex === index ? 'dot active' : 'dot';
    dots.push(
      <div
        key={index}
        className={classes}
        onClick={() => handlePageChange(index)}
      ></div>
    )
  }
  return (
    <div className='paginator'>
      <div className='hr'></div>
      {dots.map((dot) => dot)}
    </div>
  );
}

export default CarouselPaginator