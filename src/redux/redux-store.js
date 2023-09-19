import { applyMiddleware, combineReducers, configureStore} from '@reduxjs/toolkit';
import postsReducer from './posts-page-reducer'
import messageReducer from './message-page-reducer'
import usersreducer from './users-reducer';
import authReducer from './auth-reducer';
import thunkMiddleware from 'redux-thunk';



const rootReducer = combineReducers({
    
    profilePage: postsReducer,
    messagePage: messageReducer,
    usersPage: usersreducer,
    auth: authReducer
    
})
export const store = configureStore({
    reducer:rootReducer
}, applyMiddleware(thunkMiddleware))

console.log(window.store = store);
