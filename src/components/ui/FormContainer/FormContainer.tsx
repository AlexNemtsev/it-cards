import { ElementType } from 'react';

import { Card } from '@/components/ui/Card';
import { CardProps } from '@/components/ui/Card/Card';
import { clsx } from 'clsx';

import s from './FormContainer.module.scss';

export const FormContainer = <T extends ElementType = 'div'>(props: CardProps<T>) => {
  const { children, className, ...restProps } = props;

  const classNames = clsx(s.container, className);

  return (
    <Card className={classNames} {...restProps}>
      {children}
    </Card>
  );
};
