import { ComponentPropsWithoutRef } from 'react';

import { Typography } from '@/components/ui/Typography';
import { clsx } from 'clsx';

import s from './PaginationButton.module.scss';

type Props = {
  isActive?: boolean;
  setLocalCurrentPage: (value: number) => void;
} & ComponentPropsWithoutRef<'button'>;

export const PaginationButton = (props: Props) => {
  const { children, className, isActive, setLocalCurrentPage, ...restProps } = props;
  const classNames = clsx(s.button, isActive && s.active, className);

  const onClickHandler = () => {
    children && setLocalCurrentPage(Number(children));
  };

  return (
    <Typography.Body2 className={classNames} onClick={onClickHandler} {...restProps} as="button">
      {children}
    </Typography.Body2>
  );
};
