import { CommentStyled, ListCommentsStyled } from './styled'

export default function ListCommentsPost({ comments }) {
  return (
    <ListCommentsStyled>
      {
        comments.map(comment =>
          <CommentStyled key={comment.id}>
            {comment.text}
          </CommentStyled>
        )
      }
    </ListCommentsStyled>
  )
}