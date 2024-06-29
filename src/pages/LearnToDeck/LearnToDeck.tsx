import { useState } from 'react';
import { useParams } from 'react-router-dom';

import { useGetRandomCardQuery, useToRateCardMutation } from '@/entities/card/api/cardApi';
import { ToRateCardQueryArgs } from '@/entities/card/types';
import { useGetDeckQuery } from '@/entities/deck/api/deckApi';
import { BackToLink } from '@/pages/DeckPage/ui/BackToLink';
import { ShowingAnswer } from '@/pages/LearnToDeck/ShowingAnswer/ShowingAnswer';
import { Routes } from '@/shared/constants/routes';
import { Button } from '@/shared/ui/Button';
import { Card } from '@/shared/ui/Card';
import { PageContainer } from '@/shared/ui/PageContainer';
import { Typography } from '@/shared/ui/Typography';

import s from './LearnToDeck.module.scss';

export const LearnToDeck = () => {
  const [isAnswerShowing, setIsAnswerShowing] = useState(false);
  const [toRateCard, { data: toRateCardData }] = useToRateCardMutation();

  const { [Routes.DECK_ID]: deckId = '' } = useParams();

  const { data: deck } = useGetDeckQuery(deckId);
  const { currentData: getCardData } = useGetRandomCardQuery(deckId);

  let card = toRateCardData || getCardData;

  const showAnswerHandler = () => {
    setIsAnswerShowing(true);
  };

  const nextQuestion = async (grade: string) => {
    const args: ToRateCardQueryArgs = {
      cardId: card!.id,
      deckId,
      grade: +grade,
    };

    card = await toRateCard(args).unwrap();
    setIsAnswerShowing(false);
  };

  return (
    <PageContainer className={s.container}>
      <BackToLink className={s.backToLink} to={Routes.DECKS}>
        Back to Decks List
      </BackToLink>
      <Card className={s.card}>
        <Typography.H1 className={s.title}>{deck?.name}</Typography.H1>
        <Typography.Subtitle1 className={s.question}>
          Question:
          <Typography.Body1 as="span"> {card?.question}</Typography.Body1>
        </Typography.Subtitle1>
        {card?.questionImg && (
          <img alt="question" className={s.questionImage} src={card.questionImg} />
        )}

        <Typography.Subtitle1 className={s.attempts}>
          Number of attempts to answer the question:
          <Typography.Body1 as="span"> {card?.shots}</Typography.Body1>
        </Typography.Subtitle1>

        {isAnswerShowing && (
          <ShowingAnswer
            answer={card?.answer || ''}
            image={card?.answerImg || ''}
            nextQuestion={nextQuestion}
          />
        )}

        {!isAnswerShowing && (
          <Button fullWidth onClick={showAnswerHandler}>
            Show Answer
          </Button>
        )}
      </Card>
    </PageContainer>
  );
};
