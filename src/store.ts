import { configureStore } from '@reduxjs/toolkit';
import boardReducer from './reducers/board/boardSlice';

export const store = configureStore({
  reducer: {
    board: boardReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppStore = typeof store;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
