import { ComponentPropsWithoutRef, forwardRef } from 'react';

import { Button } from '@/shared/ui/Button';

type Props = ComponentPropsWithoutRef<typeof Button>;

import s from './OpenNewDeckModalButton.module.scss';

export const OpenNewDeckModalButton = forwardRef<HTMLButtonElement, Props>((props, ref) => {
  return (
    <Button ref={ref} {...props} className={s.open}>
      Add new Deck
    </Button>
  );
});
