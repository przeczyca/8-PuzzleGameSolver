import React, {Component} from "react"
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Dropdown, DropdownButton, FormControl, InputGroup } from "react-bootstrap"

import "../../styles.css"

class Converter extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            currencyToConvert: "USD",
            convertedCurrency: "CAD",
            valToConvert: "0",
            convertedValue: ""
        }
        this.handleValueChange = this.handleValueChange.bind(this)
    }

    handleValueChange(event) {
        this.setState({valToConvert: event.target.value})
     }

    async convertCurrencies(toConvert){
        const url = "https://api.exchangeratesapi.io/latest?base=" + this.state.currencyToConvert + "&symbols=" + this.state.convertedCurrency
        const response = await fetch(url)
        const data = await response.json()
        let rate = null
        for(var key in data.rates){
            rate = data.rates[key]
        }
        this.setState({convertedValue: (toConvert * rate).toFixed(2)})
    }

    render(){
        return(
            <div>
                <div className = "converterStyle">
                    <InputGroup className = "formStyle">
                        <DropdownButton
                            as = {InputGroup.Prepend}
                            variant = "secondary"
                            title = {this.state.currencyToConvert}
                            id = "curToConvert"
                        >
                            <Dropdown.Item onClick={() => this.setState({currencyToConvert: "USD"})}>USD</Dropdown.Item>
                            <Dropdown.Item onClick={() => this.setState({currencyToConvert: "CAD"})}>CAD</Dropdown.Item>
                            <Dropdown.Item onClick={() => this.setState({currencyToConvert: "EUR"})}>EUR</Dropdown.Item>
                            <Dropdown.Item onClick={() => this.setState({currencyToConvert: "GBP"})}>GBP</Dropdown.Item>
                            <Dropdown.Item onClick={() => this.setState({currencyToConvert: "MXN"})}>MXN</Dropdown.Item>
                            <Dropdown.Item onClick={() => this.setState({currencyToConvert: "PLN"})}>PLN</Dropdown.Item>
                            <Dropdown.Item onClick={() => this.setState({currencyToConvert: "RUB"})}>RUB</Dropdown.Item>
                        </DropdownButton>
                        <FormControl
                            size="lg"
                            type="text"
                            value = {this.state.valToConvert}
                            onChange = {this.handleValueChange}
                        />
                    </InputGroup>
                    <h1>to</h1>
                    <DropdownButton
                        as = {InputGroup.Prepend}
                        variant = "secondary"
                        title = {this.state.convertedCurrency}
                        id = "convertedCur"
                        className = "dds"
                        size = "lg"
                    >
                        <Dropdown.Item onClick={() => this.setState({convertedCurrency: "USD"})}>USD</Dropdown.Item>
                        <Dropdown.Item onClick={() => this.setState({convertedCurrency: "CAD"})}>CAD</Dropdown.Item>
                        <Dropdown.Item onClick={() => this.setState({convertedCurrency: "EUR"})}>EUR</Dropdown.Item>
                        <Dropdown.Item onClick={() => this.setState({convertedCurrency: "GBP"})}>GBP</Dropdown.Item>
                        <Dropdown.Item onClick={() => this.setState({convertedCurrency: "MXN"})}>MXN</Dropdown.Item>
                        <Dropdown.Item onClick={() => this.setState({convertedCurrency: "PLN"})}>PLN</Dropdown.Item>
                        <Dropdown.Item onClick={() => this.setState({convertedCurrency: "RUB"})}>RUB</Dropdown.Item>
                    </DropdownButton>
                    <Button variant = "secondary" size = "lg" onClick = {() => this.convertCurrencies(parseFloat(this.state.valToConvert))}>Convert</Button>
                </div>

                <div className = "converterStyle">
                    <h1>{this.state.convertedValue}</h1>
                </div>
            </div>
        )
    }
}

export default Converter