import { useLogoutMutation } from '@/entities/auth/api/auth';
import { Delete } from '@/shared/assets/icons/Delete/Delete';
import { Edit } from '@/shared/assets/icons/Edit/Edit';
import { Learn } from '@/shared/assets/icons/Learn/Learn';
import { Dropdown } from '@/shared/ui/Dropdown';
import { DropdownItem } from '@/shared/ui/Dropdown/DropdownItem';
import { DropdownItemDivider } from '@/shared/ui/Dropdown/DropdownItemDivider';
import { Typography } from '@/shared/ui/Typography';

export const MainPage = () => {
  const [logout] = useLogoutMutation();

  const onClickHandler = () => {
    logout();
  };

  return (
    <div>
      <span>Теперь можно вылогиниться</span>
      <Dropdown>
        <DropdownItem>
          <Learn />
          <Typography.Caption>Learn</Typography.Caption>
        </DropdownItem>
        <DropdownItemDivider />
        <DropdownItem>
          <Edit />
          <Typography.Caption>Edit</Typography.Caption>
        </DropdownItem>
        <DropdownItemDivider />
        <DropdownItem>
          <Delete />
          <Typography.Caption>Delete</Typography.Caption>
        </DropdownItem>
      </Dropdown>
      MainPage
      <p>Аутентификация прошла успешно</p>
      <p>Теперь можно вылогиниться</p>
      <button onClick={onClickHandler} style={{ color: 'red' }}>
        Logout
      </button>
    </div>
  );
};
