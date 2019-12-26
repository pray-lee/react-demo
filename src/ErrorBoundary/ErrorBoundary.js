import React from 'react'
class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            errorInfo: null
        }
    }
    componentDidCatch(error, errorInfo) {
        // Catch errors in any components below and re-render with error message
        this.setState({
            error: error,
            errorInfo: errorInfo
        })
    }
    render() {
        if (this.state.errorInfo) {
            // error path
            return (
                <div>
                    <h2>Something went wrong.</h2>
                    <p>{this.state.error && this.state.error.toString()}</p>
                    <p>{this.state.errorInfo.componentStack}</p>
                </div>
            )
        }
        // Normally ,just render children...
        return this.props.children
    }
}

export default ErrorBoundary
