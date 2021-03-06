import React from 'react'
import ReactDOM from 'react-dom'
const appRoot = document.getElementById('root')
const modalRoot = document.getElementById('modal-root')

class Modal extends React.Component {
   constructor(props) {
       super(props);
       this.el = document.createElement('div')
   }
   componentDidMount() {
       modalRoot.appendChild(this.el)
   }
   componentWillUnmount() {
       modalRoot.removeChild(this.el)
   }
   render() {
       return (
           ReactDOM.createPortal(
               this.props.children,
               this.el
           )
       )
   }
}

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false
        }
        this.handleShow = this.handleShow.bind(this)
        this.handleHide = this.handleHide.bind(this)
    }
    handleShow() {
        this.setState({
            showModal: true
        })
    }
    handleHide() {
        this.setState({
            showModal: false
        })
    }
    render() {
        const modal = this.state.showModal ? (
            <Modal>
                <div className="modal">
                    <div>
                        portal modal
                    </div>
                    <button onClick={this.handleHide}>Hide modal</button>
                </div>
            </Modal>
        ) : null
        return (
            <div className="app">
                this div has overflow: hidden
                <button onClick={this.handleShow}>Show modal</button>
            </div>
        )
    }
}
