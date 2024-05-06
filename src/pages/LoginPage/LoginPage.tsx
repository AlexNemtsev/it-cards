import { Navigate } from 'react-router-dom';

import { FormValues, LoginForm } from '@/components/auth/LoginForm/LoginForm';
import { useLoginMutation, useMeQuery } from '@/entities/auth/api/auth';
import { Routes } from '@/shared/constants/routes';

export const LoginPage = () => {
  const { data } = useMeQuery();
  const [login] = useLoginMutation();

  if (data) {
    return <Navigate to={Routes.MAIN} />;
  }

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
