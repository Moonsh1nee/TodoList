import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from '../../axios';
import {fetchDeleteTask} from "./tasks";

export const fetchLists = createAsyncThunk('lists/fetchLists', async () => {
    const {data} = await axios.get('/lists');
    return data;
});

export const fetchAddList = createAsyncThunk(
    'lists/fetchAddList',
    async (params) => {
        const {data} = await axios.post('/lists', params);
        return data
    }
);

export const fetchDeleteList = createAsyncThunk(
    'lists/fetchDeleteList',
    async (id) => {
        await axios.delete(`/lists/${id}`);
    }
);

export const fetchUpdateList = createAsyncThunk(
    'lists/fetchUpdateList',
    async (params) => {
        const {data} = await axios.patch(`/lists/${params._id}`, params);
        return data;
    }
)

const initialState = {
    items: [],
    status: 'loading',
};

const listsSlice = createSlice({
    name: 'lists',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchLists.pending, (state) => {
                state.items = [];
                state.status = 'loading';
            })
            .addCase(fetchLists.fulfilled, (state, action) => {
                state.items = action.payload;
                state.status = 'loaded';
            })
            .addCase(fetchLists.rejected, (state) => {
                state.items = [];
                state.status = 'error';
            })
            .addCase(fetchAddList.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchAddList.fulfilled, (state, action) => {
                state.items.push(action.payload);
                state.status = 'loaded';
            })
            .addCase(fetchDeleteList.pending, (state, action) => {
                state.items = state.items.filter(list => list._id !== action.meta.arg);
            })
            .addCase(fetchUpdateList.pending, (state, action) => {
                state.items = state.items.filter(list => list._id !== action.meta.arg._id);
                state.status = 'loading';
            })
            .addCase(fetchUpdateList.fulfilled, (state, action) => {
                state.items.push(action.payload);
                state.status = 'loaded';
            })
    },
});

export const listsReducer = listsSlice.reducer;
