import axios from "axios";
import React, { Component } from "react";

import Chart from "./Chart";
import CurrencySelector from './CurrencySelector';
import {
  app,
  appHeader,
  appTitle,
  appIntro,
} from "./App.css.js";

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isSelectingCurrency: false,
    }
  }
  componentDidMount() {
    this.getListOfAvailableCurrencies();
  }
  getListOfAvailableCurrencies = async () => {
    const currencyList = await axios
      .get(
        "http://localhost:3001/top_20"
      )
      .then(response => response.data.Data);
    this.setState({
      currencyList
    });
  };
  render() {
    return (
      <div className={ app }>
        <CurrencySelector isSelectingCurrency={ this.state.isSelectingCurrency } />
        <header className={ appHeader }>
          <h1 className={ appTitle }>Chart the Crypto Market</h1>
        </header>
        <p className={ appIntro }>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={ () => { this.setState({ isSelectingCurrency: true }) } }>Select Currency's</button>
        <Chart />
      </div>
    );
  }
}

export default App;
