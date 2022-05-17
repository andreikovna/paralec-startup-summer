import styled from 'styled-components';

export const WrapperReposData = styled.section`
  display: flex;
  max-width: 877px;
  flex: 1;
  flex-direction: column;
  gap: 24px;
  @media screen and (max-width: 1024px) {
    gap: 10px;
  }
`;

export const TitleNumberRepo = styled.h1`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 41px;
  letter-spacing: 0.5px;
  margin-bottom: 5px;
  @media screen and (max-width: 1024px) {
    font-size: 28px;
    line-height: 31px;
  }
  @media screen and (max-width: 420px) {
    font-size: 22px;
    line-height: 24px;
  }
`;
