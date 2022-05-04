import styled from 'styled-components';

import search from '../../../assets/search.svg';

export const DivSearch = styled.div`
  font-family: 'Inter';
  width: 500px;
  height: 40px;
  background: #ffffff;
  display: flex;
  align-items: center;
  border-radius: 6px;
  border: none;
`;

export const SpanSearch = styled.span`
  width: 14px;
  height: 14px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  margin-left: 3.8%;
  margin-right: 2.2%;
  background-image: url(${search});
`;

export const InputSearch = styled.input`
  display: flex;
  align-items: center;
  letter-spacing: 0.01em;
  color: #000000;
  line-height: 17px;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  border: none;
  outline: none;
  & ::-webkit-search-decoration,
  ::-webkit-search-cancel-button,
  ::-webkit-search-results-button,
  ::-webkit-search-results-decoration {
    display: none;
  }
`;
