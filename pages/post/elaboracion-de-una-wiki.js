import { useEffect, useState } from 'react'
import { db } from 'services/firebase'
import Head from 'next/head'
import PostPageLayout from 'layouts/PostPageLayout'
import { MetaDataPostPage, PostPageDescription, PostPageImageDescription } from 'layouts/PostPageLayout/styled'
import Link from 'next/link'

export default function PostItem() {
  const [comments, setComments] = useState([])

  useEffect(() => {
    db
      .collection('wikiComments')
      .orderBy('createdAt', 'desc')
      .onSnapshot(snap => {
        console.log(snap)

        setComments(snap.docs.map(doc => {
          const id = doc.id
          const data = doc.data()
          const { createdAt } = data
          const date = new Date(createdAt.seconds * 1000)
          const normalizedCreatedAt = new Intl.DateTimeFormat('es-VE').format(date)

          return {
            ...data,
            id,
            createdAt: normalizedCreatedAt
          }
        }))
      })
  }, [])

  return (
    <>
      <Head>
        <title>Elaboracion de una wiki</title>
      </Head>

      <PostPageLayout comments={comments}>
        <h1 style={{ textAlign: 'center', fontSize: '28px' }}>Elaboracion de una wiki</h1> <small><Link href='/'><a>Ir al inicio</a></Link></small>
        <MetaDataPostPage>Meta Description</MetaDataPostPage>
        <PostPageDescription>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Curabitur porta eget neque at iaculis.
            Vestibulum velit ligula, pharetra sed mi,
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Curabitur porta eget neque at iaculis.
            Vestibulum velit ligula, pharetra sed mi.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Curabitur porta eget neque at iaculis.
            Vestibulum velit ligula, pharetra sed mi,
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Curabitur porta eget neque at iaculis.
            Vestibulum velit ligula, pharetra sed mi.
          </p>
          <br />
          <h3 style={{ fontSize: '24px', fontFamily: 'Playfair Display' }}>Subtitulo 1</h3>
          <br />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Curabitur porta eget neque at iaculis.
            Vestibulum velit ligula, pharetra sed mi,
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Curabitur porta eget neque at iaculis.
            Vestibulum velit ligula, pharetra sed mi.
          </p>

          <br />
          <br />
          <PostPageImageDescription>

          </PostPageImageDescription>
          <br />
          <br />
          <h3 style={{ fontSize: '20px' }}>Subtitulo 2</h3>
          <br />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Curabitur porta eget neque at iaculis.
            Vestibulum velit ligula, pharetra sed mi,
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Curabitur porta eget neque at iaculis.
            Vestibulum velit ligula, pharetra sed mi.
          </p>
        </PostPageDescription>
        <br />
        <hr style={{ width: '80%' }} />
      </PostPageLayout>
    </>
  )
}
