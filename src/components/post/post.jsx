import React from "react";
import './post.scss'



const Post = (props) => {
    return (
         <div className="post-item">
                <img src="https://gas-kvas.com/uploads/posts/2023-01/1673291185_gas-kvas-com-p-risunki-anime-berserk-7.jpg" alt="" />
                { props.message }
                <div>
                    <span>Like {props.countLike}</span>
                </div>
        </div>
    )
}

export default Post