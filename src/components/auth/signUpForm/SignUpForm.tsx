import { useForm } from 'react-hook-form';

import { Card } from '@/components/ui//Card';
import { Button } from '@/components/ui/Button';
import { Typography } from '@/components/ui/Typography';
import { InputWithController } from '@/components/withControllers/InputWithController';
import { zodResolver } from '@hookform/resolvers/zod';

import s from './SignUpForm.module.scss';

import { SignUpFormSchema, SignUpFormValues } from './SignUpFormShema';

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
      <Typography.Subtitle1 className={s.signIn}>Sign In</Typography.Subtitle1>
    </Card>
  );
};
