import { ComponentPropsWithoutRef } from 'react';

import avatarDummy from '@/shared/assets/img/unknown-avatar.png';
import clsx from 'clsx';

import s from './Avatar.module.scss';

type Props = {
  img?: string;
  size?: number;
} & ComponentPropsWithoutRef<'img'>;
export const Avatar = (props: Props) => {
  const { className, img, size = 36 } = props;

  const classNames = {
    avatar: clsx(s.avatar, className),
  };

  return (
    <img
      alt="uset avatar"
      className={classNames.avatar}
      src={img ?? avatarDummy}
      style={{ height: size, width: size }}
    />
  );
};
