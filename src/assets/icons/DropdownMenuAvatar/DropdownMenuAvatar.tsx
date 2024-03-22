import avatar from '@/assets/img/avatar-for-dropmenu.png';

import s from './DropdownMenuAvatar.module.scss';
export const DropdownMenuAvatar = () => {
  return <img alt="avatar" className={s.DropdownMenuAvatar} src={avatar} />;
};
