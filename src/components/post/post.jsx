import React from "react";
import './post.scss'


const { data: posts } = require("../../data/post/post.json")

const PostUser = (props) => {
    return (
        <div className="post-item">
            <img src={props.avatar}></img>
            { props.comment }
            <div>
                <span>Like {props.countLike}</span>
            </div>
        </div>
    )
}


const Post = (props) => {
    return (
        <div className="wrapper-post">
            {posts.map(post => (
                <PostUser avatar={post.avatar} comment={post.comment} countLike={post.countLike}/>
            ))}
        </div>
    )
}

export default Post