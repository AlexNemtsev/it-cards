import { useGetDecksQuery } from '@/entities/deck/api/api';
import { useLogoutMutation } from '@/shared/api/auth/auth';

export const MainPage = () => {
  const result = useGetDecksQuery();

  console.log(result);

  const [logout] = useLogoutMutation();

  const onClickHandler = () => {
    logout({});
  };

  return (
    <div>
      MainPage
      <p>Аутентификация прошла успешно</p>
      <p>Теперь можно вылогиниться</p>
      <button onClick={onClickHandler} style={{ color: 'red' }}>
        Logout
      </button>
    </div>
  );
};
