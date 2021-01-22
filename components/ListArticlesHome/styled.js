import styled from '@emotion/styled'

export const ListArticlesStyled = styled.section`
  width: auto;
  padding: 24px;

  h3 {
    font-size: 12px;
    margin-bottom: 24px;
  }

  @media screen and (min-width: 320px) and (max-width: 900px) {
    grid-area: ListArticles;
  }
`

export const ArticleStyled = styled.article`
  cursor: pointer;
  width: 100%;
  margin-bottom: 48px;

  display: grid;
  grid-template-columns: min-content auto;
  grid-template-rows: 12px auto auto 16px;
  grid-column-gap: 24px;
  grid-row-gap: 8px;

  font-size: 16px;

  .thumbnail {
    grid-column: 1;
    grid-row: 1 / span 4;

    min-width: 320px;
    max-width: 100%;
    height: auto;
    border-radius: 0px 16px;
    object-fit: cover;
  }

  .tag {
    grid-column: 2;
    grid-row: 1;

    color: #FCA311;
    font-size: 12px;
  }

  .title {
    grid-column: 2;
    grid-row: 2;

    font-size: 24px;
  }

  .description {
    grid-column: 2;
    grid-row: 3;

    font-weight: 300;
    line-height: 1.5;
  }

  .metadata {
    grid-column: 2;
    grid-row: 4;

    font-weight: regular;
  }
  


  @media screen and (min-width: 320px) and (max-width: 550px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto;

    .thumbnail {grid-column: 1; grid-row: 1; width: 100%; margin-bottom: 8px;}
    .tag {grid-column: 1; grid-row: 2;}
    .title {grid-column: 1; grid-row: 3;}
    .description {grid-column: 1; grid-row: 4;}
    .metadata {grid-column: 1; grid-row: 5;}
    }
  }
`