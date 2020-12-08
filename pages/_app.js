import Head from 'next/head'
import AppLayout from 'layouts/App'

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="Content-Language" content="es" />
        <meta name="description" content="Elaboracion de una wiki" />
        <meta name="keywords" content="wiki, elaboracion de una wiki, proyecto unexca, carrera informatica" />
        <meta name="author" content="equipo 6" />
        <meta name="copyright" content="equipo 6" />
        <meta name="robots" content="index" />
        <meta name="robots" content="follow" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;900&display=swap" rel="stylesheet" />
      </Head>

      <AppLayout>
        <Component {...pageProps} />
      </AppLayout>
    </>
  )
}

export default App
