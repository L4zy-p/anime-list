import type { AppProps } from 'next/app'
import Head from 'next/head'

import 'antd/dist/antd.css'
import '../styles/main.scss'

function MyApp({ Component, pageProps }: AppProps) {
  return <>
    <Head>
      <title>Anime List</title>
      <meta name='description' content='anime list next app' />
      <link rel='icon' href={`${process.env.NEXT_PUBLIC_BASE_PATH}/favicon.ico`} />
    </Head>
    <Component {...pageProps} />
  </>
}
export default MyApp
