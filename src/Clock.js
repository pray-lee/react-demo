import React from 'react'

export default class Clock extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            date: new Date()
        }
    }
    
    tick() {
        this.setState(() => ({
            date: new Date(),
            // a: '1'
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
                <h3>It is {this.state.date.toLocaleTimeString()}</h3>
            </div>
        )
    }
}