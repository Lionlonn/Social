import React from "react";
import './App.scss'
import Header from "./header/header.jsx";
import Nav from "./nav_bar/nav.jsx";
import Main from "./main-posts/main.jsx";
import Dialogs from "./dialogs/dialogs.jsx";
import {BrowserRouter as Router, Route} from "react-router-dom";

const App = () => {
    return (
        <div>
            <Header />
            <div className="main-block">
                <div className="container">
                    <div className="main-grid">
                        <Nav />
                        <Router>
                            <Route path="/main-posts" element={<Main/>}/>
                        </Router>
                    </div>
                </div>
            </div>
        </div>
    )
}



export default App;