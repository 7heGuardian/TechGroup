import PropTypes from 'prop-types'
import { ButtonStyled } from './styled'

const Button = ({ title, handleClick }) => {
  return (
    <ButtonStyled onClick={handleClick}>
      {title}
    </ButtonStyled>
  )
}

Button.propTypes = {
  title: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired
}

Button.defaultProps = {
  title: 'Button Default',
  handleClick: () => console.log('handleClick Default')
}

export default Button
