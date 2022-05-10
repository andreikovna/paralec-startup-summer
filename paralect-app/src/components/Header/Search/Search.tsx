import React from 'react';
import { fetchUser, newSearch, setLoading } from '../../../redux/user/reducer';
import { useAppDispatch, useAppSelector } from '../../../redux/store';
import { DivSearch, InputSearch, SpanSearch } from './search.styled';
import { fetchRepo } from '../../../redux/repos/reducer';

export function Search() {
  const dispatch = useAppDispatch();
  const searchValue = useAppSelector((state) => state.userReducer.searchValue);

  async function loadData() {
    dispatch(fetchUser(searchValue));
    dispatch(fetchRepo({ username: searchValue, page: 1 }));
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
    <DivSearch>
      <SpanSearch />
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
    </DivSearch>
  );
}
