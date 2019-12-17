import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Timer from './Timer';
import Clock from './Clock';
import './index.css'

ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Timer />, document.getElementById('timer-example'));
ReactDOM.render(<Clock />, document.getElementById('clock'));

