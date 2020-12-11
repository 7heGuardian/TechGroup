import styled from '@emotion/styled'

export const HeaderHomeStyled = styled.header`
  height: 480px;
  width: 100%;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image:
    linear-gradient(
      rgba(0, 0, 0, 0.2),
      rgba(0, 0, 0, 0.8)
    ),
    url('/code-letters-wallpaper.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  font-size: 144px;
  color: #fff;

  & h1 {
    margin-top: 30px;
    transition: font-size ease-in-out 300ms;
  }

  @media screen and (min-width: 700px) and (max-width: 1000px) {
    font-size: 100px;
  }

  @media screen and (min-width: 400px) and (max-width: 699px) {
    font-size: 60px;
  }

  @media screen and (min-width: 320px) and (max-width: 399px) {
    font-size: 45px;
  }
`