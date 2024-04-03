import { ComponentPropsWithoutRef, ReactNode } from 'react';

import { Close } from '@radix-ui/react-dialog';

import { Button } from '../../Button';
import { Typography } from '../../Typography';

type Props = {
  children: ReactNode;
} & ComponentPropsWithoutRef<typeof Button>;

export const ModalButton = (props: Props) => {
  const { children, ...restProps } = props;

  return (
    <Close asChild>
      <Button {...restProps}>
        <Typography.Subtitle2>{children}</Typography.Subtitle2>
      </Button>
    </Close>
  );
};
