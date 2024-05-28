import { components, operations } from '@/shared/api/schema';

export type PaginatedCardsWithGrade = components['schemas']['PaginatedCardsWithGrade'];
export type GetCardsArgs = { id: string } & operations['DecksController_findCardsInDeck'];
