import { Button } from '@/shared/ui/Button';
import { Modal } from '@/shared/ui/Modal';

import { NewDeckForm } from './NewDeckForm';
import { NewDeckTitle } from './ui/NewDeckTitle';

export const AddNewDeckModal = () => {
  return (
    <Modal title={<NewDeckTitle />} trigger={<Button>Add new Deck</Button>}>
      <NewDeckForm onSubmit={data => alert(data)} />
    </Modal>
  );
};
