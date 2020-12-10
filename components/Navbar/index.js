import {NavbarStyled} from './styled'

export default function Navbar() {
    return(
        <NavbarStyled>
            <h1 style={{
            fontSize: '48px',
            color: '#000',
            }}>T.</h1>
            <h1 style={{
                fontSize: '36px',
                color: '#8D99AE',
                display: 'inline-block',
                position: 'absolute',
            }}>|</h1>
        </NavbarStyled>
    )
}