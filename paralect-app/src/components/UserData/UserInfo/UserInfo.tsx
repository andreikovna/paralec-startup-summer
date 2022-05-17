import { useAppSelector } from '../../../redux/store';
import { UserType } from '../../../redux/types';
import {
  DivUser,
  ImgUser,
  WrapperFollowersInfo,
  NameParagraph,
  LinkUser,
  ImgFollowers,
  ImgFollowing,
  FollowersWrappers,
} from './userInfo.styled';

export function UserInfo() {
  const { user } = useAppSelector((state) => state.userReducer);
  const { name, login, followers, following, avatar_url, html_url } = user as UserType;

  const userDataInfo = [
    {
      id: 0,
      img: <ImgFollowers />,
      number: followers > 1000 ? `${(followers / 1000).toFixed(1)}k` : `${followers}`,
      text: 'followers',
    },
    {
      id: 1,
      img: <ImgFollowing />,
      number: following > 1000 ? `${(following / 1000).toFixed(1)}k` : `${following}`,
      text: 'following',
    },
  ];

  return (
    <DivUser>
      <ImgUser src={avatar_url}></ImgUser>
      <NameParagraph>{name}</NameParagraph>
      <LinkUser href={html_url} target="_blank" rel="noopener noreferrer">
        {login}
      </LinkUser>
      <WrapperFollowersInfo>
        {userDataInfo.map((item) => {
          return (
            <FollowersWrappers key={item.id}>
              {item.img}
              <p>
                {item.number} {item.text}
              </p>
            </FollowersWrappers>
          );
        })}
      </WrapperFollowersInfo>
    </DivUser>
  );
}
