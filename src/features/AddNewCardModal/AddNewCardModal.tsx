import { useCreateCardMutation } from '@/entities/card/api/cardApi';
import { NewCardForm } from '@/features/AddNewCardModal/NewCardForm/NewCardForm';
import { AddNewCardModalTitle } from '@/features/AddNewCardModal/ui/AddNewCardModalTitle';
import { OpenNewCardModalButton } from '@/features/AddNewCardModal/ui/OpenNewCardModalButton';
import { Modal } from '@/shared/ui/Modal';

import s from './AddNewCardModal.module.scss';

type Props = {
  deckId: string;
};
export const AddNewCardModal = (props: Props) => {
  const { deckId } = props;
  const [createCard] = useCreateCardMutation();

  return (
    <Modal
      className={s.content}
      title={<AddNewCardModalTitle />}
      trigger={<OpenNewCardModalButton />}
    >
      <NewCardForm onSubmit={data => createCard({ data, deckId })} />
    </Modal>
  );
};
