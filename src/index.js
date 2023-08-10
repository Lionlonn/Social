import React from "react";
import ReactDOM from "react-dom";
import { createRoot } from 'react-dom/client';
import App from "./components/App";
import {store} from './redux/redux-store'
import { BrowserRouter } from "react-router-dom";

const renderEntireTree = (state) => {
    ReactDOM.render(<App 
        />, document.getElementById('root'));
}
  


renderEntireTree(store.getState())
store.subcriber(() => renderEntireTree(store.getState()))
