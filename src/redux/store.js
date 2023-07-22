import postsReducer from './posts-page-reducer.js'
import messageReducer from './message-page-reducer.js'

const ADD_POST = 'ADD-POST'
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT'
const UPDATE_MESSAGE_BODY = "UPDATE-MESSAGE-TEXT"
const SEND_MESSAGE = "SENT-MESSAGE"



let store = {
    _state: {
        postsPage: {
            posts: [
                {   
                    img: "https://phonoteka.org/uploads/posts/2022-09/1663304449_53-phonoteka-org-p-berserk-gats-art-vkontakte-65.jpg",
                    id: 2, 
                    comment: "dsadasd", 
                    countLike: 2
                },
                {   
                    img: "https://phonoteka.org/uploads/posts/2022-09/1663304449_53-phonoteka-org-p-berserk-gats-art-vkontakte-65.jpg",
                    id: 2, 
                    comment: "dsadasd", 
                    countLike: 2
                },
                {   
                    img: "https://phonoteka.org/uploads/posts/2022-09/1663304449_53-phonoteka-org-p-berserk-gats-art-vkontakte-65.jpg",
                    id: 2, 
                    comment: "dsadasd", 
                    countLike: 2
                },
            ],
            newPostText: "New Camasutre"
        },
        messagePage: {
            dialogs: [
                {id: 4, name: "Andrey"},
                {id: 6, name: "Andrey"},
                {id: 4, name: "Andrey"},
                {id: 7, name: "Andrey"},
            ],
            messages: [
                {id:13, message: "hu"},
                {id:23, message: "hdsdsu"},
                {id:5, message: "aaahu"},
                {id:6, message: "hdu"},
            ],
            newMssageBody: ""
        } 
    },
    _callSubcriber() {
        console.log("state changed");
    },

    getState() {
        return this._state;
    },
    subcriber(observer) {
        this._callSubcriber = observer
    },

    _addPost()  {
        let newPost = {
            img: "https://phonoteka.org/uploads/posts/2022-09/1663304449_53-phonoteka-org-p-berserk-gats-art-vkontakte-65.jpg",
            id: 4,
            comment: this._state.postsPage.newPostText,
            countLike: 6
        }
        
        this._state.postsPage.posts.push(newPost);
        this._state.postsPage.newPostText = ""
        this._callSubcriber(this._state)
    },
    
    _updatePostText(postMessage) {
        this._state.postsPage.newPostText = postMessage;
        this._callSubcriber(this._state)
    },
    
    dispatch(action) {

        this._state.postsPage = postsReducer(this._state.postsPage, action);

        this._state.messagePage = messageReducer(this._state.messagePage, action);
        this._callSubcriber(this._state)

        
    },
}






export default store
window.store = store