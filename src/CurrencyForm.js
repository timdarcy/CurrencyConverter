import React, { Component } from 'react';
import CurrencySelector from './CurrencySelector';
import Axios from 'axios';

class CurrencyForm extends Component {
    constructor(props) {
        super(props);
        this.state = { currencies: ["AUD", "USD", "EUR", "GBP"], currencyFrom: "AUD", currencyTo: "AUD", amountFrom: 0, amountTo: 0 }
        this.handleSelect = this.handleSelect.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInput = this.handleInput.bind(this);
    }


    handleSubmit(event) {
        event.preventDefault();
        console.log(event);
        Axios.post('/server', { "currencyFrom": this.state.currencyFrom, "amountFrom": this.state.amountFrom, "currencyTo": this.state.currencyTo }).then((res) => {
            console.log(res.data.result);
            this.setState({ amountTo: res.data.result.toFixed(2) })
        })

    }
    handleSelect(event) {
        console.log(event.target.name, event.target.value);
        this.setState({ [event.target.name]: event.target.value });

    }

    handleInput(event) {
        this.setState({ [event.target.name]: event.target.value })
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>Select current currency</label><br />
                <select name="currencyFrom" value={this.state.currencyFrom} onChange={this.handleSelect}>
                    {this.state.currencies.map((name, index) => {
                        return <option key={index} value={name} >{name}</option>
                    })}
                </select><br />

                <input type="number" name="amountFrom" onChange={this.handleInput}></input> <br />
                <label>Select target currency</label> <br />
                <select name="currencyTo" value={this.state.currencyTo} onChange={this.handleSelect}>
                    {this.state.currencies.map((name, index) => {
                        return <option key={index} value={name} >{name}</option>
                    })}
                </select><br />

                <input type="submit" value="convert" onChange={this.handleInput} /><br />
                <label>Converted Amount</label> <br />
                <input type="number" name="amountFrom" value={this.state.amountTo} onChange={this.handleInput}></input>
            </form >
        );
    }
}

export default CurrencyForm;