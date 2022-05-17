import { ContentDiv, Div, DivImageUser } from './userNotFound.styled';

export function UserNotFound() {
  return (
    <>
      <Div>
        <ContentDiv>
          <DivImageUser />
          <p>User not found</p>
        </ContentDiv>
      </Div>
    </>
  );
}
