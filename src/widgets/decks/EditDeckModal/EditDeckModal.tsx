import { Edit } from '@/shared/assets/icons/Edit';
import { Modal } from '@/shared/ui/Modal';
import { ToolsButton } from '@/widgets/Deck/CardsTable/ui/ToolsButton';
import { EditDeckTitle } from '@/widgets/decks/EditDeckModal/ui/EditDeckTitle';

type Props = {
  id: string;
};

export const EditDeckModal = (props: Props) => {
  const { id } = props;

  // const [deleteDeck] = useDeleteDeckMutation();
  console.log(id);

  return (
    <Modal
      title={<EditDeckTitle />}
      trigger={
        <ToolsButton>
          <Edit />
        </ToolsButton>
      }
    >
      Edit Deck Form
    </Modal>
  );
};
