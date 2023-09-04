import React from "react";
import './main.scss'
import image from './image/main-fon.jpg'
import PostsContaienr from "./posts/postsContainer.jsx";
import ProfileInfo from "./posts/profile.jsx";

const Profile = (props) => {
    return (
        <div className="main">
            <div className="main-container">
                <ProfileInfo  profile={props.props}/>
                <PostsContaienr/>
            </div>
                
        </div>
    )
}

export default Profile