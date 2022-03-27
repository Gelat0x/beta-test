import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Liquified Dao</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to Liquified Dao" />
        <p className="description">
          Gain passive exposure to NFTs and turn your NFTs liquid!
        </p>
        <form action="https://glowing-zuccutto-ef56ff.netlify.app/">
    <input type="submit" value="Launch App" />
</form>
      </main>

      <Footer />
    </div>
  )
}
