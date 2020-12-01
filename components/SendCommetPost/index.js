import { ButtonToSendComment, CommentToSendStyled, SendCommentPostStyled } from "./styled"

export default function SendCommentPost({ input, setInput, handleSubmit, commentError }) {
  return (
    <SendCommentPostStyled>
      {
        commentError && <small style={{ fontSize: '14px', color: '#ff4444' }}>Inserte un comentario valido.</small>
      }
      <CommentToSendStyled
        value={input}
        onChange={e => setInput(e.target.value)}
        className='messageSender__input' type='text'
        placeholder='Dejar un comentario...'
      />
      <ButtonToSendComment
        type='submit'
        onClick={handleSubmit}>
        Enviar comentario
      </ButtonToSendComment>
    </SendCommentPostStyled>
  )
}
