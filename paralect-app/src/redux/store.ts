import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { UserReducer } from './reducer';
import { AppDispatch, UserState } from './types';

export const store = configureStore({
  reducer: UserReducer,
});

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<UserState> = useSelector;
