import React from "react";
import './posts.scss'
import Posts from "./posts.jsx";
import { useSelector, useDispatch } from 'react-redux';
import { addPostActionCreater, updateNewPostTextActionCreate} from '../../../redux/posts-page-reducer'




const PostsContaienr = (props) => {
    

    const state = useSelector(state => state.profilePage)

    const dispatch = useDispatch();

    const onButtonClick = () => {
        dispatch(addPostActionCreater())
    }

    let onPostChange = (text) => {
        dispatch(updateNewPostTextActionCreate(text))
    }
    return (
        <Posts updateNewPostText={onPostChange} addPostCreater={onButtonClick} profilePage={state} profile={props.profile}/>
    )
}

export default PostsContaienr