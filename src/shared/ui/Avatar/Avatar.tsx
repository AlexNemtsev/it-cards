import { ComponentPropsWithoutRef } from 'react';

import unknownAvatar from '@/shared/assets/img/unknown-avatar.png';
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

  const finalImg = img ?? unknownAvatar;

  return (
    <img
      alt="ava"
      className={classNames.avatar}
      src={finalImg}
      style={{ height: size, width: size }}
    />
  );
};
