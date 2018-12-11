import React, { Component } from 'react';
import CurrencySelector from './CurrencySelector';

class CurrencyForm extends Component {
    state = { currencies: ["AUD", "USD", "EURO", "GBP"] }

    handleSubmit(event) {
        event.preventDefault();
        console.log("submit clicked");
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>Select current currency</label><br />
                <CurrencySelector currencies={this.state.currencies} /><br />
                <label>Enter amount to covert</label><br />
                <input type="number" name="amount"></input><br />
                <label>Select target currency</label><br />
                <CurrencySelector currencies={this.state.currencies} /><br />
                <input type="submit" value="convert" />
            </form>
        );
    }
}

export default CurrencyForm;