import { flashcardsApi } from '@/shared/api/flashcardsApi';

import { PaginatedCardsWithGrade } from '../types';

export const deckApi = flashcardsApi.injectEndpoints({
  endpoints: builder => {
    return {
      getCards: builder.query<PaginatedCardsWithGrade, string>({
        query: id => `v1/decks/${id}/cards`,
      }),
    };
  },
});

export const { useGetCardsQuery } = deckApi;
