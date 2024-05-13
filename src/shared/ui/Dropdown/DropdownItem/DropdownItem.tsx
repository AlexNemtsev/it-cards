import { ComponentProps, ReactNode } from 'react';

import clsx from 'clsx';

import s from './DropdownItem.module.scss';

type Props = {
  children?: ReactNode;
} & ComponentProps<'div'>;
export const DropdownItem = (props: Props) => {
  const { className, ...restProps } = props;
  const classNames = clsx(s.dropdownItem, className);

  return <div className={classNames} {...restProps} />;
};
