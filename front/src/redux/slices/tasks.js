import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../axios';

export const fetchTasks = createAsyncThunk(
  'tasks/fetchTasks',
  async () => {
    const { data } = await axios.get('/tasks');
    return data;
  }
);

const initialState = {
  items: [],
  status: 'loading',
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {

  },
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
  },
});


export const tasksReducer = tasksSlice.reducer;
