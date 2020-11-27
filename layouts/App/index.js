import { GlobalStyled, AppLayoutStyled } from './styled';

function AppLayout({ children }) {
  return (
    <AppLayoutStyled>
      <GlobalStyled />
      {children}
    </AppLayoutStyled>
  )
}

export default AppLayout
