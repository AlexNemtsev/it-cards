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

  const onSubmitHandler = async (data: FormValues) => {
    try {
      const d = await login(data).unwrap();

      console.log(d);
    } catch (e: any) {
      console.log(e.data.message);
    }
  };

  return (
    <>
      <LoginForm onSubmit={onSubmitHandler} />
    </>
  );
};
