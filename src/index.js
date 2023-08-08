import React from "react";
import ReactDOM from "react-dom";
import { createRoot } from 'react-dom/client';

import App from "./components/App"; 
// import store from './redux/store'
import {store} from './redux/redux-store'
import { BrowserRouter } from "react-router-dom";

const renderEntireTree = (state) => {
    ReactDOM.render(<App 
        state={state} 
        dispatch={store.dispatch.bind(store)}
        store={store}
        />, document.getElementById('root'));
}



// const renderEntireTree = (state) => {
//     createRoot(document.getElementById('root')).render(
//         <App 
//             state={state} 
//             dispatch={store.dispatch.bind(store)} 
//             store={store} 
//         />
//     );
//   };
  


renderEntireTree(store.getState())
// store.subcriber(() => renderEntireTree(store.getState()))
// store.subcriber(renderEntireTree)
console.log(store.subcriber( () => {
    let state = store.getState()
}));
store.subcriber(() => {
    let state = store.getState()
    renderEntireTree(state)
})
