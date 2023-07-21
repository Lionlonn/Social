import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App"; 
import store from './state/redux/store'
import { BrowserRouter } from "react-router-dom";

let renderEntireTree = (state) => {
    ReactDOM.render(<App 
        state={state} 
        dispatch={store.dispatch.bind(store)}
        store={store}
        />, document.getElementById('root'));
}

renderEntireTree(store.getState())
store.subcriber(renderEntireTree)
