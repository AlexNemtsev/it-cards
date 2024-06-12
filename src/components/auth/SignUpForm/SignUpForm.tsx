import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

import { SignUpFormSchema, SignUpFormValues } from '@/components/auth/SignUpForm/SignUpFormShema';
import { Routes } from '@/shared/constants/routes';
import { Button } from '@/shared/ui/Button';
import { Card } from '@/shared/ui/Card';
import { InputWithController } from '@/shared/ui/InputWithController';
import { Typography } from '@/shared/ui/Typography';
import { zodResolver } from '@hookform/resolvers/zod';

import s from '@/components/auth/SignUpForm/SignUpForm.module.scss';

type Props = {
  onSubmit: (data: Omit<SignUpFormValues, 'passwordConfirmation'>) => void;
};

export const SignUpForm = (props: Props) => {
  const { onSubmit } = props;
  const { control, handleSubmit } = useForm<SignUpFormValues>({
    defaultValues: {
      email: '',
      password: '',
      passwordConfirmation: '',
    },
    mode: 'onSubmit',
    resolver: zodResolver(SignUpFormSchema),
  });

  const onSubmitSignUp = handleSubmit(data => {
    const { passwordConfirmation, ...dataSignUpForm } = data;

    onSubmit(dataSignUpForm);
  });

  return (
    <Card className={s.signUp}>
      <Typography.H1 className={s.title}>Sign Up</Typography.H1>
      <form onSubmit={onSubmitSignUp}>
        <InputWithController
          containerClassName={s.input}
          control={control}
          label="Email"
          name="email"
        />
        <InputWithController
          containerClassName={s.input}
          control={control}
          label="Password"
          name="password"
          type="password"
        />
        <InputWithController
          containerClassName={s.input}
          control={control}
          label="Confirm password"
          name="passwordConfirmation"
          type="password"
        />
        <Button className={s.signUpButton} fullWidth type="submit" variant="primary">
          Sign Up
        </Button>
      </form>
      <Typography.Body2 className={s.haveAccount}>Already have an account?</Typography.Body2>

      <Typography.Subtitle1 as={Link} className={s.signIn} to={Routes.LOGIN}>
        Sign In
      </Typography.Subtitle1>
    </Card>
  );
};
