import Link from 'next/link'
import { ArticleStyled, ListArticlesLayoutStyled, ListArticlesStyled } from './styled'

export default function ListArticlesHome() {
  return (
    <ListArticlesLayoutStyled>
      <h3 style={{ color: '#2b2d42', fontSize: '16px', fontWeight: '700' }}>MAS RECIENTE</h3>

      <ListArticlesStyled>
        <li style={{ overflow: 'hidden' }}>
          <ArticleStyled >
            <figure style={{ width: '240px', height: '100%', borderRadius: '0px 16px' }}>
              <Link href='/post/elaboracion-de-una-wiki'>
                <a>
                  <img style={{ borderRadius: '0px 16px' }} src='/1_DBff-fZ7TtXwf9r-Aem1_A.jpeg' alt='imagen' width='100%' height='144px' />
                </a>
              </Link>
            </figure>

            <div style={{ width: '100%', height: 'min-content', margin: 'auto' }}>
              <h2 style={{ fontFamily: 'Playfair Display', fontSize: '24px', marginBottom: '24px'}}>
                <Link href='/post/elaboracion-de-una-wiki'>
                  <a>Elaboracion de una wiki</a>
                </Link>
              </h2>
              <p style={{ fontWeight: '300', marginBottom: '24px' }}>
                Una wiki es un sitio web cuyas páginas pueden ser editadas por múltiples voluntarios
                a través del navegador web. Los usuarios pueden crear, modificar y borrar un mismo
                texto que comparten.
              </p>
              <p>9 de noviembre del 2020</p>
            </div>
          </ArticleStyled>
        </li>
      </ListArticlesStyled>
    </ListArticlesLayoutStyled>
  )
}
