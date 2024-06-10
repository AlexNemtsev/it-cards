import { Modal } from '@/shared/ui/Modal';

import { NewDeckForm } from './NewDeckForm';
import { NewDeckTitle } from './ui/NewDeckTitle';
import { OpenNewDeckModalButton } from './ui/OpenNewDeckModalButton';

export const AddNewDeckModal = () => {
  return (
    <Modal title={<NewDeckTitle />} trigger={<OpenNewDeckModalButton />}>
      <NewDeckForm onSubmit={data => alert(data)} />
    </Modal>
  );
};
