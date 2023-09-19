import React from "react";
import Header from "./header.jsx";
import axios from 'axios'
import { connect } from "react-redux"
import { getUser } from "../../redux/auth-reducer.js"





class HeaderContainer extends React.Component {

    
    componentDidMount() {
        this.props.getUser()
    }

    render() {
        return <Header {...this.props} />
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    
})


export default connect(mapStateToProps, {getUser}) (HeaderContainer);