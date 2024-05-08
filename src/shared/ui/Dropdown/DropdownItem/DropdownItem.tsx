import { ComponentProps, ReactNode } from 'react';
import { Link } from 'react-router-dom';

import clsx from 'clsx';

import s from './DropdownItem.module.scss';

type Props = {
  children?: ReactNode;
  to?: string;
} & ComponentProps<'a'>;
export const DropdownItem = (props: Props) => {
  const { children, to = '/' } = props;
  const classNames = clsx(s.dropdownItem);

  return (
    <Link className={classNames} to={to}>
      {children}
    </Link>
  );
};
