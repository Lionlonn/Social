import React from "react";
import image from '../image/main-fon.jpg'
import Preloader from "../../common/preloader/preloader.jsx";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }

    return (
            <div className="main">
                <div className="main-container">
                    <img className="profile-fon" src={image} alt="" />
                    <img className="profile-photo" src={props.profile.photos.small} alt=""></img>
                </div>
            </div>
        
    )
        
    }


export default ProfileInfo