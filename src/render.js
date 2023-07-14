import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { addPost, updatePostText } from './state/redux/state'


export let renderEntireTree = (state) => {
    ReactDOM.render(<App 
        state={state} 
        addPost={addPost}
        updatePostText={updatePostText}
        />, document.getElementById('root'));
}
