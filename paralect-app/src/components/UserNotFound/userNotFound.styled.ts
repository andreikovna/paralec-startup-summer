import styled from 'styled-components';

import user from '../../assets/user.svg';

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
  flex-direction: column;
  & p {
    font-family: Inter;
    font-style: normal;
    font-weight: 400;
    font-size: 22px;
    line-height: 31px;
    text-align: center;
    margin-top: 24px;
    color: #808080;
  }
`;

export const DivImageUser = styled.div`
  width: 110px;
  height: 110px;
  margin: 0 auto;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url(${user});
`;
