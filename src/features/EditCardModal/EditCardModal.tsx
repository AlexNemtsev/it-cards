import { useUpdateCardMutation } from '@/entities/card/api/cardApi';
import { Card } from '@/entities/card/types';
import { EditCardForm } from '@/features/EditCardModal/EditCardForm';
import { EditCardModalTitle } from '@/features/EditCardModal/ui/EditCardModalTitle';
import { Edit } from '@/shared/assets/icons/Edit';
import { Modal } from '@/shared/ui/Modal';
import { ToolsButton } from '@/widgets/Deck/CardsTable/ui/ToolsButton';

import s from './EditCardModal.module.scss';

type Props = {
  card: Card;
};
export const EditCardModal = (props: Props) => {
  const { card } = props;

  const [updateCard] = useUpdateCardMutation();

  return (
    <Modal
      title={<EditCardModalTitle />}
      trigger={
        <ToolsButton className={s.cardButton}>
          <Edit />
        </ToolsButton>
      }
    >
      <EditCardForm card={card} onSubmit={data => updateCard({ data, id: card.id })} />
    </Modal>
  );
};
