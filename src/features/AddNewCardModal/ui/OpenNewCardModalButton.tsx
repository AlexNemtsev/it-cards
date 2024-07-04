import { ComponentPropsWithoutRef, forwardRef } from 'react';

import { Button } from '@/shared/ui/Button';

type Props = ComponentPropsWithoutRef<typeof Button>;

export const OpenNewCardModalButton = forwardRef<HTMLButtonElement, Props>((props, ref) => {
  return (
    <Button ref={ref} {...props}>
      Add new Card
    </Button>
  );
});
