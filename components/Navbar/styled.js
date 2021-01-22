import styled from '@emotion/styled'

export const NavbarStyled = styled.section`
    width: 100%;
    z-index: 10;
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #FFFFFF;
    padding: 0px 16px;
    
    border-bottom-style: solid;
    border-width: 2px;
    border-color: #E5E5E5;

    & h1 {
        cursor: pointer;
        margin: 16px;
        font-size: 16px;
        color: #000000;
    }

    & p {
        margin:16px;
    }
`