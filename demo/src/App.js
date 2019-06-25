import React, {Component} from 'react'
import InputDemo from './inputChange'
export default class App extends Component{
    render() {
        const message = 'Fuck you mother fucker Reactjs'
        const styleObj = {
            fontSize: '20px',
            color: '#ff6700',
        }
        return (
            <div>
                hello react.js!<br/>
                <p style={styleObj}>{ message }</p>
                <section className='input-area'>
                    <InputDemo/>
                </section>
            </div>
        )
    }
}