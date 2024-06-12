import { ComponentPropsWithoutRef } from 'react';

import { useMeQuery } from '@/entities/user/api';
import avatarDummy from '@/shared/assets/img/unknown-avatar.png';
import clsx from 'clsx';

import s from './Avatar.module.scss';

type Props = {
  size?: number;
} & ComponentPropsWithoutRef<'img'>;
export const Avatar = (props: Props) => {
  const { className, size = 36 } = props;

  const { data } = useMeQuery();

  const classNames = {
    avatar: clsx(s.avatar, className),
  };

  return (
    <img
      alt="user avatar"
      className={classNames.avatar}
      src={data?.avatar ?? avatarDummy}
      style={{ height: size, width: size }}
    />
  );
};
