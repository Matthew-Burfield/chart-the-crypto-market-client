import { css } from 'emotion'
import React, { Component } from 'react'
import Transition from 'react-transition-group/Transition'
import PropTypes from 'prop-types'
import Button from './Button'

import styles, {
	duration,
	startPosition,
	endPosition,
} from './CurrencySelector.css'

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
						className={styles.defaultStyle}
						style={{
							...transitionStyles[state],
						}}
					>
						{this.props.currencyList.map(currency => (
							<div key={currency.symbol} className={styles.currencyItemWrapper}>
								<div className={styles.currencyItemInnerWrapper}>
									<img
										alt={currency.name}
										height="50"
										width="50"
										src={`https://www.cryptocompare.com${currency.image_url}`}
									/>
									<div>{currency.name}</div>
								</div>
							</div>
						))}
						<div className={styles.buttonWrapper}>
							<Button medium onClick={this.props.toggleIsSelectingCurrency}>
								OK
							</Button>
						</div>
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
