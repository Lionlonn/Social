import React from "react";
import './App.scss'
import Header from "./header/header.jsx";
import Nav from "./nav_bar/nav.jsx";
import Main from "./main-posts/main.jsx";
import Dialogs from "./dialogs/dialogs.jsx";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import { Provider } from 'react-redux';
import {store} from '../redux/redux-store'


const App = (props) => {
    return (
        <Provider store={store}>
            <Router>
                <div>
                    <Header />
                    <div className="main-block">
                        <div className="container">
                            <div className="main-grid">
                                <Nav />
                                <Routes>
                                    <Route path="/main-posts" element={<Main 
                                        postsPage={props.state.postsPage}
                                        dispatch={props.dispatch}/>}/>
                                    <Route path="/dialogs" element={<Dialogs 
                                        store={props.store}
                                        dispatch={props.dispatch}
                                        />}/>
                                </Routes>
                            </div>
                        </div>
                    </div>
                </div>
            </Router>
        </Provider>
    )
}



export default App;