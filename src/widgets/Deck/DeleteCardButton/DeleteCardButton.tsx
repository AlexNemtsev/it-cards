import { Delete } from '@/shared/assets/icons/Delete/Delete';

import s from './DeleteCardButton.module.scss';

export type Props = {
  onDeleteCard: () => void;
};

export const DeleteCardButton = (props: Props) => {
  const { onDeleteCard } = props;

  return (
    <button className={s.cardButton} onClick={onDeleteCard}>
      <Delete />
    </button>
  );
};
