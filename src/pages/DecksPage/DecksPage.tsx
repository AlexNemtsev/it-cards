import { useGetMinMaxCardsQuery } from '@/entities/deck/api/api';
import { Typography } from '@/shared/ui/Typography';
import { AddNewDeckModal } from '@/widgets/decks/AddNewDeckModal';
import { DecksFilters } from '@/widgets/decks/DecksFilters';
import { DecksTable } from '@/widgets/decks/DecksTable';

import s from './DecksPage.module.scss';

export const DecksPage = () => {
  const { data: minMaxCards } = useGetMinMaxCardsQuery();
  const minCards = minMaxCards?.min;
  const maxCards = minMaxCards?.max;

  return (
    <section className={s.section}>
      <div className={s.header}>
        <Typography.H1>Decks List</Typography.H1>
        <AddNewDeckModal />
      </div>
      <DecksFilters maxCards={maxCards} minCards={minCards} />
      <DecksTable maxCards={maxCards} minCards={minCards} />
    </section>
  );
};
