import styled from 'styled-components';

import followings from '../../../assets/following.svg';
import followers from '../../../assets/followers.svg';

export const DivUser = styled.div`
  width: 23.3%;
  padding-top: 12px;
  max-width: 300px;
  display: flex;
  flex-direction: column;
`;

export const ImgUser = styled.img`
  width: 98%;
  max-width: 280px;
  border-radius: 50%;
`;

export const WrapperFollowersInfo = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  margin-top: 25px;
`;

export const NameParagraph = styled.div`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 26px;
  line-height: 130%;
  margin-top: 28px;
`;

export const LinkUser = styled.a`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  color: #0064eb;
  margin-top: 12px;
`;

export const ImgFollowers = styled.div`
  width: 24px;
  height: 24px;
  margin-right: 8px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url(${followers}); ;
`;

export const ImgFollowing = styled.div`
  width: 24px;
  height: 24px;
  margin-right: 8px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url(${followings}); ;
`;

export const FollowersWrappers = styled.div`
  display: flex;
`;
