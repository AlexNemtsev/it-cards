import { flashcardsApi } from '@/shared/api/flashcardsApi';

import { GetDecksArgs, getDecksResponse, getMinMaxCardsResponse } from './types';

export const deckApi = flashcardsApi.injectEndpoints({
  endpoints: builder => {
    return {
      getDecks: builder.query<getDecksResponse, GetDecksArgs | void>({
        providesTags: ['Decks'],
        query: args => ({
          params: args ?? undefined,
          url: `v2/decks`,
        }),
      }),
      getMinMaxCards: builder.query<getMinMaxCardsResponse, void>({
        providesTags: ['Decks'],
        query: () => ({
          url: `v2/decks/min-max-cards`,
        }),
      }),
    };
  },
});

export const { useGetDecksQuery, useGetMinMaxCardsQuery } = deckApi;
