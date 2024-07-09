import { Link, useParams } from 'react-router-dom';

import { useGetDeckQuery } from '@/entities/deck/api/deckApi';
import { useMeQuery } from '@/entities/user/api';
import { AddNewCardModal } from '@/features/AddNewCardModal';
import { MyDeckDropdownMenu } from '@/pages/DeckPage/ui/MyDeckDropdownMenu';
import { Routes } from '@/shared/constants/routes';
import { Button } from '@/shared/ui/Button';
import { Typography } from '@/shared/ui/Typography';

import s from './CardHeader.module.scss';

export const CardHeader = () => {
  const { [Routes.DECK_ID]: deckId = '' } = useParams();
  const { data: deck } = useGetDeckQuery(deckId);
  const { data: meData } = useMeQuery();
  const isYourDeck = meData?.id === deck?.userId;

  return (
    <>
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
    </>
  );
};
