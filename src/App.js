import axios from 'axios'
import React, { Component } from 'react'

import { API_URL } from './constants'
import Chart from './Chart'
import CurrencySelector from './CurrencySelector'
import styles from './App.css.js'

class App extends Component {
	constructor(props) {
		super(props)
		this.state = {
			isSelectingCurrency: false,
		}
	}
	componentDidMount() {
		this.getListOfAvailableCurrencies()
	}
	getListOfAvailableCurrencies = async () => {
		const currencyList = await axios
			.get(`${API_URL}/top_20`)
			.then(response => response.data.data)
		this.setState({
			currencyList,
		})
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
					currencyList={this.state.currencyList}
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

export default App
