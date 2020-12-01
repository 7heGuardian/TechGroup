import Link from 'next/link'
import { ArticleStyled, ListArticlesLayoutStyled, ListArticlesStyled } from './styled'

export default function ListArticlesHome() {
  return (
    <ListArticlesLayoutStyled>
      <h3 style={{ fontSize: '25px' }}>Publicaciones</h3>

      <ListArticlesStyled>
        <li style={{ overflow: 'hidden' }}>
          <ArticleStyled >
            <figure style={{ width: '250px', height: '100%', borderRadius: '10px' }}>
              <Link href='/post/elaboracion-de-una-wiki'>
                <a>
                  <img style={{ borderRadius: '10px' }} src='/thumb-post-wiki.png' alt='imagen' width='100%' />
                </a>
              </Link>
            </figure>

            <div style={{ width: '100%', height: 'min-content', margin: '20px 0 auto 0' }}>
              <h2 style={{ fontSize: '18px', width: 'fit-content', backgroundColor: '#eee', borderRadius: '4px', padding: '5px' }}>
                <Link href='/post/elaboracion-de-una-wiki'>
                  <a style={{ textDecoration: 'none', color: '#2d2d2d' }}>Elaboracion de una wiki</a>
                </Link>
              </h2>
              <small style={{ fontSize: '14px' }}>noviembre del 2020</small>

              <p style={{ marginTop: '20px' }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur porta eget neque at iaculis.
                Vestibulum velit ligula, pharetra sed mi,
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur porta eget neque at iaculis.
                Vestibulum velit ligula, pharetra sed mi.
            </p>
            </div>
          </ArticleStyled>
        </li>
      </ListArticlesStyled>
    </ListArticlesLayoutStyled>
  )
}
