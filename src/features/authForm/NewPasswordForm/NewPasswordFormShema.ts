import { z } from 'zod';

export const NewPasswordFormSchema = z.object({
  password: z.string().min(3).max(30),
});
