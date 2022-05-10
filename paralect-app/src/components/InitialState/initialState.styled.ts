import styled from 'styled-components';

import search from '../../assets/search.svg';

export const Div = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
`;

export const ContentDiv = styled.div`
  display: flex;
  justify-content: center;
  width: 15.38%;
  flex-direction: column;
  & p {
    font-family: Inter;
    font-style: normal;
    font-weight: 400;
    font-size: 22px;
    line-height: 31px;
    text-align: center;
    color: #808080;
  }
`;

export const DivImageSearch = styled.div`
  width: 65px;
  height: 65px;
  margin: 10.5% auto;
  margin-bottom: 20.5%;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url(${search});
`;
