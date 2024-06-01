import { useParams, useSearchParams } from 'react-router-dom';

import { useGetCardsQuery } from '@/entities/card/api/cardApi';
import { useGetDeckQuery } from '@/entities/deck/api/deckApi';
import { BackToLink } from '@/pages/DeckPage/ui/BackToLink';
import { Routes } from '@/shared/constants/routes';
import { Button } from '@/shared/ui/Button';
import { Input } from '@/shared/ui/Input';
import { PageContainer } from '@/shared/ui/PageContainer';
import { Pagination } from '@/shared/ui/Pagination';
import { Typography } from '@/shared/ui/Typography';
import { CardsTable } from '@/widgets/Deck/CardsTable';

import s from './DeckPage.module.scss';

export const DeckPage = () => {
  const { [Routes.DECK_ID]: deckId = '' } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();

  const { data: deck } = useGetDeckQuery(deckId);

  const question = searchParams.get('question') || '';
  const currentPage = Number(searchParams.get('currentPage')) || 1;
  const itemsPerPage = Number(searchParams.get('itemsPerPage')) || 10;
  const orderBy = `${searchParams.get('key') || 'updated'}-${
    searchParams.get('direction') || 'asc'
  }`;

  const { data: cards } = useGetCardsQuery({
    currentPage,
    deckId,
    itemsPerPage,
    orderBy,
    question,
  });

  const pagination = cards?.pagination ?? {
    currentPage: 1,
    itemsPerPage: 0,
    totalItems: 0,
    totalPages: 1,
  };

  const onValueChange = (value: string) => {
    searchParams.set('question', value);
    setSearchParams(searchParams);
  };
  const onClearInput = () => {
    searchParams.set('question', '');
    setSearchParams(searchParams);
  };

  return (
    <PageContainer className={s.container}>
      <BackToLink to="/decks">Back to Decks List</BackToLink>
      <div className={s.deckTitle}>
        <Typography.H1>{deck?.name}</Typography.H1>
        <Button onClick={() => setSearchParams({ page: '1' })}>Learn to Pack</Button>
      </div>
      {deck?.cover && <img alt="cover" className={s.cover} src={deck.cover} />}
      <Input
        containerClassName={s.input}
        onClearInput={onClearInput}
        onValueChange={onValueChange}
        placeholder="Search by question"
        type="search"
        value={question}
      />
      {cards && <CardsTable data={cards.items} />}
      <Pagination
        className={s.pagination}
        currentPage={pagination.currentPage}
        itemsPerPage={pagination.itemsPerPage.toString()}
        itemsPerPageList={['10', '20', '30', '50', '100']}
        onItemsPerPageChange={() => {}}
        onValueChange={() => {}}
        totalPages={pagination.totalPages}
      />
    </PageContainer>
  );
};
