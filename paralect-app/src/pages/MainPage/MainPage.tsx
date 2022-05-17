import { useAppSelector } from '../../redux/store';
import { InitialState } from '../../components/InitialState/InitialState';
import { UserData } from '../../components/UserData/UserData';
import { UserNotFound } from '../../components/UserNotFound/UserNotFound';
import { Spinner } from '../../components/Spinner/Spinner';

export function MainPage() {
  const { statusLoaded, user } = useAppSelector((state) => state.userReducer);

  return (
    <>
      {statusLoaded === null ? (
        <InitialState />
      ) : statusLoaded ? (
        user ? (
          <UserData />
        ) : (
          <UserNotFound />
        )
      ) : (
        <Spinner />
      )}
    </>
  );
}
