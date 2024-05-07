import { Navigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import { LoginFormValues } from '@/components/auth/LoginForm/LoginForm';
import { SignUpForm } from '@/components/auth/SignUpForm';
import { SignUpFormValues } from '@/components/auth/SignUpForm/SignUpFormShema';
import { useLoginMutation, useMeQuery, useSignUpMutation } from '@/entities/auth/api/auth';
import { Routes } from '@/shared/constants/routes';

import 'react-toastify/dist/ReactToastify.css';

export const SignUpPage = () => {
  const { data: useMeData } = useMeQuery();
  const [signUp] = useSignUpMutation();
  const [login] = useLoginMutation();

  if (useMeData) {
    return <Navigate to={Routes.MAIN} />;
  }
  const onSubmitHandler = async (data: Omit<SignUpFormValues, 'passwordConfirmation'>) => {
    try {
      const res = await signUp(data).unwrap();

      toast.success(`${res.name}, you are successfully registered`);
      const dataForLogin: LoginFormValues = { rememberMe: false, ...data };

      await login(dataForLogin).unwrap();
    } catch (e: any) {
      toast.error(e.data.errorMessages[0] || 'Some error occured');
    }
  };

  return (
    <>
      <SignUpForm onSubmit={onSubmitHandler} />
    </>
  );
};
