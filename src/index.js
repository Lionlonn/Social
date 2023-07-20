import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App"; 
import store from './state/redux/state'
import { BrowserRouter } from "react-router-dom";
// import state, { subcriber } from './state/redux/state'
// import { addPost, updatePostText } from './state/redux/state'
// import { subcriber } from './state/redux/state'

let renderEntireTree = (state) => {
    ReactDOM.render(<App 
        state={state} 
        dispatch={store.dispatch.bind(store)}
        store={store}
        />, document.getElementById('root'));
}

renderEntireTree(store.getState())
store.subcriber(renderEntireTree)
