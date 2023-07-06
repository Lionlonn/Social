import React from "react";
import './header.scss'

const Header = () => {
    return (
        <div className="header">
            <div className="header-wrapper">
                <div className="container">
                    <div className="menu">
                        <ul>
                            <a>Menu</a>
                            <a>Price</a> 
                            <a>Registation</a>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header