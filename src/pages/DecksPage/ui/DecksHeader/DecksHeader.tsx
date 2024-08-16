import { Typography } from '@/shared/ui/Typography';
import { AddNewDeckModal } from '@/widgets/Decks/AddNewDeckModal';

import s from './DecksHeader.module.scss';

export const DecksHeader = () => {
  return (
    <div className={s.header}>
      <Typography.H1>Decks List</Typography.H1>
      <AddNewDeckModal />
    </div>
  );
};
