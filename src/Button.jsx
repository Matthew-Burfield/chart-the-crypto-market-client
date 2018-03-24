import React from 'react'
import PropTypes from 'prop-types'
import styled from 'react-emotion'
import { button, active, outline, primary } from './utils/colors'

const Button = props => (
	<div className={props.className} onClick={props.onClick}>
		{props.children}
	</div>
)

const StyledButton = styled(Button)`
	background-color: ${button};
	color: ${primary};
	height: 20px;
	min-width: 60px;
	transition: background-color 300ms ease-in-out;
	border-radius: 5px;
	padding: ${props => {
		if (props.large) return '15px'
		if (props.medium) return '10px'
		if (props.small) return '5px'
		return '10px'
	}};

	&:hover {
		background-color: ${active};
		cursor: pointer;
	}
`

Button.propTypes = {
	onClick: PropTypes.func,
	children: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
	large: PropTypes.bool,
	medium: PropTypes.bool,
	small: PropTypes.bool,
	className: PropTypes.string.isRequired,
}

Button.propTypes = {
	onClick: () => {},
	large: false,
	medium: false,
	small: false,
}

export default StyledButton
