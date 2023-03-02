import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from "axios";
import {BD_LINK} from "../../constants/constants";

export const getUsers = createAsyncThunk('users/fetchUsersList', async () => {
    const response = await axios.get(BD_LINK + 'users')
    return response.data
})

export const getAlbums = createAsyncThunk('users/fetchAlbumsList', async () => {
    const response = await axios.get(BD_LINK + 'albums')
    return response.data
})

const initialState = {
    users: [],
    albums: [],
    albumsModal: {
        visible: false,
        currentUserId: 0,
    }
}

export const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        albumsModalVisible: (state, action) => {
            state.albumsModal = action.payload
        },
    },
    extraReducers: (builder) => {
        builder.addCase(getUsers.fulfilled, (state, action) => {
            state.users = action.payload
        })
        builder.addCase(getAlbums.fulfilled, (state, action) => {
            state.albums = action.payload
        })
    },
})
export const { albumsModalVisible } = usersSlice.actions

export default usersSlice.reducer