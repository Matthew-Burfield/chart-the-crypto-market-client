import axios from "axios";
import React, { Component } from "react";

import Chart from "./Chart";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  componentDidMount() {
    this.getListOfAvailableCurrencies();
  }
  getListOfAvailableCurrencies = async () => {
    const currencyList = await axios
      .get(
        "https://min-api.cryptocompare.com/data/top/volumes?tsym=USD&limit=20"
      )
      .then(response => response.data.Data);
    this.setState({
      currencyList
    });
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Chart the Crypto Market</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Chart />
      </div>
    );
  }
}

export default App;
