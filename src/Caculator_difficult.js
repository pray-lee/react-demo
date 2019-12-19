import React from 'react'
const scaleNames = {
    c: 'Celsius',
    f: 'Fahrenheit'
}

// conver fn
function toCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9
}
function toFahreheit(celsius) {
    return (celsius * 9 / 5) + 32
}

function convert(temperature, convert) {
    const input = parseFloat(temperature)
    if (Number.isNaN(input)) {
        return ''
    }
    const output = convert(input)
    const rounded = Math.round(output * 1000) / 1000
    return rounded.toString()
}

// BoilingVerdict
const BoilingVerdict = props => {
    if (props.celsius >= 100) {
        return <p>The water would boil.</p>
    }
    return <p>The water would not boil</p>
}

// input temperature
class TemperatureInput extends React.Component {
    constructor(props) {
        super(props)
        this.handleChange = this.handleChange.bind(this)
        this.state = {temperature: ''}
    }
    handleChange(e) {
        this.props.onTemperatureChange(e.target.value)
    }
    render() {
        const temperature = this.props.temperature
        const scale = this.props.scale
        return (
            <fieldset>
                <legend>Enter temperature in {scaleNames[scale]}</legend>
                <input value={temperature}
                    onChange={this.handleChange}/>
            </fieldset>
        )
    }
}

// Calculator
class Calculator extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            temperature: '',
            scale: 'c'
        }
        this.handleCelsiusChange.bind(this)
        this.handleFahrenheitChange.bind(this)
    }
    handleCelsiusChange(temperature) {
        this.setState(() => ({
            temperature,
            scale: 'c'
        }))
    }

    handleFahrenheitChange(temperature) {
        this.setState(() => ({
            temperature,
            scale: 'f'
        }))
    }

    render() {
        const scale = this.state.scale
        const temperature = this.state.temperature
        const celsius = scale === 'f' ? convert(temperature, toCelsius): temperature
        const fahrenheit = scale === 'c' ? convert(temperature, toFahreheit): temperature
        return (
            <div>
                <TemperatureInput scale="c" temperature={celsius} onTemperatureChange={this.handleCelsiusChange}/>
                <TemperatureInput scale="f" temperature={fahrenheit} onTemperatureChange={this.handleFahrenheitChange}/>

                <BoilingVerdict celsius={parseFloat(celsius)}></BoilingVerdict>
            </div>
        )
    }
}