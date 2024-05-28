import { flashcardsApi } from '@/shared/api/flashcardsApi';

import { GetCardsArgs, PaginatedCardsWithGrade } from '../types';

export const deckApi = flashcardsApi.injectEndpoints({
  endpoints: builder => {
    return {
      getCards: builder.query<PaginatedCardsWithGrade, GetCardsArgs>({
        query: ({ id, ...args }) => ({
          params: args,
          url: `v1/decks/${id}/cards`,
        }),
      }),
    };
  },
});

export const { useGetCardsQuery } = deckApi;
