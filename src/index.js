import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Timer from './Timer';
import Clock from './Clock';
import FragmentDemo, { ShortFragment } from './Fragment';
import './index.css'
import LazyComponent from './LazyComponent'

ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Timer />, document.getElementById('timer-example'));
ReactDOM.render(<Clock />, document.getElementById('clock'));
ReactDOM.render(<FragmentDemo />, document.getElementById('fragment'));
ReactDOM.render(<ShortFragment />, document.getElementById('short-fragment'));
ReactDOM.render(<LazyComponent />, document.getElementById('react-lazy-demo'));

