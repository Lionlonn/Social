const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'

let initialState = {
    users: [
        {   
            photoUrl: "https://phonoteka.org/uploads/posts/2022-09/1663304449_53-phonoteka-org-p-berserk-gats-art-vkontakte-65.jpg",
            followed: false,
            fullname: "Alexandr",
            id: 1, 
            message: "dsadasd", 
            status: "I am a Boss to",
            location: {cyty: "Minsk", country: "Belarus"},
        },
        {   
            photoUrl: "https://phonoteka.org/uploads/posts/2022-09/1663304449_53-phonoteka-org-p-berserk-gats-art-vkontakte-65.jpg",
            followed: true,
            fullname: "Andrey",
            id: 2, 
            message: "dsadasd", 
            status: "I am a Boss",
            location: {cyty: "Moscow", country: "Russia"},
        },
        {   
            photoUrl: "https://phonoteka.org/uploads/posts/2022-09/1663304449_53-phonoteka-org-p-berserk-gats-art-vkontakte-65.jpg",
            followed: true,
            fullname: "Max",
            id: 3, 
            message: "dsadasd", 
            status: "I am a Boss",
            location: {cyty: "Bogorodsk", country: "Russia"},
        },
    ],
    newPostText: "New Camasutre"
}



const usersreducer = (state = initialState, action) => {
    switch(action.type) {

        case FOLLOW:
            return { 
                ...state, 
                users: state.users.map( u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: true}
                    }
                    return u;
                } ), 
                
            }

        case SET_USERS: {
            return { ...state, users: [ ...action.users, ...action.users ]}
        }

        case UNFOLLOW:
            return { 
                ...state, 
                users: state.users.map( u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: false}
                    }
                    return u;
                } )  
            }

        default:
            return state;
    }
}





export const followAC = (userId) => ({ type: FOLLOW, userId})
export const unFollowAC = (userId) => ({type: UNFOLLOW, userId})
export const setUsersAC = (user) => ({type: SET_USERS, user})

export default usersreducer