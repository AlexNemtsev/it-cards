import { useParams } from 'react-router-dom';

import { useGetDeckQuery } from '@/entities/deck/api/deckApi';
import { BackToLink } from '@/pages/DeckPage/ui/BackToLink';
import { Routes } from '@/shared/constants/routes';
import { Card } from '@/shared/ui/Card';
import { PageContainer } from '@/shared/ui/PageContainer';
import { Typography } from '@/shared/ui/Typography';

import s from './LearnToDeck.module.scss';

export const LearnToDeck = () => {
  const { [Routes.DECK_ID]: deckId = '' } = useParams();

  const { data: deck } = useGetDeckQuery(deckId);

  return (
    <PageContainer className={s.container}>
      <BackToLink className={s.backToLink} to={Routes.DECKS}>
        Back to Decks List
      </BackToLink>
      <Card className={s.card}>
        <Typography.H1 className={s.title}>{deck?.name}</Typography.H1>
        <Typography.Body1 className={s.question}>Question</Typography.Body1>
      </Card>
    </PageContainer>
  );
};
