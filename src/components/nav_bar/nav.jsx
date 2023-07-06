import React from "react";
import './nav.scss'


const Nav = () => {
    return (
        <div className="navBar">
            <div className="container">
                <div className="nav">
                    <ul className="nav-list">
                        <li className="nav-item">
                            <a href="/main-posts">Профиль</a>
                        </li>
                        <li className="nav-item">
                            <a href="/dialogs">Сообщения</a>
                        </li>
                        <li className="nav-item">
                            <a href="#">Новости</a>
                        </li>
                        <li className="nav-item">
                            <a href="#">Музыка</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Nav