import { useGetMinMaxCardsQuery } from '@/entities/deck/api/api';
import { Spinner } from '@/shared/ui/Spinner';
import { DecksHeader } from '@/widgets/Deck/DecksHeader';
import { DecksFilters } from '@/widgets/decks/DecksFilters';
import { DecksTable } from '@/widgets/decks/DecksTable';

import s from './DecksPage.module.scss';

export const DecksPage = () => {
  const { data: minMaxCards, isLoading } = useGetMinMaxCardsQuery();
  const minCards = minMaxCards?.min;
  const maxCards = minMaxCards?.max;

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <section className={s.section}>
          <DecksHeader />
          <DecksFilters maxCards={maxCards} minCards={minCards} />
          <DecksTable maxCards={maxCards} minCards={minCards} />
        </section>
      )}
    </>
  );
};
