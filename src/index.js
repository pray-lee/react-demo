import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Timer from './Timer';
import Clock from './Clock';
import ContextDemo from './Context/ContextDemo';
import ErrorBoundaryTest from './ErrorBoundary/ErrorBoundaryTest';
import FragmentDemo, { ShortFragment } from './Fragment';
import CustomTextInput, {
    AutoFocusTextInput,
    FunctionalCustomTextInput,
    FunctionalNestCallbackCustomTextInput
} from './Refs&Dom/RefsDemo';
import './index.css'
import LazyComponent from './LazyComponent'

ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Timer />, document.getElementById('timer-example'));
ReactDOM.render(<Clock />, document.getElementById('clock'));
ReactDOM.render(<FragmentDemo />, document.getElementById('fragment'));
ReactDOM.render(<ShortFragment />, document.getElementById('short-fragment'));
ReactDOM.render(<LazyComponent />, document.getElementById('react-lazy-demo'));
ReactDOM.render(<ContextDemo />, document.getElementById('context-demo'));
ReactDOM.render(<ErrorBoundaryTest />, document.getElementById('errorBoundary-area'));
ReactDOM.render(<CustomTextInput />, document.getElementById('refs-area'));
ReactDOM.render(<AutoFocusTextInput />, document.getElementById('class-refs-area'));
ReactDOM.render(<FunctionalCustomTextInput />, document.getElementById('functional-refs-area'));
ReactDOM.render(<FunctionalNestCallbackCustomTextInput />, document.getElementById('functional-nest-refs-area'));

