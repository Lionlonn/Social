const ADD_POST = 'ADD-POST'
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT'
const ADD_MESSAGE = "ADD-MESSAGE"
const UPDATE_MESSAGE_TEXT = "UPDATE-MESSAGE-TEXT"

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
                {id: 2, name: "Andrey", message: "hu"},
                {id: 2, name: "Andrey", message: "huвывфы"},
                {id: 2, name: "Andrey", message: "hфвфывu"},
                {id: 2, name: "Andrey", message: "фывфывф"},
            ],
            messages: [
                {id:2, message: "hu"},
                {id:2, message: "hdsdsu"},
                {id:2, message: "aaahu"},
                {id:2, message: "hdu"},
            ],
            newMssageText: "New Message Text test"
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
    _addMessage() {
        let newMessage = {
            img: "https://slovnet.ru/wp-content/uploads/2019/01/52-1.png",
            id: 3,
            name: "Alex",
            message: this._state.messagePage.newMssageText
        }
        this._state.messagePage.dialogs.push(newMessage)
        this._state.messagePage.newMssageText = ""
        this._callSubcriber(this._state)
    },
    _updateMessageText(upMessage) {
        this._state.messagePage.newMssageText = upMessage
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
            this._addMessage()
        } else if (action.type === UPDATE_MESSAGE_TEXT) {
            this._updateMessageText(action.upMessage)
        }
    },
}

export const addPostActionCreater = () => ({ type: ADD_POST})
export const updateNewPostTextActionCreate = (text) => ({type: UPDATE_POST_TEXT, postMessage: text})
export const addMessageActionCreater = () => ({type: ADD_MESSAGE})
export const updateMessageActionCreator = (text) => ({type: UPDATE_MESSAGE_TEXT, upMessage: text})

export default store
window.store = store