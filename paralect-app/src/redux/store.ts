import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { UserReducer } from './reducer';
import { UserState } from './types';

export const store = configureStore({
  reducer: UserReducer,
});

type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<UserState> = useSelector;
