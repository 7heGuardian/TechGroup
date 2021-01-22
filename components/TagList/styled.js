import styled from '@emotion/styled'

export const TagListStyled = styled.section`
  height: auto;
  padding: 24px;
`

export const Tag = styled.section`
	cursor: pointer;
  position: relative;
  margin-bottom: 16px;

  font-size: 24px;

  color: #FFFFFF;
  transition: color 100ms linear;

  img {
  	height: 80px;
  	width: 100%;
  	border-radius: 0px 16px;
	  background-image:
	    linear-gradient(
	      rgba(0, 0, 0, 0.2),
	      rgba(0, 0, 0, 0.8)
	    );
  }

  h1 {
  	position: absolute;
  	top: 16px;
  	left: 16px;
  	text-shadow: 0px 0px 8px #000000;
  }

  :hover {
  	color: #FCA311;
  	transition: color 100ms linear;
  }
`