import { createStore, combineReducers, configureStore } from '@reduxjs/toolkit';
import postsReducer from './posts-page-reducer'
import messageReducer from './message-page-reducer'

let rootReducer = combineReducers({
    postsPage: postsReducer,
    messagePage: messageReducer
})

export const store = configureStore({
    reducer:rootReducer
})

// let store = createStore(reducers);
// console.log(store);
