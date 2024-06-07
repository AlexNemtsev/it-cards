import { Avatar } from '@/shared/ui/Avatar';
import { Typography } from '@/shared/ui/Typography';

import s from './Trigger.module.scss';

type Props = {
  img: string;
  name: string;
};
export const Trigger = ({ img, name }: Props) => {
  return (
    <div className={s.trigger}>
      <Typography.Subtitle2 className={s.name}> {name} </Typography.Subtitle2>
      <Avatar className={s.avatar} img={img} />
    </div>
  );
};
