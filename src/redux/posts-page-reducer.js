const ADD_POST = 'ADD-POST'
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT'


let initialState = {
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
}



const postsReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_POST:
           
            let newPost = {
                img: "https://phonoteka.org/uploads/posts/2022-09/1663304449_53-phonoteka-org-p-berserk-gats-art-vkontakte-65.jpg",
                id: 4,
                comment: state.newPostText,
                countLike: 6
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ""
            }

        case UPDATE_POST_TEXT:
            return {
                ...state,
                newPostText: action.postMessage
            }

        default:
            return state;
    }
}



// const postsReducer = (state = initialState, action) => {
//     switch(action.type) {
//         case ADD_POST:
//             let newPost = {
//                 img: "https://phonoteka.org/uploads/posts/2022-09/1663304449_53-phonoteka-org-p-berserk-gats-art-vkontakte-65.jpg",
//                 id: 4,
//                 comment: state.newPostText,
//                 countLike: 6
//             }
            
//             state.posts.push(newPost);
//             state.newPostText = ""
//             return state;

//         case UPDATE_POST_TEXT:
//             state.newPostText = action.postMessage;
//             return state;

//         default: 
//             return state;
//     }
// }

export const addPostActionCreater = () => ({ type: ADD_POST})
export const updateNewPostTextActionCreate = (text) => ({type: UPDATE_POST_TEXT, postMessage: text})


export default postsReducer