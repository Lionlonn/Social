const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const TOGGLE_IS_FOLLOWING_PROGRESS= 'TOGGLE_IS_FOLLOWING_PROGRESS'
import { UsersAPI } from '../api/Users/api.js'
import { SubscriptionAPI } from '../api/userSubscription/subscription.js'

let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [],
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
            return { ...state, users: [ ...action.users ]}
        }
        case SET_CURRENT_PAGE: {
            return { ...state, currentPage: action.currentPage}
        }
        case SET_TOTAL_USERS_COUNT: {
            return { ...state, totalUsersCount: action.count}
        }
        case TOGGLE_IS_FETCHING: {
            return { ...state, isFetching: action.isFetching}
        }
        case TOGGLE_IS_FOLLOWING_PROGRESS: {
            return { ...state, 
                followingInProgress: action.isFetching 
                ? [ ...state.followingInProgress, action.userId]
                : [ state.followingInProgress.filter(id => id != action.userId)]

            }
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





export const followSucces = (userId) => ({ type: FOLLOW, userId})
export const unFollowSucces = (userId) => ({type: UNFOLLOW, userId})
export const setUsers = (users) => ({type: SET_USERS, users})
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})
export const setUsersTotalCount = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, count: totalUsersCount})
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})
export const toggleFollowingProggress = (isFetching, userId) => ({type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId})


export const getUsers = (currentPage, pageSize) => {
    return (dispatch) => {

        dispatch(toggleIsFetching(true));

        UsersAPI.getUsers(currentPage, pageSize).then(data => {
            dispatch(toggleIsFetching(false));
            dispatch(setUsers(data.items));
            dispatch(setUsersTotalCount(data.totalCount));
        });
    }
}

export const follow = (id) => {
    return (dispatch) => {
        dispatch(toggleFollowingProggress(true, id))
        SubscriptionAPI.setFollow(id).then(data => {
            if (data.resultCode == 0) {
                dispatch(followSucces(id))
            }
            dispatch(toggleFollowingProggress(false, id))
        })
    }
}
export const unFollow = (id) => {
    return (dispatch) => {
        dispatch(toggleFollowingProggress(true, id))
        SubscriptionAPI.setUnFollow(id).then(data => {
            if (data.resultCode == 0) {
                dispatch(unFollowSucces(id))
            }
            dispatch(toggleFollowingProggress(false, id))
        })
    }
}

export default usersreducer