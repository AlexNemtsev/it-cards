import { useCreateDeckMutation } from '@/entities/deck/api/deckApi';
import { Modal } from '@/shared/ui/Modal';

import { NewDeckForm } from './NewDeckForm';
import { NewDeckFormValues } from './NewDeckForm/NewDeckForm';
import { NewDeckTitle } from './ui/NewDeckTitle';
import { OpenNewDeckModalButton } from './ui/OpenNewDeckModalButton';

export const AddNewDeckModal = () => {
  const [createDeck] = useCreateDeckMutation();

  const addDeck = async (data: NewDeckFormValues) => {
    createDeck(data);
  };

  return (
    <Modal title={<NewDeckTitle />} trigger={<OpenNewDeckModalButton />}>
      <NewDeckForm onSubmit={addDeck} />
    </Modal>
  );
};
