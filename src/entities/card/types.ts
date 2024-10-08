import { AddNewCardFormValues } from '@/features/AddNewCardModal/ui/NewCardForm/NewCardForm';
import { components, operations } from '@/shared/api/schema';

export type PaginatedCardsWithGrade = components['schemas']['PaginatedCardsWithGrade'];

export type GetCardQueryArgs = {
  deckId: string;
} & operations['DecksController_findCardsInDeck']['parameters']['query'];

export type Card = components['schemas']['Card'];

export type CreateCardQueryArgs = { data: AddNewCardFormValues; deckId: string };
export type UpdateCardQueryArgs = {
  data: {
    answer: string;
    answerImg?: File;
    question: string;
    questionImg?: File;
  };
  id: string;
};
export type ToRateCardQueryArgs = { cardId: string; deckId: string; grade: number };
export type RandomCard = components['schemas']['CardWithGrade'];
