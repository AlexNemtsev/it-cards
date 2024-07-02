import { Delete } from '@/shared/assets/icons/Delete/Delete';
import { Button } from '@/shared/ui/Button';
import { Modal } from '@/shared/ui/Modal';
import { Typography } from '@/shared/ui/Typography';
import { Close } from '@radix-ui/react-dialog';

import s from '@/pages/DeckPage/ui/MyDeckDropdownMenu/MyDeckDropdownMenu.module.scss';

export const DeleteDeckModal = () => {
  const deleteDeckHandler = () => {
    alert('Запрос на удаление колоды');
  };

  return (
    <Modal
      title={<p>Точно удалить колоду?</p>}
      trigger={
        <button className={s.dropdownItemButton}>
          <Delete />
          <Typography.Caption>Delete</Typography.Caption>
        </button>
      }
    >
      <Close asChild>
        <Button variant="secondary">Cancel </Button>
      </Close>

      <Button onClick={deleteDeckHandler}>
        Удалить
        <Close asChild></Close>
      </Button>
    </Modal>
  );
};
