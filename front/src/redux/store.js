import { configureStore } from '@reduxjs/toolkit';
import { tasksReducer } from './slices/tasks';
import { authReducer } from './slices/auth';
import { listsReducer } from './slices/lists';

const store = configureStore({
  reducer: {
    auth: authReducer,
    lists: listsReducer,
    tasks: tasksReducer,
  },
});

export default store;
