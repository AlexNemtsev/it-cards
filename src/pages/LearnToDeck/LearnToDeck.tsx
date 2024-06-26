import { useState } from 'react';
import { useParams } from 'react-router-dom';

import { useGetRandomCardQuery } from '@/entities/card/api/cardApi';
import { useGetDeckQuery } from '@/entities/deck/api/deckApi';
import { BackToLink } from '@/pages/DeckPage/ui/BackToLink';
import { Routes } from '@/shared/constants/routes';
import { Button } from '@/shared/ui/Button';
import { Card } from '@/shared/ui/Card';
import { PageContainer } from '@/shared/ui/PageContainer';
import { RadioGroup } from '@/shared/ui/Radiogroup';
import { Typography } from '@/shared/ui/Typography';

import s from './LearnToDeck.module.scss';

export const LearnToDeck = () => {
  const { [Routes.DECK_ID]: deckId = '' } = useParams();

  const { data: deck } = useGetDeckQuery(deckId);
  const { data: card } = useGetRandomCardQuery(deckId);

  const [isHiddenMode, setIsHiddenMode] = useState(true);

  return (
    <PageContainer className={s.container}>
      <BackToLink className={s.backToLink} to={Routes.DECKS}>
        Back to Decks List
      </BackToLink>
      <Card className={s.card}>
        <Typography.H1 className={s.title}>{deck?.name}</Typography.H1>
        <Typography.Body1 className={s.question}>
          Question:
          <Typography.Subtitle1 as="span"> {card?.question}</Typography.Subtitle1>
        </Typography.Body1>
        {card?.questionImg && (
          <img alt="question" className={s.questionImage} src={card.questionImg} />
        )}
        {isHiddenMode && (
          <Typography.Body1 className={s.attempts}>
            Number of attempts to answer the question:
            <Typography.Subtitle2 as="span"> {card?.shots}</Typography.Subtitle2>
          </Typography.Body1>
        )}
        <RadioGroup
          className={s.radioGroup}
          defaultValue="2"
          options={[
            { label: 'Did not know', value: '1' },
            { label: 'Forgot', value: '2' },
            { label: 'A lot of thought', value: '3' },
            { label: 'Confused', value: '4' },
            { label: 'Knew the answer', value: '5' },
          ]}
        />

        <Button fullWidth>Show Answer</Button>
      </Card>
    </PageContainer>
  );
};
