import React from 'react';
import { useAppSelector } from '../../redux/store';
import { InitialState } from './InitialState/InitialState';

export function MainPage() {
  const { loading } = useAppSelector((state) => state);

  return <>{loading ? <p>DATA received</p> : <InitialState />}</>;
}
