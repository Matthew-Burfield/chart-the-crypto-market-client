import { connect } from 'react-redux'
import { css } from 'emotion'
import React, { Component } from 'react'
import Transition from 'react-transition-group/Transition'
import PropTypes from 'prop-types'
import Button from '../Button'
import styles, {
	duration,
	startPosition,
	endPosition,
} from './CurrencySelector.css'
import { top20Props } from '../utils/propTypes'

const transitionStyles = {
	entering: { transform: `translateY(${startPosition})` },
	entered: { transform: `translateY(${endPosition})` },
}

class CurrencySelector extends Component {
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
						{this.props.top_20.map(currency => (
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
	top_20: top20Props,
	isSelectingCurrency: PropTypes.bool.isRequired,
}

const mapStateToProps = state => ({
	top_20: state.crypto.top_20,
})

export default connect(mapStateToProps)(CurrencySelector)
