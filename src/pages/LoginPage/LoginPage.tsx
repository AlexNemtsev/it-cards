import { FormValues, LoginForm } from '@/components/auth/LoginForm/LoginForm';
import { useLoginMutation } from '@/shared/api/auth/auth';

export const LoginPage = () => {
  const [login] = useLoginMutation();
  const onSubmitHandler = (data: FormValues) => {
    login(data)
      .unwrap()
      .then(d => {
        console.log(d);
      })
      .catch(e => {
        console.log(e.data.message);
      });
  };

  return (
    <>
      <LoginForm onSubmit={onSubmitHandler} />
    </>
  );
};
