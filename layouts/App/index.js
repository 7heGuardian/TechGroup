import Footer from 'components/Footer'
import AppLayoutStyled from './styled'

export default function AppLayout({ children }) {
  return (
    <AppLayoutStyled>
      {children}
      <Footer />
    </AppLayoutStyled>
  )
}
