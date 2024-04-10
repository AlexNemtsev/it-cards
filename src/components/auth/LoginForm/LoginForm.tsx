import { useForm } from 'react-hook-form';

import { FormCheckbox } from '@/components/FormCheckbox/FormCheckbox';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const loginScheme = z.object({
  email: z.string().email(),
  password: z.string().min(3),
  rememberMe: z.boolean().optional(),
});

type FormValues = z.infer<typeof loginScheme>;

export const LoginForm = () => {
  const {
    control,
    formState: { errors },
    handleSubmit,
    register,
  } = useForm<FormValues>({
    delayError: 2000,
    resolver: zodResolver(loginScheme),
  });

  console.log(errors);
  const onSubmit = (data: FormValues) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input {...register('email')} error={errors.email?.message} label="email" />
      <Input {...register('password')} error={errors.password?.message} label="password" />

      <FormCheckbox control={control} name="rememberMe" />

      <Button type="submit">Submit</Button>
    </form>
  );
};
