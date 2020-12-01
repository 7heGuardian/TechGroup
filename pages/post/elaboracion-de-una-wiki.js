import PostPageLayout from 'layouts/PostPageLayout'
import { MetaDataPostPage, PostPageDescription, PostPageImageDescription } from 'layouts/PostPageLayout/styled'
import Head from 'next/head'

export default function PostItem() {

  return (
    <>
      <Head>
        <title>Elaboracion de una wiki</title>
      </Head>

      <PostPageLayout>
        <h1 style={{ textAlign: 'center', fontSize: '28px' }}>Eleaboracion de una wiki</h1>
        <MetaDataPostPage>Meta Description</MetaDataPostPage>
        <PostPageDescription >
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Curabitur porta eget neque at iaculis.
            Vestibulum velit ligula, pharetra sed mi,
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Curabitur porta eget neque at iaculis.
            Vestibulum velit ligula, pharetra sed mi.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Curabitur porta eget neque at iaculis.
            Vestibulum velit ligula, pharetra sed mi, Lorem ipsum dolor sit amet, consectetur adipiscing elit.Curabitur porta eget neque at iaculis.Vestibulum velit ligula, pharetra sed mi.
          </p>
          <br />
          <h3 style={{ fontSize: '20px' }}>Subtitulo 1</h3>
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
