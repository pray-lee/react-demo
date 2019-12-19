import React from 'react'

export default class Timer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      seconds: 0
    }
  }

  tick() {
    this.setState(state => ({
      seconds: state.seconds + 1
    }))
  }

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  render() {
    // aria-label 无障碍辅助功能
    const labelText = 'Web Accessibility Initiative - Accessible Rich Internet Applications'
    return (
      <div aria-label={labelText}>
        timer components:
        <p>Seconds: {this.state.seconds}</p>
      </div>
    )
  }
}