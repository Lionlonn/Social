import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App"; 
import state from './state/redux/state'
import { renderEntireTree } from './render'

renderEntireTree(state)

