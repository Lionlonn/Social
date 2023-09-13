import React from "react";
import './post.scss'
import Preloader from "../common/preloader/preloader.jsx";


const Post = (props) => {

    if (!props.profile) {
        return <Preloader/>
    }
    
    return (
        <div className="post-item" id={props.profile.userId}>
            <img src={props.profile.photos.small ? 
                props.profile.photos.small : 
                "https://phonoteka.top/uploads/posts/2022-09/1663304449_53-phonoteka-org-p-berserk-gats-art-vkontakte-65.jpg"}></img>
            { props.comment }
            <div>
                <span>Like {props.countLike}</span>
            </div>
        </div>
    )
}

export default Post