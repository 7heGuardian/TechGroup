import Link from 'next/link'
import { NavbarStyled } from './styled'

export default function Navbar() {
    return (
        <NavbarStyled>
            <Link href='/'>
                <h1 style={{ fontSize: '48px', color: '#000', cursor: 'pointer' }}>
                    T.
                </h1>
            </Link>

            <div style={{ fontSize: '36px', color: '#8D99AE', display: 'inline-block', position: 'absolute' }}>
                |
            </div>
        </NavbarStyled>
    )
}