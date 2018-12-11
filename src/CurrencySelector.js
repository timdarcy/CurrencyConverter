import React, { Component } from 'react';
class CurrencySelector extends Component {
    constructor(props) {
        super(props);
        this.state = { currencies: props.currencies };
    }
    render() {
        return (
            <select>
                {this.state.currencies.map((name, index) => {
                    return <option key={index} value={name}>{name}</option>
                })}
            </select>
        );
    }
}

export default CurrencySelector;