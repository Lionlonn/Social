import { combineReducers, configureStore} from '@reduxjs/toolkit';
import postsReducer from './posts-page-reducer'
import messageReducer from './message-page-reducer'
import usersreducer from './users-reducer';



const rootReducer = combineReducers({
    
    profilePage: postsReducer,
    messagePage: messageReducer,
    usersPage: usersreducer
    
})
export const store = configureStore({
    reducer:rootReducer
})

console.log(window.store = store);
