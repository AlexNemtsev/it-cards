import { z } from 'zod';

export const SignUpFormSchema = z
  .object({
    email: z.string().email(),
    password: z.string().min(3).max(30),
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

export type SignUpFormValues = z.infer<typeof SignUpFormSchema>;
