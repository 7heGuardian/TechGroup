import Link from 'next/link'
import { BrandStyled, FooterStyled, BrandItemStyled } from './styled'

export default function Footer() {
  return (
    <FooterStyled>
      <BrandStyled>
        <Link href='/'><h1>Technogroup.</h1></Link>
      </BrandStyled>
      <p>© 2020 - 2021 Technogroup. v1.1. Todos los derechos reservados.</p>
    </FooterStyled>
  )
}
