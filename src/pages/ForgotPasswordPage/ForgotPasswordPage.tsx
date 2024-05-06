import { ForgotPassword, FormValues } from '@/components/auth/ForgotPassword';
import { useRecoverPasswordMutation } from '@/entities/auth/api/auth';

export const ForgotPasswordPage = () => {
  const [recoverPasswordMutation] = useRecoverPasswordMutation();
  const onSubmitHandler = (data: FormValues) => {
    recoverPasswordMutation(data);
  };

  return (
    <>
      <ForgotPassword onSubmit={onSubmitHandler} />
    </>
  );
};
