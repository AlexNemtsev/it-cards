import { Link, useParams } from 'react-router-dom';

import { Burger } from '@/shared/assets/icons/Burger/Burger';
import { Delete } from '@/shared/assets/icons/Delete/Delete';
import { Edit } from '@/shared/assets/icons/Edit/Edit';
import { Learn } from '@/shared/assets/icons/Learn/Learn';
import { Routes } from '@/shared/constants/routes';
import { Dropdown } from '@/shared/ui/Dropdown';
import { DropdownItem } from '@/shared/ui/Dropdown/DropdownItem';
import { DropdownItemDivider } from '@/shared/ui/Dropdown/DropdownItemDivider';
import { Typography } from '@/shared/ui/Typography';

import s from './MyDeckDropdownMenu.module.scss';

export const MyDeckDropdownMenu = () => {
  const { [Routes.DECK_ID]: deckId = '' } = useParams();

  return (
    <Dropdown className={s.dropdown} trigger={<Burger />}>
      <DropdownItem>
        <Link className={s.dropdownItemButton} to={`${Routes.DECKS}/${deckId}/learn`}>
          <Learn />
          <Typography.Caption>Learn</Typography.Caption>
        </Link>
      </DropdownItem>
      <DropdownItemDivider />
      <DropdownItem>
        <button className={s.dropdownItemButton}>
          <Edit />
          <Typography.Caption>Edit</Typography.Caption>
        </button>
      </DropdownItem>
      <DropdownItemDivider />
      <DropdownItem>
        <button className={s.dropdownItemButton}>
          <Delete />
          <Typography.Caption>Delete</Typography.Caption>
        </button>
      </DropdownItem>
    </Dropdown>
  );
};
