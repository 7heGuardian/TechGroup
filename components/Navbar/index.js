import Link from 'next/link'
import { NavbarStyled } from './styled'

export default function Navbar() {
    return (
        <NavbarStyled>
            <Link href='/'><h1>Technogroup.</h1></Link>
        </NavbarStyled>
    )
}