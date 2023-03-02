import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from "axios";
import {BD_LINK} from "../../constants/constants";

export const getPosts = createAsyncThunk('posts/fetchPostsList', async () => {
    const response = await axios.get(BD_LINK + 'posts/')
    return response.data
})

const initialState = {
    posts: [],
}

export const postsSlice = createSlice({
    name: 'posts',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(getPosts.fulfilled, (state, action) => {
            state.posts = action.payload
        })
    },
})
export default postsSlice.reducer