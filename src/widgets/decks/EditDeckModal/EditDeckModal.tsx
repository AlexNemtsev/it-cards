import { useEditDeckMutation } from '@/entities/deck/api/deckApi';
import { Edit } from '@/shared/assets/icons/Edit';
import { Modal } from '@/shared/ui/Modal';
import { ToolsButton } from '@/widgets/Deck/CardsTable/ui/ToolsButton';
import { EditDeckForm } from '@/widgets/Decks/EditDeckModal/EditDeckForm';
import { EditDeckTitle } from '@/widgets/Decks/EditDeckModal/ui/EditDeckTitle';

type Props = {
  cover: string;
  id: string;
  isPrivate: boolean;
  name: string;
};

export const EditDeckModal = (props: Props) => {
  const { cover, id, isPrivate, name } = props;

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
      <EditDeckForm
        defaultIsPrivate={isPrivate}
        defaultName={name}
        onSubmit={data => editDeck({ data, id })}
        previewFromServer={cover}
      />
    </Modal>
  );
};
