import { useCreateCardMutation } from '@/entities/card/api/cardApi';
import {
  AddNewCardFormValues,
  NewCardForm,
} from '@/features/AddNewCardModal/NewCardForm/NewCardForm';
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

  const addNewCard = (data: AddNewCardFormValues) => {
    createCard({ data, deckId });
  };

  return (
    <Modal
      className={s.content}
      title={<AddNewCardModalTitle />}
      trigger={<OpenNewCardModalButton />}
    >
      <NewCardForm onSubmit={addNewCard} />
    </Modal>
  );
};
