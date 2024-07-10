import {
  CreateDecksArgs,
  Deck,
  DeletedDeck,
  GetDecksArgs,
  GetDecksResponse,
  GetMinMaxCardsResponse,
  UpdateDeckArgs,
} from '@/entities/deck/api/types';
import { convertDataToFormData } from '@/entities/deck/lib/convertDataToFormData';
import { convertEditFormDataToFormData } from '@/entities/deck/lib/convertEditFormDataToFormData';
import { flashcardsApi } from '@/shared/api/flashcardsApi';

export const deckApi = flashcardsApi.injectEndpoints({
  endpoints: builder => {
    return {
      createDeck: builder.mutation<Deck, CreateDecksArgs>({
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
      deleteDeck: builder.mutation<DeletedDeck, string>({
        invalidatesTags: ['Decks'],
        query: id => ({
          method: 'DELETE',
          url: `v1/decks/${id}`,
        }),
      }),
      editDeck: builder.mutation<Deck, UpdateDeckArgs>({
        invalidatesTags: ['Decks'],
        query: args => {
          const { data, id } = args;
          const formData = convertEditFormDataToFormData(data);

          return {
            body: formData,
            method: 'PATCH',
            url: `/v1/decks/${id}`,
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

export const {
  useCreateDeckMutation,
  useDeleteDeckMutation,
  useEditDeckMutation,
  useGetDeckQuery,
  useGetDecksQuery,
  useGetMinMaxCardsQuery,
} = deckApi;
