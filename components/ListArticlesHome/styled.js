import styled from '@emotion/styled'

export const ListArticlesStyled = styled.ul`
  width: 100%;
  /* height: 100%; */
  margin-top: 20px;
  border-radius: 10px;
`

export const ArticleStyled = styled.article`
  display: grid;
  grid-template-columns: 250px 1fr;
  grid-template-rows: 1fr;
  width: 100%;
  column-gap: 20px;

  @media screen and (min-width: 320px) and (max-width: 550px) {
    grid-template-columns: 1fr;
    grid-template-rows: 250px 1fr;
    justify-items: center;
  }
`

export const ListArticlesLayoutStyled = styled.section`
  height: 100%;
  width: 100%;

  @media screen and (min-width: 320px) and (max-width: 900px) {
    grid-area: ListArticles;
  }
`