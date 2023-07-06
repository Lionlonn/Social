import React from "react";
import './nav.scss'
import { Link } from "react-router-dom"

const Nav = () => {
    return (
        <div className="navBar">
            <div className="container">
                <div className="nav">
                    <ul className="nav-list">
                        <li className="nav-item">
                            <Link to="/main-posts">Профиль</Link>
                            {/* <a href="/main-posts">Профиль</a> */}
                        </li>
                        <li className="nav-item">
                            <Link to="/dialogs">Сообщения</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="#">Новости</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="#">Музыка</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Nav