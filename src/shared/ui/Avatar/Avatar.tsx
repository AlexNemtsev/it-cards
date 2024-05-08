import unknownAvatar from '@/shared/assets/img/unknown-avatar.png';

import s from './Avatar.module.scss';

type Props = {
  bla?: string;
  img?: string;
  size?: number;
};
export const Avatar = (props: Props) => {
  const { img = unknownAvatar, size = 36 } = props;

  // const finalImg = img ?? unknownAvatar;

  return <img alt="ava" className={s.avatar} src={img} style={{ height: size, width: size }} />;
};
