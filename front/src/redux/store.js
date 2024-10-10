import { configureStore } from '@reduxjs/toolkit';
import { tasksReducer } from './slices/tasks';
import { authReducer } from './slices/auth';
import { listsReducer } from './slices/lists';
import {modalsReducer} from "./slices/modals";

const store = configureStore({
  reducer: {
    auth: authReducer,
    lists: listsReducer,
    tasks: tasksReducer,
    modals: modalsReducer,
  },
});

export default store;
