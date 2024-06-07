import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react';

import { Typography } from '@/shared/ui/Typography';

type Props = ComponentPropsWithoutRef<typeof Typography.H1>;

export const NewDeckTitle = forwardRef<ElementRef<typeof Typography.H1>, Props>((props, ref) => {
  return (
    <Typography.Body1 {...props} ref={ref}>
      Add new Deck
    </Typography.Body1>
  );
});
