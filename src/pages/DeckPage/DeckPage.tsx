import { useParams, useSearchParams } from 'react-router-dom';

import { useGetCardsQuery } from '@/entities/card/api/cardApi';
import { useGetDeckQuery, useGetDecksQuery } from '@/entities/deck/api/deckApi';
import { BackToLink } from '@/pages/DeckPage/ui/BackToLink';
import { Routes } from '@/shared/constants/routes';
import { Button } from '@/shared/ui/Button';
import { Input } from '@/shared/ui/Input';
import { Pagination } from '@/shared/ui/Pagination';
import { Typography } from '@/shared/ui/Typography';

import s from './DeckPage.module.scss';

export const DeckPage = () => {
  const { [Routes.DECK_ID]: deckId = '' } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();

  console.log(searchParams.get('page'));

  const { data: decks } = useGetDecksQuery();
  const { data: deck } = useGetDeckQuery(deckId);
  const { data: cards } = useGetCardsQuery(deckId);

  const pagination = cards?.pagination ?? {
    currentPage: 1,
    itemsPerPage: 0,
    totalItems: 0,
    totalPages: 1,
  };

  console.log(decks);

  console.log(deck);
  console.log(cards);

  return (
    <div className={s.container}>
      <BackToLink to="/decks">Back to Decks List</BackToLink>
      <div className={s.deckTitle}>
        <Typography.H1>{deck?.name}</Typography.H1>
        <Button onClick={() => setSearchParams({ page: '1' })}>Learn to Pack</Button>
      </div>
      <Input placeholder="Input search" type="search" />
      <Pagination {...pagination} />
    </div>
  );
};
