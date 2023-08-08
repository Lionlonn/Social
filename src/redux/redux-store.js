import { combineReducers, configureStore} from '@reduxjs/toolkit';
import postsReducer from './posts-page-reducer'
import messageReducer from './message-page-reducer'



const rootReducer = combineReducers({
    
    postsPage: postsReducer,
    messagePage: messageReducer,
    
})
export const store = configureStore({
    reducer:rootReducer
})