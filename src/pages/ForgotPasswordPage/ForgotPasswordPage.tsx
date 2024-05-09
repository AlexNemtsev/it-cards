import { useNavigate } from 'react-router-dom';

import { ForgotPassword, FormValues } from '@/components/auth/ForgotPassword';
import { useRecoverPasswordMutation } from '@/entities/auth/api/auth';
import { BaseErrorResponse } from '@/entities/auth/api/types';
import { Routes } from '@/shared/constants/routes';
import { errorNotification } from '@/shared/lib/notifications';

export const ForgotPasswordPage = () => {
  const [recoverPasswordMutation] = useRecoverPasswordMutation();
  const navigate = useNavigate();
  const onSubmitHandler = async (data: FormValues) => {
    try {
      await recoverPasswordMutation(data).unwrap();
      navigate(Routes.CHECK_EMAIL, { state: data.email });
    } catch (e) {
      const error = e as BaseErrorResponse;

      errorNotification(error.data.message || 'Some error occurred');
    }
  };

  return (
    <>
      <ForgotPassword onSubmit={onSubmitHandler} />
    </>
  );
};
