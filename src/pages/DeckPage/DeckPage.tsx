import { useParams, useSearchParams } from 'react-router-dom';

import { useGetCardsQuery } from '@/entities/card/api/cardApi';
import { useGetDeckQuery } from '@/entities/deck/api/deckApi';
import { useMeQuery } from '@/entities/user/api';
import { AddNewCardModal } from '@/pages/DeckPage/ui/AddNewCardModal/AddNewCardModal';
import { BackToLink } from '@/pages/DeckPage/ui/BackToLink';
import { MyDeckDropdownMenu } from '@/pages/DeckPage/ui/MyDeckDropdownMenu';
import { Routes } from '@/shared/constants/routes';
import { Button } from '@/shared/ui/Button';
import { DebouncedInput } from '@/shared/ui/DebouncedInput';
import { PageContainer } from '@/shared/ui/PageContainer';
import { Pagination } from '@/shared/ui/Pagination';
import { Typography } from '@/shared/ui/Typography';
import { CardsTable } from '@/widgets/Deck/CardsTable';

import s from './DeckPage.module.scss';

export const DeckPage = () => {
  const { [Routes.DECK_ID]: deckId = '' } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const { data: deck } = useGetDeckQuery(deckId);
  const { data: meData } = useMeQuery();
  const isYourDeck = meData?.id === deck?.userId;
  const question = searchParams.get('question') || '';
  const currentPage = Number(searchParams.get('currentPage')) || 1;
  const itemsPerPage = Number(searchParams.get('itemsPerPage')) || 10;
  const orderBy = searchParams.get('orderBy') || 'updated-desc';

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
  const utilSetSearchParams = (key: string, value: string) => {
    searchParams.set(key, value);
    setSearchParams(searchParams);
  };
  const changeSearchValue = (value: string) => {
    utilSetSearchParams('question', value);
    utilSetSearchParams('currentPage', '1');
  };
  const onInputClear = () => {
    utilSetSearchParams('question', '');
    utilSetSearchParams('currentPage', '1');
  };
  const onPaginationChange = (value: number) => {
    utilSetSearchParams('currentPage', value.toString());
  };
  const onItemsPerPageChange = (value: string) => {
    utilSetSearchParams('itemsPerPage', value);
    utilSetSearchParams('currentPage', '1');
  };
  const onOrderByChange = (orderBy: string) => {
    utilSetSearchParams('orderBy', orderBy);
  };

  return (
    <PageContainer className={s.container}>
      <BackToLink to={Routes.DECKS}>Back to Decks List</BackToLink>
      <div className={s.deckTitle}>
        <div className={s.dropdownWrapper}>
          <Typography.H1>{deck?.name}</Typography.H1>
          {isYourDeck && <MyDeckDropdownMenu />}
        </div>
        {isYourDeck ? (
          <AddNewCardModal />
        ) : (
          <Button onClick={() => setSearchParams({ page: '1' })}>Learn to Pack</Button>
        )}
      </div>
      {deck?.cover && <img alt="cover" className={s.cover} src={deck.cover} />}
      <DebouncedInput
        changeSearchValue={changeSearchValue}
        containerClassName={s.input}
        onClearInput={onInputClear}
        placeholder="Search by question"
        type="search"
      />
      {cards && (
        <CardsTable data={cards.items} orderByCallBack={onOrderByChange} orderByKey={orderBy} />
      )}
      <Pagination
        className={s.pagination}
        currentPage={pagination.currentPage}
        itemsPerPage={pagination.itemsPerPage.toString()}
        itemsPerPageList={['10', '20', '30', '50', '100']}
        onItemsPerPageChange={onItemsPerPageChange}
        onValueChange={onPaginationChange}
        totalPages={pagination.totalPages}
      />
    </PageContainer>
  );
};
