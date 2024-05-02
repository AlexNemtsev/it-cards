import { FormValues, LoginForm } from '@/components/auth/LoginForm/LoginForm';
import { useLoginMutation } from '@/pages/LoginPage/api/login.api';

export const LoginPage = () => {
  const [login] = useLoginMutation();
  const onSubmitHandler = (data: FormValues) => {
    login(data);
  };

  return (
    <div>
      <LoginForm onSubmit={onSubmitHandler} />
    </div>
  );
};
