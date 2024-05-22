import { ComponentProps } from 'react';

export const getInputType = (type: ComponentProps<'input'>['type'], isPasswordHidden: boolean) => {
  if ((type === 'password' && !isPasswordHidden) || type === 'search') {
    return 'text';
  }

  return type;
};
