import {
  Deck,
  DeletedDeck,
  GetDecksArgs,
  GetDecksResponse,
  GetMinMaxCardsResponse,
} from '@/entities/deck/api/types';
import { flashcardsApi } from '@/shared/api/flashcardsApi';

export const deckApi = flashcardsApi.injectEndpoints({
  endpoints: builder => {
    return {
      deleteDeck: builder.mutation<DeletedDeck, string>({
        invalidatesTags: ['Decks'],
        query: id => ({
          method: 'DELETE',
          url: `v2/decks/${id}`,
        }),
      }),
      getDeck: builder.query<Deck, string>({
        query: id => `v1/decks/${id}`,
      }),
      getDecks: builder.query<GetDecksResponse, GetDecksArgs | void>({
        providesTags: ['Decks'],
        query: args => ({
          params: args ?? undefined,
          url: `v2/decks`,
        }),
      }),
      getMinMaxCards: builder.query<GetMinMaxCardsResponse, void>({
        providesTags: ['Decks'],
        query: () => ({
          url: `v2/decks/min-max-cards`,
        }),
      }),
    };
  },
});

export const { useGetDeckQuery, useGetDecksQuery, useGetMinMaxCardsQuery } = deckApi;
