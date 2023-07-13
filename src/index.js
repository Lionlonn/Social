import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App"; 
import state from './state/redux/state'
import { addPost } from './state/redux/state'




ReactDOM.render(<App state={state} addPost={addPost}/>, document.getElementById('root'));