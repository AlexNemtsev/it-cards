import { z } from 'zod';

import { logUpFormSchema } from './LogUpFormShema';

export type LogUpFormValues = z.infer<typeof logUpFormSchema>;
