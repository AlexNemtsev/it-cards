import { FormValues, LoginForm } from '@/components/auth/LoginForm/LoginForm';
import { useLoginMutation } from '@/shared/api/auth/auth';

export const LoginPage = () => {
  const [login] = useLoginMutation();
  const onSubmitHandler = (data: FormValues) => {
    login(data);
  };

  return (
    <>
      <LoginForm onSubmit={onSubmitHandler} />
    </>
  );
};
