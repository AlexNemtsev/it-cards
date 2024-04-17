import { z } from 'zod';

export const logUpFormSchema = z
  .object({
    email: z.string().email('Invalid email address'),
    password: z.string().min(3),
    passwordConfirmation: z.string(),
  })
  .superRefine((data, ctx) => {
    if (data.password !== data.passwordConfirmation) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: 'Passwords do not match',
        path: ['passwordConfirmation'],
      });
    }

    return data;
  });
