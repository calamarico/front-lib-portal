import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import booksReducer from '../redux/searchReducer';

export const store = configureStore({
  reducer: {
    booksReducer: booksReducer,
  },
  devTools: true,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
