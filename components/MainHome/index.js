import ListArticlesHome from 'components/ListArticlesHome'
import TagList from 'components/TagList'
import { MainStyled, TagSectionStyled, TagStyled } from './styled'

export default function MainHome() {
  return (
    <MainStyled>
      <ListArticlesHome/>
      <TagList />
    </MainStyled>
  )
}
