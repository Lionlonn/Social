import React from "react";
import './post.scss'
import Preloader from "../common/preloader/preloader.jsx";


const Post = (props) => {

    if (!props.profile) {
        return <Preloader/>
    }
    console.log(props.profile);
    
    return (
        <div className="post-item" id={props.profile.userId}>
            <img src={props.profile.photos.small}></img>
            { props.comment }
            <div>
                <span>Like {props.countLike}</span>
            </div>
        </div>
    )
}

export default Post