import React, { useEffect } from 'react';
import { fetchUser, newSearch, setLoading } from '../../redux/reducer';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import { InputSearch } from './searchStyles';

export function Search() {
  const dispatch = useAppDispatch();
  const searchValue = useAppSelector((state) => state.searchValue);

  useEffect(() => {
    loadData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function loadData() {
    dispatch(fetchUser(searchValue));
    setTimeout(() => {
      setLoading(true);
    }, 1000);
  }

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      loadData();
    }
  };

  return (
    <InputSearch
      type="search"
      autoComplete="off"
      autoFocus
      value={searchValue}
      placeholder="Enter GitHub username"
      onKeyUp={handleKeyDown}
      onChange={(event) => {
        dispatch(newSearch(event.target.value));
      }}
    />
  );
}
