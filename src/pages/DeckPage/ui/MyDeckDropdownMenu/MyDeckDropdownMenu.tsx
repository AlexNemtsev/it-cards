import { Link, useParams } from 'react-router-dom';

import { Burger } from '@/shared/assets/icons/Burger/Burger';
import { Edit } from '@/shared/assets/icons/Edit/Edit';
import { Learn } from '@/shared/assets/icons/Learn/Learn';
import { Routes } from '@/shared/constants/routes';
import { Dropdown } from '@/shared/ui/Dropdown';
import { DropdownItem } from '@/shared/ui/Dropdown/DropdownItem';
import { DropdownItemDivider } from '@/shared/ui/Dropdown/DropdownItemDivider';
import { Typography } from '@/shared/ui/Typography';
import { DeleteDeckModal } from '@/widgets/decks/DeleteDeckModal';

import s from './MyDeckDropdownMenu.module.scss';

export const MyDeckDropdownMenu = () => {
  const { [Routes.DECK_ID]: deckId = '' } = useParams();

  const editDeckHandler = () => {
    alert('Показать модалку редактирования колоды');
  };

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
        <button className={s.dropdownItemButton} onClick={editDeckHandler}>
          <Edit />
          <Typography.Caption>Edit</Typography.Caption>
        </button>
      </DropdownItem>
      <DropdownItemDivider />
      <DropdownItem>
        <DeleteDeckModal id={deckId} />
      </DropdownItem>
    </Dropdown>
  );
};
