import { flashcardsApi } from '@/shared/api/flashcardsApi';

import { Deck } from '../types';

export const deckApi = flashcardsApi.injectEndpoints({
  endpoints: builder => {
    return {
      getDeck: builder.query<Deck, string>({
        query: id => `v1/decks/${id}`,
      }),
    };
  },
});

export const { useGetDeckQuery } = deckApi;
