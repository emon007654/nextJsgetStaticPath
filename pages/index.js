import Head from 'next/head'
import MainNav from '../com/MainNav'

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Home page</h1>
      <MainNav></MainNav>
    </>
  )
}