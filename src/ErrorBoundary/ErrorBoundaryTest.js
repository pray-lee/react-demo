import React from 'react'
import ErrorBoundary from "./ErrorBoundary";

// test component
class TestComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0
        }
    }
    handleClick = () => {
        this.setState(state => ({
            counter: state.counter += 1
        }))
    }
    render() {
        if (this.state.counter === 5) {
           throw new Error('I have trouble...')
        }
        return <div onClick={this.handleClick}>I'm right...</div>

    }
}

export default () => {
   return (
       <ErrorBoundary>
           <TestComponent/>
       </ErrorBoundary>
   )
}
