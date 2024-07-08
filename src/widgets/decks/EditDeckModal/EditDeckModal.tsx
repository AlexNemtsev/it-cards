import { useEditDeckMutation } from '@/entities/deck/api/deckApi';
import { Edit } from '@/shared/assets/icons/Edit';
import { Modal } from '@/shared/ui/Modal';
import { ToolsButton } from '@/widgets/Deck/CardsTable/ui/ToolsButton';
import { EditDeckForm } from '@/widgets/decks/EditDeckModal/EditDeckForm';
import { EditDeckTitle } from '@/widgets/decks/EditDeckModal/ui/EditDeckTitle';

type Props = {
  id: string;
};

export const EditDeckModal = (props: Props) => {
  const { id } = props;

  const [editDeck] = useEditDeckMutation();

  return (
    <Modal
      title={<EditDeckTitle />}
      trigger={
        <ToolsButton>
          <Edit />
        </ToolsButton>
      }
    >
      <EditDeckForm onSubmit={data => editDeck({ data, id })} />
    </Modal>
  );
};
