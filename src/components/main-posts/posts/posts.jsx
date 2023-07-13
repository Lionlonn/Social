import React from "react";
import './posts.scss'
import Post from "../../post/post.jsx";
// import { addPost } from '../../../state/redux/state'

const Posts = (props) => {
    let newPost = React.createRef();

    const onButtonClick = () => {
        let text = newPost.current.value;
        alert(text)
    }

    

    const postElement = props.posts.map(post => <Post  img={post.img} id={post.id} comment={post.comment} countLike={post.countLike}/>)
    
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