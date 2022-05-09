import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';
import { configureStore, combineReducers } from '@reduxjs/toolkit';

import { userReducer } from './user/reducer';
import { repoReducer } from './repos/reducer';
import { AppDispatch, RootReducerState } from './types';

const rootReducer = combineReducers({
  userReducer,
  repoReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootReducerState> = useSelector;
