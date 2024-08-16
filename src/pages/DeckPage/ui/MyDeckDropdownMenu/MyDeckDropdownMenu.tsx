import { Link } from 'react-router-dom';

import { Burger } from '@/shared/assets/icons/Burger/Burger';
import { Learn } from '@/shared/assets/icons/Learn/Learn';
import { Routes } from '@/shared/constants/routes';
import { Dropdown } from '@/shared/ui/Dropdown';
import { DropdownItem } from '@/shared/ui/Dropdown/DropdownItem';
import { DropdownItemDivider } from '@/shared/ui/Dropdown/DropdownItemDivider';
import { DeleteDeckModal } from '@/widgets/decks/DeleteDeckModal';
import { EditDeckModal } from '@/widgets/decks/EditDeckModal';

import s from './MyDeckDropdownMenu.module.scss';

type Props = {
  cover: string;
  id: string;
  isPrivate: boolean;
  name: string;
};

export const MyDeckDropdownMenu = (props: Props) => {
  const { cover, id, isPrivate, name } = props;

  return (
    <Dropdown className={s.dropdown} trigger={<Burger />}>
      <DropdownItem>
        <Link className={s.dropdownItemButton} to={`${Routes.DECKS}/${id}/learn`}>
          <Learn />
        </Link>
      </DropdownItem>
      <DropdownItemDivider />
      <DropdownItem className={s.dropdownItemButton}>
        <EditDeckModal cover={cover} id={id} isPrivate={isPrivate} name={name} />
      </DropdownItem>
      <DropdownItemDivider />
      <DropdownItem className={s.dropdownItemButton}>
        <DeleteDeckModal id={id} />
      </DropdownItem>
    </Dropdown>
  );
};
