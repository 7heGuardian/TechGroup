import Footer from 'components/Footer'
import Navbar from 'components/Navbar'
import AppLayoutStyled from './styled'

export default function AppLayout({ children }) {
  return (
    <AppLayoutStyled>
      <Navbar />
      {children}
      <Footer />
    </AppLayoutStyled>
  )
}
