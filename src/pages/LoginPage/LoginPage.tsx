import { LoginForm } from '@/components/auth/LoginForm/LoginForm';
import { useGetDecksQuery } from '@/entities/deck/api/api';

export const LoginPage = () => {
  const res = useGetDecksQuery();

  console.log(res);

  return (
    <div>
      <LoginForm onSubmit={() => {}} />
    </div>
  );
};
