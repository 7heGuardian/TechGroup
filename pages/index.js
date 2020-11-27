import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>📚 Elaboracion de una Wiki</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main style={{
        height: '100vh',
        width: '100vw',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <div style={{ height: 'min-content', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center', marginBottom: '20px' }}>
          <h1 style={{ fontSize: '50px', padding: '0 5px' }}>
            Elaboracion de una <br />
            <span style={{ color: '#0070f3' }}> Wiki</span>
          </h1>
        </div>

        <div style={{ height: 'min-content', width: '100%', display: 'flex', justifyContent: 'center' }}>
          <div style={{ textAlign: 'center', backgroundColor: '#fff', padding: '25px 20px', borderRadius: '10px', boxShadow: '1px 1px 15px #5656567d' }}>
            <h2 style={{ color: '#0070f3', fontWeight: '600' }}>Newman</h2>
            <h2 style={{ color: '#0070f3', fontWeight: '600' }}>Jose</h2>
            <h2 style={{ color: '#0070f3', fontWeight: '600' }}>Jose 2</h2>
            <h2 style={{ color: '#0070f3', fontWeight: '600' }}>Josue</h2>
            <h2 style={{ color: '#0070f3', fontWeight: '600' }}>Kevin Blanco</h2>
          </div>
        </div>
      </main>
    </>
  )
}
