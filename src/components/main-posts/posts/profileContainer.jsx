import React from "react";
import '../posts/posts.scss'
import PostsContaienr from "../posts/postsContainer.jsx";
import axios from 'axios'
import ProfileInfo from "./profile.jsx";
import { connect } from "react-redux";
import { setUserProfile } from '../../../redux/posts-page-reducer'

class ProfileContainer extends React.Component{

debugger
    componentDidMount (){
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`).then(response => {
            this.props.setUserProfile(response.data)
            // console.log(this.props.setUserProfile(response.data));
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

export default connect(mapStateToProps, { setUserProfile }) (ProfileContainer)