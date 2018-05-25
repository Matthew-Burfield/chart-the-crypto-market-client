import axios from 'axios'
import { connect } from 'react-redux'
import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Chart from '../Chart'
import CurrencySelector from './CurrencySelector'
import { getCurrentlySelected, getTop20 } from '../redux/actions/cryptoActions'
import { top20Props } from '../utils/propTypes'
import styles from './Home.css'

class Home extends Component {
	static propTypes = {
		getCurrentlySelected: PropTypes.func.isRequired,
		getTop20: PropTypes.func.isRequired,
		top_20: top20Props,
	}
	constructor(props) {
		super(props)
		this.state = {
			isSelectingCurrency: false,
		}
	}
	componentDidMount() {
		this.props.getCurrentlySelected()
		this.props.getTop20()
	}
	toggleIsSelectingCurrency = () => {
		this.setState(prevState => ({
			isSelectingCurrency: !prevState.isSelectingCurrency,
		}))
	}
	render() {
		return (
			<div className={styles.app}>
				<CurrencySelector
					isSelectingCurrency={this.state.isSelectingCurrency}
					toggleIsSelectingCurrency={this.toggleIsSelectingCurrency}
				/>
				<header className={styles.appHeader}>
					<h1 className={styles.appTitle}>Chart the Crypto Market</h1>
				</header>
				<button onClick={this.toggleIsSelectingCurrency}>Select Currency's</button>
				<div className={styles.chartContainer}>
					<Chart />
				</div>
			</div>
		)
	}
}

const mapDispatchToProps = dispatch => ({
	getCurrentlySelected: () => dispatch(getCurrentlySelected()),
	getTop20: () => dispatch(getTop20()),
})

export default connect(null, mapDispatchToProps)(Home)
