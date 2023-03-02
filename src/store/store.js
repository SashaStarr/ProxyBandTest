import { configureStore } from '@reduxjs/toolkit';
import usersReducer from '../components/users/UsersSlice';
import postsReducer from "../components/posts/PostsSlice";

export const store = configureStore({
    reducer: {
        users: usersReducer,
        posts: postsReducer
    },
})