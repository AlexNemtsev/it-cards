import { useDeleteDeckMutation } from '@/entities/deck/api/deckApi';
import { Delete } from '@/shared/assets/icons/Delete/Delete';
import { CloseModalButton, Modal } from '@/shared/ui/Modal';
import { ToolsButton } from '@/widgets/Deck/CardsTable/ui/ToolsButton';
import { DeleteDeckTitle } from '@/widgets/decks/DeleteDeckModal/ui/DeleteDeckTitle';

import s from './DeleteDeckModal.module.scss';

type Props = {
  id: string;
};

export const DeleteDeckModal = (props: Props) => {
  const { id } = props;
  const [deleteDeck] = useDeleteDeckMutation();

  return (
    <Modal
      title={<DeleteDeckTitle />}
      trigger={
        <ToolsButton>
          <Delete />
        </ToolsButton>
      }
    >
      <div className={s.buttons}>
        <CloseModalButton variant="secondary">Cancel</CloseModalButton>
        <CloseModalButton onClick={() => deleteDeck(id)}>Yes</CloseModalButton>
      </div>
    </Modal>
  );
};
