import { HomeLayoutStyled } from './styled'

export default function HomeLayout({ children }) {
  return (
    <HomeLayoutStyled>
      {children}
    </HomeLayoutStyled>
  )
}
