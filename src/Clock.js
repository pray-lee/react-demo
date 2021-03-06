import React from 'react'

export default class Clock extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            date: new Date()
        }
    }

    tick() {
        this.setState((state, props) => ({
            date: new Date(),
        }))
    }

    componentDidMount() {
        this.timerID = setInterval(() => this.tick(), 1000)
    }

    componentWillUnmount() {
        clearInterval(this.timerID)
    }

    render() {
        return (
            <div>
                <h2>Hello React</h2>
                <h3>It is {this.state.date.toLocaleTimeString()}, day: {this.state.date.toLocaleDateString()}</h3>
            </div>
        )
    }
}
