import styled from '@emotion/styled'

export const MainHomeStyled = styled.main`
  height: 100%;
  min-height: 50vh;
  width: 100%;
  margin-top: 30px;
`

export const MainLayoutStyled = styled.div`
  width: 85%;
  height: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 120px;
  grid-template-rows: 1fr;
  column-gap: 20px;

  @media screen and (min-width: 320px) and (max-width: 900px) {
    grid-template-columns: 1fr;
    grid-template-rows: 100px 1fr;
    grid-template-areas:  "Tags"
                          "ListArticles";
    width: 90%;
  }
`

export const TagSectionStyled = styled.section`
  display: flex;
  flex-direction: column;

  & > h4 {
    text-align: center;
    height: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  & > ul {
    min-height: 170px;
  }

  & > ul:before {
    content: '';
    width: 0;
    height: 100%;
    position: absolute;
    border-width: 1px;
    border-style: solid;
    border-image:
    linear-gradient(
      to bottom,
      #ccc,
      #7a7a7a,
      #ccc
    ) 1 100%;
  }

  @media screen and (min-width: 320px) and (max-width: 900px) {
    & > ul {
      margin-top: 0 !important;
      min-height: min-content;
    }

    & > ul:before {
      content: none
    }
  }
`

export const TagStyled = styled.li`
  margin: 15px 0 0 10px;
  font-size: 15px;
  background-color: #eee;
  border-radius: 5px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;


  @media screen and (min-width: 320px) and (max-width: 900px) {
      margin: 0 ;
  }
`