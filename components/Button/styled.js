import styled from '@emotion/styled'

export const ButtonStyled = styled.button`
  min-width: 100px;
  max-width: 250px;
  padding: 10px;
  border: none;
  transition: filter ease-in-out 300ms;

  &:hover {
    filter: brightness( 0.7 )
  }

  &:active {
    transform: scale( 0.9 )
  }
`