import { z } from 'zod';

import { NewPasswordFormSchema } from './NewPasswordFormShema';

export type NewPasswordFormValues = z.infer<typeof NewPasswordFormSchema>;
