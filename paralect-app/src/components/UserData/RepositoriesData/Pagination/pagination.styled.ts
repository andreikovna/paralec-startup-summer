import ReactPaginate from 'react-paginate';
import styled from 'styled-components';

import previous from '../../../../assets/previous-arrow.svg';
import next from '../../../../assets/next-arrow.svg';

export const WrapperPagination = styled.div`
  display: flex;
  gap: 16px;
  margin-right: 13px;
  align-items: center;
  color: #808080;
  font-family: 'Inter';
  font-size: 14px;
  line-height: 21px;
  font-style: normal;
  font-weight: 400;
  justify-content: flex-end;
  @media screen and (max-width: 420px) {
    flex-direction: column;
    gap: 10px;
    margin-right: 0;
  }
`;

export const Paginate = styled(ReactPaginate)`
  display: flex;
  align-items: center;
  gap: 16px;
  .active {
    align-items: center;
    padding: 2px 6px;
    width: 21px;
    height: 25px;
    background: #0064eb;
    border-radius: 3px;
    color: white;
  }
  a {
    cursor: pointer;
  }
  .previous,
  .next {
    width: 24px;
    height: 24px;
    color: transparent;
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
  }
  .next {
    background-image: url(${next});
  }
  .previous {
    background-image: url(${previous});
  }
`;
