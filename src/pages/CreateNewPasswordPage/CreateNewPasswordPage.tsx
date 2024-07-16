import { useNavigate, useParams } from 'react-router-dom';

import { useResetPasswordMutation } from '@/entities/auth/api/auth';
import { BaseErrorResponse } from '@/entities/auth/api/types';
import { CreateNewPasswordForm } from '@/features/authForm/CreateNewPasswordForm';
import { Routes } from '@/shared/constants/routes';
import { errorNotification, successNotification } from '@/shared/lib/notifications';
import { PageContainer } from '@/shared/ui/PageContainer';

export const CreateNewPasswordPage = () => {
  const { token = '' } = useParams();
  const navigate = useNavigate();
  const [resetPassword] = useResetPasswordMutation();

  const resetPasswordHandler = async (password: string) => {
    try {
      await resetPassword({ password, token }).unwrap();

      successNotification('You have new password now');

      navigate(Routes.LOGIN);
    } catch (e) {
      const error = e as BaseErrorResponse;

      errorNotification(error.data.message || 'Some error occurred');
    }
  };

  return (
    <PageContainer>
      <CreateNewPasswordForm onSubmit={resetPasswordHandler} />
    </PageContainer>
  );
};
