import React, { useEffect, useState } from 'react';
import { REPOS_PER_PAGE } from '../../../../appConstants/constants';

import { fetchRepo } from '../../../../redux/repos/reducer';
import { useAppDispatch, useAppSelector } from '../../../../redux/store';
import { setPage } from '../../../../redux/user/reducer';
import { Paginate, WrapperPagination } from './pagination.styled';

export function Pagination() {
  const dispatch = useAppDispatch();
  const { searchValue, page } = useAppSelector((state) => state.userReducer);
  const public_repos = useAppSelector((state) => state.userReducer.user?.public_repos) as number;
  const [start, setStart] = useState(1);

  const pageCount = Math.ceil(public_repos / REPOS_PER_PAGE);

  useEffect(() => {
    dispatch(fetchRepo({ username: searchValue, page }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  const handlePageClick = (event: { selected: number }) => {
    const newStart = event.selected * REPOS_PER_PAGE > 0 ? event.selected * REPOS_PER_PAGE : 1;
    setStart(newStart);
    dispatch(setPage(event.selected + 1));
  };

  return (
    <WrapperPagination>
      <p>
        {start}-{start + REPOS_PER_PAGE - 1} of {public_repos} items
      </p>
      <Paginate
        breakLabel="..."
        nextLabel=">>"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        marginPagesDisplayed={1}
        pageCount={pageCount}
        previousClassName="previous"
        nextClassName="next"
        activeClassName="active"
        previousLabel="<<"
      />
    </WrapperPagination>
  );
}
