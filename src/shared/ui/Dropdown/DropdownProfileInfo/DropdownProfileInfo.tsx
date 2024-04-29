import { ComponentProps, ReactNode } from 'react';

import s from './DropdownProfileInfo.module.scss';

type Props = {
  children?: ReactNode;
} & ComponentProps<'a'>;
export const DropdownProfileInfo = (props: Props) => {
  const { children } = props;

  return <div className={s.dropdownProfileInfo}>{children}</div>;
};
