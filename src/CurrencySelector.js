import React, { Component } from 'react'
import Transition from 'react-transition-group/Transition'
import PropTypes from 'prop-types'

const duration = 300
const startPosition = '-100vh'
const endPosition = '0'
const defaultStyle = {
	position: 'absolute',
	top: 0,
	left: 0,
	right: 0,
	bottom: 0,
	backgroundColor: 'black',
	transition: `transform ${duration}ms ease-in-out`,
	transform: `translateY(${startPosition})`,
	zIndex: 1,
	display: 'grid',
	gridTemplateColumns: 'repeat(5, 1fr)',
	gridTemplateRows: 'repeat(3, 1fr)',
	gridColumnGap: '5%',
	gridRowGap: '5%',
	color: 'white',
	justifyItems: 'center',
	alignItems: 'center',
}
const transitionStyles = {
	entering: { transform: `translateY(${startPosition})` },
	entered: { transform: `translateY(${endPosition})` },
}

export default class CurrencySelector extends Component {
	render() {
		return (
			<Transition
				in={this.props.isSelectingCurrency}
				timeout={duration}
				mountOnEnter
				unmountOnExit
			>
				{state => (
					<div
						style={{
							...defaultStyle,
							...transitionStyles[state],
						}}
					>
						{this.props.currencyList.map(currency => (
							<div key={currency.symbol}>
								<img
									alt={currency.name}
									height="50"
									width="50"
									src={`https://www.cryptocompare.com${currency.image_url}`}
								/>
								<div>{currency.name}</div>
							</div>
						))}
						<button onClick={this.props.toggleIsSelectingCurrency}>OK</button>
					</div>
				)}
			</Transition>
		)
	}
}

CurrencySelector.propTypes = {
	toggleIsSelectingCurrency: PropTypes.func.isRequired,
	currencyList: PropTypes.arrayOf(
		PropTypes.shape({
			image_url: PropTypes.string,
			name: PropTypes.string,
			symbol: PropTypes.string,
		}),
	),
	isSelectingCurrency: PropTypes.bool.isRequired,
}

CurrencySelector.defaultProps = {
	currencyList: [],
}
