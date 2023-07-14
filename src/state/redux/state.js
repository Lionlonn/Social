let renderEntireTree = () => {
    console.log("state changed");
}


let state = {
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
}
export const addPost = () => {
    let newPost = {
        img: "https://phonoteka.org/uploads/posts/2022-09/1663304449_53-phonoteka-org-p-berserk-gats-art-vkontakte-65.jpg",
        id: 4,
        comment: state.postsPage.newPostText,
        countLike: 6
    }
    
    state.postsPage.posts.push(newPost);
    state.postsPage.newPostText = ""
    renderEntireTree(state)
}


export const updatePostText = (postMessage) => {
    state.postsPage.newPostText = postMessage;
    
    renderEntireTree(state)
}

export const subcriber = (observer) => {
    renderEntireTree = observer; // Наблюдатель observer pattern
}

export default state