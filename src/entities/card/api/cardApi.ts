import { flashcardsApi } from '@/shared/api/flashcardsApi';

import { GetCardsArgs, PaginatedCardsWithGrade } from '../types';

export const deckApi = flashcardsApi.injectEndpoints({
  endpoints: builder => {
    return {
      getCards: builder.query<PaginatedCardsWithGrade, any>({
        query: args => {
          const { deckId, ...rest } = args;

          console.log(deckId);
          console.log(rest);

          return {
            params: rest,
            url: `v1/decks/${deckId}/cards`,
          };
        },
      }),
    };
  },
});

export const { useGetCardsQuery } = deckApi;
