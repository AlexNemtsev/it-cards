import { ComponentProps } from 'react';

import clsx from 'clsx';

import s from './DropdownProfileInfo.module.scss';

type Props = {
  className?: string;
} & ComponentProps<'div'>;
export const DropdownProfileInfo = (props: Props) => {
  const { className, ...restProps } = props;
  const classNames = clsx(s.dropdownProfileInfo, className);

  return <div className={classNames} {...restProps} />;
};
