import { components, operations } from '@/shared/api/schema';

export type PaginatedCardsWithGrade = components['schemas']['PaginatedCardsWithGrade'];
export type GetCardsArgs = {
  deckId: string;
} & operations['DecksController_findCardsInDeck']['parameters']['query'];

export type CreateCardRequest = {
  answer: string;
  answerImg?: Nullable<File>;
  question: string;
  questionImg?: Nullable<File>;
};

export type Nullable<T> = T | null;

export type Card = components['schemas']['Card'];
