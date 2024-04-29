import { ComponentProps, ReactNode } from 'react';

import clsx from 'clsx';

import s from './DropdownItem.module.scss';

type Props = {
  children?: ReactNode;
} & ComponentProps<'a'>;
export const DropdownItem = (props: Props) => {
  const { children } = props;
  const classNames = clsx(s.dropdownItem);

  return <button className={classNames}>{children}</button>;
};
