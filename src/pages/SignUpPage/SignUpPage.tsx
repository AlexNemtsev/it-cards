import { Navigate } from 'react-router-dom';

import { LoginFormValues } from '@/components/auth/LoginForm/LoginForm';
import { SignUpForm } from '@/components/auth/SignUpForm';
import { SignUpFormValues } from '@/components/auth/SignUpForm/SignUpFormShema';
import { useMeQuery, useSignUpMutation } from '@/entities/auth/api/auth';
import { useLogin } from '@/entities/auth/api/hooks';
import { SignUpErrorResponse } from '@/entities/auth/api/types';
import { Routes } from '@/shared/constants/routes';
import { errorNotification, successNotification } from '@/shared/lib/notifications';
import { PageContainer } from '@/shared/ui/PageContainer/PageContainer';

export const SignUpPage = () => {
  const { data: useMeData } = useMeQuery();
  const [signUp] = useSignUpMutation();
  const [login] = useLogin();

  if (useMeData) {
    return <Navigate to={Routes.MAIN} />;
  }
  const onSubmitHandler = async (data: Omit<SignUpFormValues, 'passwordConfirmation'>) => {
    try {
      const res = await signUp(data).unwrap();

      successNotification(`${res.name}, you are successfully registered`);

      const dataForLogin: LoginFormValues = { rememberMe: false, ...data };

      login(dataForLogin);
    } catch (e) {
      const signUpError = e as SignUpErrorResponse;

      errorNotification(signUpError.data.errorMessages[0] || 'Some error occurred');
    }
  };

  return (
    <PageContainer>
      <SignUpForm onSubmit={onSubmitHandler} />;
    </PageContainer>
  );
};
