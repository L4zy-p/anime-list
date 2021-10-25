import type { NextPage } from 'next'
import Head from 'next/head'
import { Row, Col, Button, Avatar, Card } from 'antd'
import { SearchOutlined } from '@ant-design/icons'
import AnimeList from '@component/AnimeLIst'
import Carousel from '@component/Carousel'

const contentStyle: any = {
  height: '500px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

const Home: NextPage = () => {
  // useEffect(() => {
  //   loadAnimes({
  //     limit: 20
  //   })
  // },[])
  // const loadAnimes = async (params: AnimeGetParams): Promise<void> => {
  //   try {
  //     const res = await ApiGetAnimes.get({ ...params })
  //     console.log('res', res)
  //   } catch (err) {

  //   }
  // }
  return (
    <>
      <Head>
        <title>Anime List</title>
        <meta name='description' content='anime list next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className='first-section'>
        <div className='demo-wrap'>
          <img
            className='demo-bg'
            src='/ani-background.jpg'
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
