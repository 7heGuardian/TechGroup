import styled from '@emotion/styled'

export const SendCommentPostStyled = styled.form`
  /* width: 100%; */
  height: 100%;

  @media screen and (min-width: 320px) and (max-width: 450px) {
    display: flex;
    margin: 0;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`

export const CommentToSendStyled = styled.input`
  width: 70%;
  height: 100%;
  margin-right: 20px;
  padding: 10px 20px;
  color: #222222;
  border: none;
  background-color: #eee;
  border-radius: 5px;

  @media screen and (min-width: 320px) and (max-width: 450px) {
    margin: 0;
    width: 100%;
  }
`

export const ButtonToSendComment = styled.button`
  width: 100%;
  height: 100%;
  margin: 20px;
  color: white;
  font-weight: bold;
  border: none;
  background-color: #7a7a7a;
  width: 200px;
  height: 30px;
  border-radius: 5px;

  @media screen and (min-width: 320px) and (max-width: 450px) {
    margin: 20px 0;
  }
`