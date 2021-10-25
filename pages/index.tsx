import type { NextPage } from 'next'
import { Row, Col, Button, Avatar } from 'antd'
import { SearchOutlined } from '@ant-design/icons'
import AnimeList from '@component/AnimeLIst'
import Carousel from '@component/Carousel'

const Home: NextPage = () => {
  return (
    <>
      <div className='first-section'>
        <div className='demo-wrap'>
          <img
            className='demo-bg'
            src={`${process.env.NEXT_PUBLIC_BASE_PATH}/ani-background.jpg`}
            alt=''
          />
          <div className='demo-content'>
            <Row className='nav-header' gutter={[15, 15]} align='middle'>
              <Col className='web-name' flex='auto'>MyAnimeList</Col>
              <Col>Anime</Col>
              <Col>Manga</Col>
              <Col>Community</Col>
              <Col>Industry</Col>
              <Col>Watch</Col>
              <Col>Read</Col>
              <Col>Help</Col>
              <Col><Button shape='circle' icon={<SearchOutlined />} /></Col>
              <Col><Avatar>P</Avatar></Col>
            </Row>
            <Carousel />
          </div>
        </div>
      </div>
      <div className='second-section'>
        <Row>
          <Col span={24}>
            <h1>
              Highest Rated Anime
            </h1>
          </Col>
        </Row>
        <br />
        <AnimeList />
      </div>
    </>
  )
}

export default Home
