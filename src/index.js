import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App"; 
import state from './state/redux/state'



ReactDOM.render(<App state={state}/>, document.getElementById('root'));