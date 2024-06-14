import { Burger } from '@/shared/assets/icons/Burger/Burger';
import { Delete } from '@/shared/assets/icons/Delete/Delete';
import { Edit } from '@/shared/assets/icons/Edit/Edit';
import { Learn } from '@/shared/assets/icons/Learn/Learn';
import { Dropdown } from '@/shared/ui/Dropdown';
import { DropdownItem } from '@/shared/ui/Dropdown/DropdownItem';
import { DropdownItemDivider } from '@/shared/ui/Dropdown/DropdownItemDivider';
import { Typography } from '@/shared/ui/Typography';

import s from './MyDeckDropdownMenu.module.scss';

export const MyDeckDropdownMenu = () => {
  return (
    <Dropdown className={s.dropdown} trigger={<Burger />}>
      <DropdownItem>
        <button className={s.dropdownItemButton} type="button">
          <Learn />
          <Typography.Caption>Learn</Typography.Caption>
        </button>
      </DropdownItem>
      <DropdownItemDivider />
      <DropdownItem>
        <button className={s.dropdownItemButton} type="button">
          <Edit />
          <Typography.Caption>Edit</Typography.Caption>
        </button>
      </DropdownItem>
      <DropdownItemDivider />
      <DropdownItem>
        <button className={s.dropdownItemButton} type="button">
          <Delete />
          <Typography.Caption>Delete</Typography.Caption>
        </button>
      </DropdownItem>
    </Dropdown>
  );
};
