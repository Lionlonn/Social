import React from "react";
import './posts.scss'
import Post from "../../post/post.jsx";




const Posts = (props) => {
    const state = props.postsPage
    const postElement = state.posts.map(post => <Post  img={post.img} id={post.id} comment={post.comment} countLike={post.countLike}/>)
    console.log(state);
    
    
    let newPost = state.newPostText;
    
    const onButtonClick = () => {
        props.addPostCreater()
    }

    let onPostChange = (e) => {
        let text = e.target.value
        props.updateNewPostText(text)
    }

    return (
        <div className="posts">
            <textarea  placeholder="Enter your post"
                onChange={onPostChange}
                value={newPost}/>
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