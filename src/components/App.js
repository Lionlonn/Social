import React from "react";
import './App.scss'
import Header from "./header/header.jsx";
import Nav from "./nav_bar/nav.jsx";
import Main from "./main-posts/main.jsx";
import Dialogs from "./dialogs/dialogs.jsx";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";


const App = () => {
    return (
        <Router>
            <div>
                <Header />
                <div className="main-block">
                    <div className="container">
                        <div className="main-grid">
                            <Nav />
                            <Routes>
                                <Route path="main-posts" element={<Main/>}/>
                                <Route path="dialogs" element={<Dialogs/>}/>
                            </Routes>
                        </div>
                    </div>
                </div>
            </div>
        </Router>
        
    )
}



export default App;