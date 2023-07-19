const ADD_POST = 'ADD-POST'
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT'

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
                {id: 2, name: "Andrey"},
                {id: 2, name: "Andrey"},
                {id: 2, name: "Andrey"},
                {id: 2, name: "Andrey"},
            ],
            messages: [
                {id:2, message: "hu"},
                {id:2, message: "hdsdsu"},
                {id:2, message: "aaahu"},
                {id:2, message: "hdu"},
            ]
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
        if (action.type === ADD_POST) {
            this._addPost()
        } else if (action.type === UPDATE_POST_TEXT) {
           this._updatePostText(action.postMessage)
        } else if (action.type === ADD_MESSAGE) {
            
        }
    },
}

export const addPostActionCreater = () => ({ type: ADD_POST})
export const updateNewPostTextActionCreate = (text) => ({type: UPDATE_POST_TEXT, postMessage: text})

export default store
window.store = store