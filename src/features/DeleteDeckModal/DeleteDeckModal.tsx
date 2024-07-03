import { Delete } from '@/shared/assets/icons/Delete/Delete';
import { CloseModalButton, Modal } from '@/shared/ui/Modal';
import { Typography } from '@/shared/ui/Typography';

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
      <CloseModalButton>Cancel</CloseModalButton>
      <CloseModalButton onClick={deleteDeckHandler}>Удалить</CloseModalButton>
    </Modal>
  );
};
