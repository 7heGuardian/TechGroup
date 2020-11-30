import { BrandStyled, FooterStyled, BrandItemStyled } from './styled'

export default function Footer() {
  return (
    <FooterStyled>
      <BrandStyled>
        <h3 style={{ fontSize: '20px' }}>TechnoGroup</h3>
        <div style={{ display: 'flex', flexWrap: 'wrap', marginTop: '20px' }}>
          <BrandItemStyled />
          <BrandItemStyled />
          <BrandItemStyled />
          <BrandItemStyled />
        </div>
      </BrandStyled>
    </FooterStyled>
  )
}
