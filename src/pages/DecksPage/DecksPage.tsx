import { useGetMinMaxCardsQuery } from '@/entities/deck/api/deckApi';
import { DecksHeader } from '@/pages/DecksPage/ui/DecksHeader';
import { PageContainer } from '@/shared/ui/PageContainer';
import { Spinner } from '@/shared/ui/Spinner';
import { DecksFilters } from '@/widgets/decks/DecksFilters';
import { DecksTable } from '@/widgets/decks/DecksTable';

import s from './DecksPage.module.scss';

export const DecksPage = () => {
  const { data: minMaxCards, isLoading } = useGetMinMaxCardsQuery();
  const minCards = minMaxCards?.min;
  const maxCards = minMaxCards?.max;

  return (
    <PageContainer className={s.container}>
      {isLoading ? (
        <Spinner />
      ) : (
        <section className={s.section}>
          <DecksHeader />
          <DecksFilters maxCards={maxCards} minCards={minCards} />
          <DecksTable maxCards={maxCards} minCards={minCards} />
        </section>
      )}
    </PageContainer>
  );
};
