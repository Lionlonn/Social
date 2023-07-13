import React from "react";
import './posts.scss'
import Post from "../../post/post.jsx";
// import { addPost } from '../../../state/redux/state'

const Posts = (props) => {
    const postElement = props.posts.map(post => <Post  img={post.img} id={post.id} comment={post.comment} countLike={post.countLike}/>)

    let newPost = React.createRef();

    const onButtonClick = () => {
        debugger
        let text = newPost.current.value;
        props.addPost(text)
    }

    return (
        <div className="posts">
            <textarea ref={newPost}></textarea>
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