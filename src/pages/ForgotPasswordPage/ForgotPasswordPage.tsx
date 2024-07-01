import { useState } from 'react';

import { useRecoverPasswordMutation } from '@/entities/auth/api/auth';
import { BaseErrorResponse, RecoverPasswordRequest } from '@/entities/auth/api/types';
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

  const baseUrl = window.location.origin;
  const html = `<h1>Hi, ##name##!</h1><p>Click <a href=${baseUrl}/recover-password/##token##>here</a> to recover your password</p>`;

  console.log(123);
  const postRecoverPassword = async (data: ForgotPasswordFormValues) => {
    try {
      const args: RecoverPasswordRequest = {
        email: data.email,
        html,
        subject: 'it-cards recover password ',
      };

      await recoverPasswordMutation(args).unwrap();

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
