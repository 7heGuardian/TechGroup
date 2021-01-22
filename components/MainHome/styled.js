import styled from '@emotion/styled'

export const MainStyled = styled.main`
  width: 100%;
  height: auto;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 400px;
  grid-template-rows: auto;

  @media screen and (min-width: 320px) and (max-width: 900px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    grid-template-areas:  "ListArticles"
                          "TagList";
    width: auto;
  }
`