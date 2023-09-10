import React from "react";
import './App.scss'
import Header from "./header/header.jsx";
import Nav from "./nav_bar/nav.jsx";
import Main from "./main-posts/main.jsx";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import { Provider } from 'react-redux';
import {store} from '../redux/redux-store'
import DialogsContainer from "./dialogs/dialogsContainer.jsx";
import UserContainer from "./users/UsersContainer.jsx";
import ProfileContainer from "./main-posts/posts/profileContainer.jsx";


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
                                    <Route path="/profile/*" element={<ProfileContainer />}/>
                                    <Route path="/dialogs" element={<DialogsContainer />}/>
                                    <Route path="/users" element={<UserContainer/>}/>
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