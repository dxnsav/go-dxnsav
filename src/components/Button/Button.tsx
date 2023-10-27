import PropTypes from 'prop-types';
import './Button.css'

const Button = ({text, type, onClick, style = 'filled', round = '4'}) => {
	return (
		<button className={`Button ${style}`} type={type} onClick={() => onClick()} style={{borderRadius: `${round}px`}}>
			{text}
		</button>
	)
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  style: PropTypes.string,
	round: PropTypes.string,
	type: PropTypes.string,
	onClick: PropTypes.func
};

export default Button
