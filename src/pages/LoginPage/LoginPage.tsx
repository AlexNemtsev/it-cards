import { Navigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import { LoginForm, LoginFormValues } from '@/components/auth/LoginForm/LoginForm';
import { useLoginMutation, useMeQuery } from '@/entities/auth/api/auth';
import { Routes } from '@/shared/constants/routes';

import 'react-toastify/dist/ReactToastify.css';

export const LoginPage = () => {
  const { data } = useMeQuery();
  const [login] = useLoginMutation();

  if (data) {
    return <Navigate to={Routes.MAIN} />;
  }

  const onSubmitHandler = async (data: LoginFormValues) => {
    try {
      await login(data).unwrap();

      toast.success('You are authorized!');
    } catch (e: any) {
      toast.error(e.data.message);
    }
  };

  return (
    <>
      <LoginForm onSubmit={onSubmitHandler} />
    </>
  );
};
