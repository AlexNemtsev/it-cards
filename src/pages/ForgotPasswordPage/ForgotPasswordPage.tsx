import { useState } from 'react';

import { useRecoverPasswordMutation } from '@/entities/auth/api/auth';
import { BaseErrorResponse } from '@/entities/auth/api/types';
import { CheckEmail } from '@/entities/auth/ui/CheckEmail';
import {
  ForgotPasswordForm,
  ForgotPasswordFormValues,
} from '@/features/authForm/ForgotPasswordForm';
import { errorNotification } from '@/shared/lib/notifications';
import { PageContainer } from '@/shared/ui/PageContainer/PageContainer';

export const ForgotPasswordPage = () => {
  const [recoverPasswordMutation] = useRecoverPasswordMutation();
  const [email, setEmail] = useState('');
  const postRecoverPassword = async (data: ForgotPasswordFormValues) => {
    try {
      await recoverPasswordMutation(data).unwrap();
      setEmail(data.email);
    } catch (e) {
      const error = e as BaseErrorResponse;

      errorNotification(error.data.message || 'Some error occurred');
    }
  };

  return (
    <PageContainer>
      {email ? <CheckEmail email={email} /> : <ForgotPasswordForm onSubmit={postRecoverPassword} />}
    </PageContainer>
  );
};
