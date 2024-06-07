import { ComponentPropsWithoutRef } from 'react';

import { Button } from '@/shared/ui/Button';

type Props = ComponentPropsWithoutRef<typeof Button>;

export const OpenNewDeckModalButton = (props: Props) => {
  return <Button {...props}>Add new Deck</Button>;
};
