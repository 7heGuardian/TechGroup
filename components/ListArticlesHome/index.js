import Link from 'next/link'
import { ListArticlesStyled,ArticleStyled } from './styled'

export default function ListArticlesHome() {
  return (              
    <ListArticlesStyled>
      <h3>MÁS RECIENTES</h3>
      <Link href='/post/elaboracion-de-una-wiki'>
        <ArticleStyled>
          <img class='thumbnail' src='/1_DBff-fZ7TtXwf9r-Aem1_A_2.jpeg' width='320' alt='imagen'/>
          <h2 class='tag'>WIKI</h2>
          <h1 class='title'>Elaboracion de una wiki</h1>
          <p class='description'>
            Una wiki es un sitio web cuyas páginas pueden ser editadas por múltiples voluntarios a través del navegador web. Los usuarios pueden crear, modificar y borrar un mismo texto que comparten.
          </p>
          <p class='metadata'>10 de noviembre del 2020</p>
        </ArticleStyled>
      </Link>
    </ListArticlesStyled>
  )
}
