import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App"; 
import state, { subcriber } from './state/redux/state'
import { addPost, updatePostText } from './state/redux/state'
// import { subcriber } from './state/redux/state'

let renderEntireTree = (state) => {
    ReactDOM.render(<App 
        state={state} 
        addPost={addPost}
        updatePostText={updatePostText}
        />, document.getElementById('root'));
}

renderEntireTree(state)
subcriber(renderEntireTree)
