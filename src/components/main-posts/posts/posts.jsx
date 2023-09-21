import React from "react";
import './posts.scss'
import Post from "../../post/post.jsx";
import { Navigate } from "react-router-dom";

class Posts extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            newPostText: ""
        }
        
    }
    
    onButtonClick = () => {
        this.props.addPostCreater()
    }

    onPostChange = (e) => {
        let text = e.target.value
        this.props.updateNewPostText(text)
        this.setState( {newPostText:text})
    }
    
    render () {
        const state = this.props.profilePage.profile
        const postElement = state.posts.map(post => <Post profile={this.props.profile} comment={post.comment} countLike={post.countLike}/>)
        
        let newPost = state.newPostText;

        if (!this.props.profilePage.isAuth) return <Navigate to={"/login"}/>
        return (
            <div className="posts">
                <textarea  placeholder="Enter your post"
                    onChange={this.onPostChange}
                    value={newPost}/>
                <div className="post-user">
                    <button onClick={ this.onButtonClick }>Отправить</button>
                    <button>Удалить</button>
                </div>
                <div className="post">
                    { postElement }
                </div>
            </div>
        )
    }
    
}




export default Posts