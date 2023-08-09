import React from "react";
import './main.scss'
import image from './image/main-fon.jpg'
import PostsContaienr from "./posts/postsContainer.jsx";

const Main = (props) => {
    return (
        <div className="main">
            <div className="main-container">
                <img src={image} alt="" />
                <PostsContaienr 
                    store={props.store}/>
            </div>
                
        </div>
    )
}

export default Main