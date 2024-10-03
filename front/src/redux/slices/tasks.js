import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from '../../axios';

export const fetchTasks = createAsyncThunk(
    'tasks/fetchTasks',
    async () => {
        const {data} = await axios.get('/tasks');
        return data;
    }
);

export const fetchAddTask = createAsyncThunk(
    'tasks/fetchAddTask',
    async (params) => {
        const {data} = await axios.post('/tasks', params);
        return data
    }
);

export const fetchDeleteTask = createAsyncThunk(
    'tasks/fetchDeleteTask',
    async (id) => {
        await axios.delete(`/tasks/${id}`);
    }
);

export const fetchUpdateTask = createAsyncThunk(
    'tasks/fetchUpdateTask',
    async (params) => {
        const {data} = await axios.patch(`/tasks/${params._id}`, params);
        return data;
    }
)

const initialState = {
    items: [],
    status: 'loading',
};

const tasksSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchTasks.pending, (state) => {
                state.items = [];
                state.status = 'loading';
            })
            .addCase(fetchTasks.fulfilled, (state, action) => {
                state.items = action.payload;
                state.status = 'loaded';
            })
            .addCase(fetchTasks.rejected, (state) => {
                state.items = [];
                state.status = 'error';
            })
            .addCase(fetchAddTask.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchAddTask.fulfilled, (state, action) => {
                state.items.push(action.payload);
                state.status = 'loaded';
            })
            .addCase(fetchDeleteTask.pending, (state, action) => {
                state.items = state.items.filter(task => task._id !== action.meta.arg);
            })
            .addCase(fetchUpdateTask.pending, (state, action) => {
                state.items = state.items.filter(task => task._id !== action.meta.arg._id);
                state.status = 'loading';
            })
            .addCase(fetchUpdateTask.fulfilled, (state, action) => {
                state.items.push(action.payload);
                state.status = 'loaded';
            })
    },
});


export const tasksReducer = tasksSlice.reducer;
