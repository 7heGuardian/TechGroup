import Head from 'next/head'
import HomeLayout from 'layouts/HomeLayout'
import HeaderHome from 'components/HeaderHome'
import MainHome from 'components/MainHome'

export default function Home() {
  return (
    <>
      <Head>
        <title>📚 Elaboracion de una Wiki</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HomeLayout>
        <HeaderHome />
        <MainHome />
      </HomeLayout>
    </>
  )
}
