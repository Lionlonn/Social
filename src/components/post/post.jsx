import React from "react";
import './post.scss'





const Post = (props) => {
    
    
    return (
        <div className="post-item">
            <img src={props.img}></img>
            { props.comment }
            <div>
                <span>Like {props.countLike}</span>
            </div>
        </div>
    )
}

export default Post