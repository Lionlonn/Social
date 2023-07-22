import React from "react";
import './posts.scss'
import Post from "../../post/post.jsx";
import { addPostActionCreater, updateNewPostTextActionCreate} from '../../../redux/posts-page-reducer'




const Posts = (props) => {
    const postElement = props.posts.map(post => <Post  img={post.img} id={post.id} comment={post.comment} countLike={post.countLike}/>)

    let newPost = React.createRef();


    const onButtonClick = () => {
        props.dispatch( addPostActionCreater())
    }

    let onPostChange = () => {
        let text = newPost.current.value;
        let action = updateNewPostTextActionCreate(text)
        props.dispatch(action)
    }

    return (
        <div className="posts">
            <textarea 
                onChange={onPostChange}
                ref={newPost} 
                value={props.newPostText}/>
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