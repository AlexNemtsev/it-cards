import { useParams } from 'react-router-dom';

import { useCreateCardMutation } from '@/entities/card/api/cardApi';
import { CreateCardRequest } from '@/entities/card/api/types';
import { useGetDeckQuery } from '@/entities/deck/api/deckApi';
import { useMeQuery } from '@/entities/user/api';
import { AddNewCardModal } from '@/pages/DeckPage/ui/AddNewCardModal/AddNewCardModal';
import { BackToLink } from '@/pages/DeckPage/ui/BackToLink';
import { MyDeckDropdownMenu } from '@/pages/DeckPage/ui/MyDeckDropdownMenu';
import { useDeckPage } from '@/pages/DeckPage/useDeckPage';
import { Routes } from '@/shared/constants/routes';
import { Button } from '@/shared/ui/Button';
import { DebouncedInput } from '@/shared/ui/DebouncedInput';
import { PageContainer } from '@/shared/ui/PageContainer';
import { Typography } from '@/shared/ui/Typography';
import { CardsTable } from '@/widgets/Deck/CardsTable';

import s from './DeckPage.module.scss';

export const DeckPage = () => {
  const { [Routes.DECK_ID]: deckId = '' } = useParams();
  const { data: deck } = useGetDeckQuery(deckId);
  const { data: meData } = useMeQuery();
  const isYourDeck = meData?.id === deck?.userId;

  const {
    changeSearchValue,
    currentPage,
    itemsPerPage,
    onInputClear,
    onItemsPerPageChange,
    onOrderByChange,
    onPaginationChange,
    orderBy,
    question,
    setSearchParams,
  } = useDeckPage();

  const [createCard] = useCreateCardMutation();

  const onCreateCard = (data: CreateCardRequest) => {
    const { answer, answerImg, question, questionImg } = data;

    const formData = new FormData();

    if (answerImg) {
      formData.append('answerImg', answerImg);
    }

    if (questionImg) {
      formData.append('questionImg', questionImg);
    }

    formData.append('answer', answer);
    formData.append('question', question);
    const args: { deckId: string; formData: FormData } = { deckId, formData };

    createCard(args);
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
          <AddNewCardModal onCreateCard={onCreateCard} />
        ) : (
          <Button onClick={() => setSearchParams({ page: '1' })}>Learn to Deck</Button>
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

      <CardsTable
        currentPage={currentPage}
        itemsPerPage={itemsPerPage}
        onItemsPerPageChange={onItemsPerPageChange}
        onPaginationChange={onPaginationChange}
        orderBy={orderBy}
        orderByCallBack={onOrderByChange}
        orderByKey={orderBy}
        question={question}
      />
    </PageContainer>
  );
};
