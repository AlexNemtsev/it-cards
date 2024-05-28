import { useState } from 'react';
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

  const [search, setSearch] = useState('');

  // console.log(searchParams);
  // console.log(searchParams.get('page'));
  // searchParams.set('question', '%D0%96%D0%B8');
  // searchParams.set('question', 'Жи');
  //
  // console.log(searchParams.get('question'));

  // setSearchParams(searchParams);
  // const { data: decks } = useGetDecksQuery();
  const { data: deck } = useGetDeckQuery(deckId);

  // const argsForUseGetCardsQuery = { deckId, ...searchParams };

  const { data: cards } = useGetCardsQuery({ deckId, question: search });

  const pagination = cards?.pagination ?? {
    currentPage: 1,
    itemsPerPage: 0,
    totalItems: 0,
    totalPages: 1,
  };

  // console.log(deck);

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
        onValueChange={setSearch}
        placeholder="Search by question"
        type="search"
        value={search}
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
