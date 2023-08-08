import React from "react";
import './posts.scss'
import Post from "../../post/post.jsx";
import { useSelector, useDispatch } from 'react-redux';
import { addPostActionCreater, updateNewPostTextActionCreate} from '../../../redux/posts-page-reducer'




const Posts = (props) => {
    const state = useSelector(state => state.postsPage)
    const dispatch = useDispatch();
    const postElement = state.posts.map(post => <Post  img={post.img} id={post.id} comment={post.comment} countLike={post.countLike}/>)

    let newPost = state.newPostText;
    console.log(newPost);

    const onButtonClick = () => {
        dispatch(addPostActionCreater())
    }

    let onPostChange = (e) => {
        let text = e.target.value
        dispatch(updateNewPostTextActionCreate(text))
    }

    return (
        <div className="posts">
            <textarea  placeholder="Enter your post"
                onChange={onPostChange}
                value={state.newPostText}/>
            <div className="post-user">
                <button onClick={ onButtonClick }>Отправить</button>
                <button>Удалить</button>
            </div>
            <div className="post">
                { postElement }
            </div>
        </div>
    )
}

export default Posts