import React, { Component } from 'react'
import Transition from 'react-transition-group/Transition'

const duration = 300
const defaultStyle = {
	backgroundColor: 'black',
	width: '100vw',
	height: '100vh',
	transition: `transform ${duration}ms ease-in-out`,
	transform: 'translateY(-700px)'
}
const transitionStyles = {
	entering: { transform: 'translateY(-700px)' },
	entered: { transform: 'translateY(0px)' },
	exiting: { transform: 'translateY(0px)' },
	exited: { transform: 'translateY(-700px)' },
}

export default class CurrencySelector extends Component {
	render() {
		return (
			<Transition
				in={ this.props.isSelectingCurrency }
				timeout={ duration }
			>
				{(state) => (
					<div style={{
						...defaultStyle,
						...transitionStyles[state],
					}}>Currency Selector</div>
				)}
			</Transition>
		)
	}
}
