import React from "react";
import './posts.scss'
import Posts from "./posts.jsx";
import { useSelector, useDispatch } from 'react-redux';
import { addPostActionCreater, updateNewPostTextActionCreate} from '../../../redux/posts-page-reducer'




const PostsContaienr = (props) => {
    const state = useSelector(state => state.postsPage)
    const dispatch = useDispatch();

    const onButtonClick = () => {
        dispatch(addPostActionCreater())
    }

    let onPostChange = (text) => {
        dispatch(updateNewPostTextActionCreate(text))
    }
    return (
        <Posts updateNewPostText={onPostChange} addPostCreater={onButtonClick} postsPage={state}/>
    )
}

export default PostsContaienr