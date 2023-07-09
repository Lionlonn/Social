import React from "react";
import './posts.scss'
import Post from "../../post/post.jsx";

const Posts = () => {
    return (
        <div className="posts">
            <textarea name="" id="" cols="30" rows="10"></textarea>
            <div className="post-user">
                <button>Отправить</button>
                <button>Удалить</button>
            </div>
            <div className="post">
                <Post />
            </div>
        </div>
    )
}

export default Posts