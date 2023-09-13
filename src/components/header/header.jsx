import React from "react";
import './header.scss'
import { Link } from "react-router-dom"

const Header = (props) => {
    return (
        <div className="header">
            <div className="header-wrapper">
                <div className="container">
                    <div className="login-block">
                        { props.isAuth ? props.login : <Link to={'/login'}>login</Link> }
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header