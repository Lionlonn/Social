import React from "react";
import './main.scss'
import image from './image/main-fon.jpg'
import Posts from "./posts/posts.jsx";

const Main = (props) => {
    return (
        <div className="main">
            <div className="main-container">
                <img src={image} alt="" />
                <Posts posts={props.state.posts} addPost={props.addPost}/>
            </div>
                
        </div>
    )
}

export default Main