import { Link, useParams } from 'react-router-dom';

import { useGetDeckQuery } from '@/entities/deck/api/deckApi';
import { useMeQuery } from '@/entities/user/api';
import { AddNewCardModal } from '@/features/AddNewCardModal/AddNewCardModal';
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

  const { changeSearchValue, onInputClear, question } = useDeckPage();

  return (
    <PageContainer className={s.container}>
      <BackToLink className={s.backToLink} to={Routes.DECKS}>
        Back to Decks List
      </BackToLink>
      {deck && (
        <div className={s.deckTitle}>
          <div className={s.dropdownWrapper}>
            <Typography.H1>{deck?.name}</Typography.H1>
            {isYourDeck && (
              <MyDeckDropdownMenu
                cover={deck.cover}
                id={deck.id}
                isPrivate={deck.isPrivate}
                name={deck.name}
              />
            )}
          </div>
          {isYourDeck ? (
            <AddNewCardModal deckId={deck.id} />
          ) : (
            <Button as={Link} to={`${Routes.DECKS}/${deck.id}/learn`}>
              Learn to Deck
            </Button>
          )}
        </div>
      )}
      {deck?.cover && <img alt="cover" className={s.cover} src={deck.cover} />}
      <DebouncedInput
        changeSearchValue={changeSearchValue}
        containerClassName={s.input}
        placeholder="Search by question"
        resetInput={onInputClear}
        type="search"
        value={question}
      />

      <CardsTable />
    </PageContainer>
  );
};
