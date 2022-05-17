import styled from 'styled-components';

import no_repos from '../../../../assets/svg/no_repo.svg';

export const WrapperNoRepositories = styled.div`
  display: flex;
  gap: 24px;
  height: 100%;
  flex-direction: column;
  align-items: center;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 22px;
  line-height: 31px;
  color: #808080;
`;

export const ImgDiv = styled.div`
  width: 110px;
  height: 110px;
  margin-top: 19%;
  background-image: url(${no_repos});
  @media screen and (max-width: 900px) {
    margin-top: 20px;
  }
`;
