import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import { ForgotPassword, FormValues } from '@/components/auth/ForgotPassword';
import { useRecoverPasswordMutation } from '@/entities/auth/api/auth';
import { Routes } from '@/shared/constants/routes';

export const ForgotPasswordPage = () => {
  const [recoverPasswordMutation] = useRecoverPasswordMutation();
  const navigate = useNavigate();
  const onSubmitHandler = async (data: FormValues) => {
    try {
      await recoverPasswordMutation(data).unwrap();
      navigate(Routes.CHECK_EMAIL, { state: data.email });
    } catch (e: any) {
      toast.error(e.data.message);
    }
  };

  return (
    <>
      <ForgotPassword onSubmit={onSubmitHandler} />
    </>
  );
};
