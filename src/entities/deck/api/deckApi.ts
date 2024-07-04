import {
  Deck,
  GetDecksArgs,
  GetDecksResponse,
  GetMinMaxCardsResponse,
} from '@/entities/deck/api/types';
import { convertDataToFormData } from '@/entities/deck/lib/convertDataToFormData';
import { flashcardsApi } from '@/shared/api/flashcardsApi';
import { NewDeckFormValues } from '@/widgets/decks/AddNewDeckModal/NewDeckForm/NewDeckForm';

export const deckApi = flashcardsApi.injectEndpoints({
  endpoints: builder => {
    return {
      createDeck: builder.mutation<Deck, NewDeckFormValues>({
        invalidatesTags: ['Decks'],
        query: data => {
          const formData = convertDataToFormData(data);

          return {
            body: formData,
            method: 'POST',
            url: `v1/decks`,
          };
        },
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

export const { useCreateDeckMutation, useGetDeckQuery, useGetDecksQuery, useGetMinMaxCardsQuery } =
  deckApi;
