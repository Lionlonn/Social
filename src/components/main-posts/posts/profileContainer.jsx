import React, { Component } from "react";
import {  useLocation, useNavigate, useParams, } from "react-router-dom";
import '../posts/posts.scss'
import PostsContaienr from "../posts/postsContainer.jsx";
import axios from 'axios'
import ProfileInfo from "./profile.jsx";
import { connect } from "react-redux";
import { setUserProfile } from '../../../redux/posts-page-reducer'


function withRouter(Component) {
    function ComponentsWithRouterProp(props) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <Component 
                {...props}
                router = {{location, navigate, params}}    
            />
        )
    }
    return ComponentsWithRouterProp;
}


class ProfileContainer extends React.Component{

    
    componentDidMount (){
        let profileId = this.props.router.params.userId
        if (!profileId) {
            profileId = 2;
        }
        
        console.log(profileId);
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + profileId).then(response => {
            this.props.setUserProfile(response.data)
        });
        
    }
    
    render () {
        return (
            <div>
                <ProfileInfo {...this.props} />
                <PostsContaienr {...this.props}/>
            </div>
            
        )
    }

    
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile
})


export default connect(mapStateToProps, { setUserProfile }) (withRouter(ProfileContainer))