import { BrandStyled, FooterStyled, BrandItemStyled } from './styled'
 
export default function Footer() {
  return (
    <FooterStyled>
      <BrandStyled>
        <h3 style={{ fontSize: '32px', color: 'white', fontFamily: 'Playfair Display'}}>Technogroup.</h3>
        <div style={{ display: 'flex', flexWrap: 'wrap', marginTop: '24px' }}>
          <BrandItemStyled />
          <BrandItemStyled />
          <BrandItemStyled />
          <BrandItemStyled />
        </div>
        <p style={{marginTop: '24px'}}>© 2020 Technogroup. Todos los derechos reservados.</p>
      </BrandStyled>
    </FooterStyled>
  )
}
