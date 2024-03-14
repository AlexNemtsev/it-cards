import { ComponentProps, ReactNode } from 'react';

import clsx from 'clsx';

import s from './DropdownItem.module.scss';

type Props = {
  children?: ReactNode;
} & ComponentProps<'a'>;
export const DropdownItem = (props: Props) => {
  const { children, href } = props;
  const classNames = clsx(s.dropdownItem);

  return (
    <a className={classNames} href={href}>
      {children}
    </a>
  );
};
