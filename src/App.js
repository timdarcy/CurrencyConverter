import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CurrencyForm from './CurrencyForm.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="app-heading">Currency Converter</h1>
        <CurrencyForm />
      </div>
    );
  }
}

export default App;
