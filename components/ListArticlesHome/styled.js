import styled from '@emotion/styled'

export const ListArticlesStyled = styled.section`
  width: 100%;

  & h3 {
    font-size: 12px;
    margin-bottom: 24px;
  }

  @media screen and (min-width: 320px) and (max-width: 900px) {
    grid-area: ListArticles;
  }
`

export const ArticleStyled = styled.article`
  width: 100%;
  cursor: pointer;

  display: grid;
  grid-template-columns: 2, 1fr;
  grid-template-rows: auto;
  grid-gap: 24px;

  .thumbnail {
    grid-column: 1;
    grid-row: 1;

    min-width: 240px;
    max-width: 100%;
    height: auto;
    border-radius: 0px 16px;
    object-fit: cover;
  }

  .info {
    grid-column: 2;
    grid-row: 1;

    font-size: 16px;
    line-height: 1.5;

    .tag {
      color: #FCA311;
      font-size: 12px;
    }

    .title {
      font-size: 24px;
    }

    .description {
      font-weight: 300;
      margin-bottom: 8px;
    }

    .metadata {
      font-weight: regular;
    }
  }


  @media screen and (min-width: 320px) and (max-width: 550px) {
    grid-template-columns: 1fr;
    justify-items: center;

    .thumbnail {
      grid-column: 1;
      grid-row: 1;
      width: 100%;
    }
    .info {
      grid-column: 1;
      grid-row: 2;
    }
  }
`