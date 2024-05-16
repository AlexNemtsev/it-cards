import { flashcardsApi } from '@/shared/api/flashcardsApi';

import { Deck, PaginatedDecks } from '../types';

export const deckApi = flashcardsApi.injectEndpoints({
  endpoints: builder => {
    return {
      getDeck: builder.query<Deck, string>({
        query: id => `v1/decks/${id}`,
      }),
      getDecks: builder.query<PaginatedDecks, void>({
        query: () => `v2/decks`,
      }),
    };
  },
});

export const { useGetDeckQuery, useGetDecksQuery } = deckApi;
