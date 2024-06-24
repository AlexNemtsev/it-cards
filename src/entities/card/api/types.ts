import { components, operations } from '@/shared/api/schema';

export type PaginatedCardsWithGrade = components['schemas']['PaginatedCardsWithGrade'];

export type CreateCardQueryArgs = {
  deckId: string;
} & operations['DecksController_findCardsInDeck']['parameters']['query'];

export type Nullable<T> = T | null;

export type Card = components['schemas']['Card'];
