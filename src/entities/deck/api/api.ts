import { flashcardsApi } from '@/shared/api/flashcardsApi';

export const deckApi = flashcardsApi.injectEndpoints({
  endpoints: builder => {
    return {
      getDecks: builder.query<any, void>({
        query: () => `v1/decks`,
      }),
    };
  },
});

export const { useGetDecksQuery } = deckApi;
