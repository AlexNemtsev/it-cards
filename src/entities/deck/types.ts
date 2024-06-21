import { components } from '@/shared/api/schema';

export type Deck = components['schemas']['Deck'];

export type PaginatedDecks = components['schemas']['PaginatedDecks'];

export type CreateCardRequest = components['schemas']['CreateCardRequest'];
// export type Card = {
//   answer: string;
//   answerImg?: File | null | undefined;
//   answerVideo?: File | null | undefined;
//   id: string;
//   question: string;
//   questionImg?: File | null | undefined;
//   questionVideo?: File | null | undefined;
// };

export type Card = {
  answer: string;
  answerImg?: string | undefined;
  answerVideo?: string | undefined;
  deckId: string;
  question: string;
  questionImg?: string | undefined;
  questionVideo?: string | undefined;
};
