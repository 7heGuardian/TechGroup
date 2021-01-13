import { BrandStyled, FooterStyled, BrandItemStyled } from './styled'

export default function Footer() {
  return (
    <FooterStyled>
      <BrandStyled>
        <h1 style={{ fontSize: '32px', color: 'white' }}>Technogroup.</h1>
        <div style={{ display: 'flex', flexWrap: 'wrap', marginTop: '24px' }}>
          <BrandItemStyled />
          <BrandItemStyled />
          <BrandItemStyled />
          <BrandItemStyled />
        </div>
        <p style={{ marginTop: '24px', textAlign: 'center' }}>© 2020 Technogroup. v1.0. Todos los derechos reservados.</p>
      </BrandStyled>
    </FooterStyled>
  )
}
