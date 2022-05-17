import { fetchUser, newSearch } from '../../../redux/user/reducer';
import { useAppDispatch, useAppSelector } from '../../../redux/store';
import { DivSearch, InputSearch, SpanSearch } from './search.styled';
import { fetchRepo, setPage } from '../../../redux/repos/reducer';
import { DEFAULT_PAGE_NUMBER } from '../../../appConstants/constants';

export function Search() {
  const dispatch = useAppDispatch();
  const { searchValue } = useAppSelector((state) => state.userReducer);

  async function loadData() {
    dispatch(fetchUser(searchValue));
    dispatch(fetchRepo({ username: searchValue, page: DEFAULT_PAGE_NUMBER }));
  }

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      dispatch(setPage(DEFAULT_PAGE_NUMBER));
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
