import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react';

import { Button } from '@/shared/ui/Button';

type Props = ComponentPropsWithoutRef<typeof Button>;

export const OpenNewDeckModalButton = forwardRef<ElementRef<typeof Button>, Props>(
  (props: Props, ref) => {
    return (
      <Button {...props} ref={ref}>
        Add new Deck
      </Button>
    );
  }
);
