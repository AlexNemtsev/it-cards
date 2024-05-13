import { ComponentProps } from 'react';
import { Link } from 'react-router-dom';

import clsx from 'clsx';

import s from './DropdownLink.module.scss';

type Props = {
  className?: string;
  to?: string;
} & ComponentProps<'a'>;
export const DropdownLink = (props: Props) => {
  const { className, to = '/', ...restProps } = props;
  const classNames = clsx(s.dropdownLink, className);

  return <Link className={classNames} to={to} {...restProps} />;
};
