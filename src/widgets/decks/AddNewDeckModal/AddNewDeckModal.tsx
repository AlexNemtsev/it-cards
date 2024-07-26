import { useCreateDeckMutation } from '@/entities/deck/api/deckApi';
import { Modal } from '@/shared/ui/Modal';

import { NewDeckForm } from './NewDeckForm';
import { NewDeckTitle } from './ui/NewDeckTitle';
import { OpenNewDeckModalButton } from './ui/OpenNewDeckModalButton/OpenNewDeckModalButton';

export const AddNewDeckModal = () => {
  const [createDeck] = useCreateDeckMutation();

  return (
    <Modal title={<NewDeckTitle />} trigger={<OpenNewDeckModalButton />}>
      <NewDeckForm onSubmit={createDeck} />
    </Modal>
  );
};
