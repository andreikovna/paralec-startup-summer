import styled from 'styled-components';

import logo from '../../assets/GH_logo.svg';

export const WrapperHeader = styled.header`
  height: 72px;
  background: #0064eb;
  padding: 0 10px;
  z-index: 100;
`;

export const ContentHeader = styled.div`
  max-width: 1366px;
  height: 72px;
  margin: 0 auto;
  display: flex;
  gap: 22px;
  align-items: center;
`;

export const DivLogo = styled.div`
  width: 41px;
  height: 40px;
  margin-left: 31px;
  background-image: url(${logo});
  @media screen and (max-width: 420px) {
    margin-left: 10px;
  }
`;
