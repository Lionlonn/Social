const ADD_POST = 'ADD-POST'
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT'
// const ADD_MESSAGE = "ADD-MESSAGE"
// const UPDATE_MESSAGE_TEXT = "UPDATE-MESSAGE-TEXT"
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
        if (action.type === ADD_POST) {
            this._addPost()
        } else if (action.type === UPDATE_POST_TEXT) {
           this._updatePostText(action.postMessage)
        } else if (action.type === UPDATE_MESSAGE_BODY) {
            this._state.messagePage.newMssageBody = action.body;
            this._callSubcriber(this._state)
        } else if (action.type === SEND_MESSAGE) {
            let body = this._state.messagePage.newMssageBody
            this._state.messagePage.newMssageBody = '';
            this._state.messagePage.messages.push({id:25, message: body})
            this._callSubcriber(this._state)
        }
    },
}





export const addPostActionCreater = () => ({ type: ADD_POST})
export const updateNewPostTextActionCreate = (text) => ({type: UPDATE_POST_TEXT, postMessage: text})

export const sendMessageCreator = () => ({ type: SEND_MESSAGE})
export const updateNewMessageBodyCreator = (body) => ({type: UPDATE_MESSAGE_BODY, body: body})

export default store
window.store = store