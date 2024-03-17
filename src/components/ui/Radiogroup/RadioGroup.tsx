import { ComponentPropsWithoutRef, ReactNode } from 'react';

import { Root } from '@radix-ui/react-radio-group';

import s from './RadioGroup.module.scss';

type Props = {
  children: ReactNode;
} & ComponentPropsWithoutRef<typeof Root>;

export const RadioGroup = ({ children }: Props) => (
  <Root className={s.RadioGroupRoot}>{children}</Root>
);
