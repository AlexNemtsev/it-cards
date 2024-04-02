import { ReactNode } from 'react';

import { Typography } from '@/components/ui/Typography';

type Props = {
  children: ReactNode;
  className?: string;
  isSmall?: boolean;
};

export const TypographySelector = (props: Props) => {
  const { children, className, isSmall } = props;

  return isSmall ? (
    <Typography.Body2 className={className}>{children}</Typography.Body2>
  ) : (
    <Typography.Body1 className={className}>{children}</Typography.Body1>
  );
};
