import styled from '@emotion/styled'

export const BgHeaderPostPage = styled.div`
  height: 440px;
  width: 100%;
  background-color: #2B2D42;
  background-image:
  linear-gradient(
    rgba(0, 0, 0, 0.8),
    rgba(0, 0, 0, 0.8)
  ), url('/1_DBff-fZ7TtXwf9r-Aem1_A.jpeg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`

export const PostPageDescription = styled.section`
  width: 80%;
  height: 100%;
  margin: 30px auto 0 auto;

  & p {
    line-height: 1.4;
  }

  @media screen and (min-width: 320px) and (max-width: 500px){
    width: 98%;

    & p {
      padding: 0 10px;
      font-size: 15px;
    }

    & h3 {
      padding: 0 10px;
    }
  }
`

export const PostPageImageDescription = styled.figure`
  width: 400px;
  height: 300px;
  background-color: #a5a5a5;
  margin: 0 auto;
  border-radius: 10px;

  @media screen and (min-width: 320px) and (max-width: 500px){
    width: 300px;
    height: 200px;
  }
`

export const MetaDataPostPage = styled.section`
  width: 100%;
  height: 30px;
  margin-top: 30px;
  border-radius: 3px;
  border: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: 320px) and (max-width: 800px){
    width: 95%;
    margin: 30px auto 0 auto;
  }
`