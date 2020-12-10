import ListArticlesHome from 'components/ListArticlesHome'
import { MainStyled, TagSectionStyled, MainLayoutStyled, TagStyled } from './styled'

export default function MainHome() {
  return (
    <MainStyled>
      <MainLayoutStyled>
        <ListArticlesHome />

        <TagSectionStyled>
          <h4>Etiquetas</h4>

          <ul style={{ marginTop: '20px', position: 'relative' }}>
            <TagStyled>Wiki</TagStyled>
          </ul>
        </TagSectionStyled>

      </MainLayoutStyled>
    </MainStyled>
  )
}
