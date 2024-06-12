import { AddNewCardModalTitle } from '@/pages/DeckPage/ui/AddNewCardModal/ui/AddNewCardModalTitle';
import { Button } from '@/shared/ui/Button';
import { Modal } from '@/shared/ui/Modal';
import { Typography } from '@/shared/ui/Typography';

export const AddNewCardModal = () => {
  return (
    <Modal title={<AddNewCardModalTitle />} trigger={<Button>Add New Card</Button>}>
      <Typography.Subtitle2>Question</Typography.Subtitle2>
    </Modal>
  );
};
