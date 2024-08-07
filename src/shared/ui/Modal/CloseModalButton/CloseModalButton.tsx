import { ComponentPropsWithoutRef, ReactNode } from 'react';

import { Button } from '@/shared/ui/Button';
import { Typography } from '@/shared/ui/Typography';
import { Close } from '@radix-ui/react-dialog';

type Props = {
  children: ReactNode;
} & ComponentPropsWithoutRef<typeof Button>;

export const CloseModalButton = (props: Props) => {
  const { children, ...restProps } = props;

  return (
    <Close asChild>
      <Button {...restProps}>
        <Typography.Subtitle2>{children}</Typography.Subtitle2>
      </Button>
    </Close>
  );
};
