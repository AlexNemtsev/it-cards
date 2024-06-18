import { Avatar } from '@/entities/user/ui/Avatar';
import { Typography } from '@/shared/ui/Typography';

import s from './Trigger.module.scss';

type Props = {
  name: string;
};
export const Trigger = (props: Props) => {
  const { name } = props;

  return (
    <div className={s.trigger}>
      <Typography.Subtitle2 className={s.name}> {name} </Typography.Subtitle2>
      <Avatar className={s.avatar} />
    </div>
  );
};
