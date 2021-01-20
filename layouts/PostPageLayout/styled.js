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
  width: 100%;
  height: 100%;
  margin: 24px auto 0 auto;
  font-size: 16px;
  line-height: 1.75;
  text-align: justify;

  & h2 {
    font-size: 24px;
    padding: 16px 0px;
  }

  & h3 {
    font-size: 20px;
  }

  & p {
    padding: 8px 0px;
  }

  & b {
    font-weight: 700;
  }

  & ul, ol {
    padding: 0px 24px;
    line-height: 1.5;
  }

  & ul > li {
    list-style-type: disc;
  }

  & ol > li {
    list-style-type: decimal;
  }

  & ul > li,
    ol > li {
      margin: 10px 0;
      padding: 0 12px;
      white-space: normal;
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

export const PostPageImageDescription = styled.section`
  width: 400px;
  height: min-content;
  margin: 16px auto;
  text-align: center;
  font-weight: 300;
  font-size: 14px;

  @media screen and (min-width: 320px) and (max-width: 500px){
    width: 300px;
  }
`

export const PostPageImageContainer = styled.figure`
  width: 400px;
  height: min-content;
  margin-bottom: 5px;

  & img {
    border-radius: 0px 16px;
    object-fit: cover;
  }

  @media screen and (min-width: 320px) and (max-width: 500px){
    width: 300px;
    height: 200px;
  }
`

export const MetaDataPostPage = styled.section`
  width: 100%;
  height: 100%;
  margin-top: 30px;
  border: 1px solid #8D99AE;
  font-size: 16px;
  font-weight: 300;
  padding: 8px 0px;
  color: #000;
  display: flex;
  text-align: center;
  text-indent: 24px;

  @media screen and (min-width: 320px) and (max-width: 800px){
    width: 95%;
    margin: 30px auto 0 auto;
  }
`