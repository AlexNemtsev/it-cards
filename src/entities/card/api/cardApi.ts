import { flashcardsApi } from '@/shared/api/flashcardsApi';

import {
  Card,
  CreateCardQueryArgs,
  GetCardQueryArgs,
  PaginatedCardsWithGrade,
  UpdateCardQueryArgs,
} from '../types';

export const deckApi = flashcardsApi.injectEndpoints({
  endpoints: builder => {
    return {
      createCard: builder.mutation<Card, CreateCardQueryArgs>({
        invalidatesTags: ['GetCards'],
        query: args => {
          const { deckId, formData } = args;

          return {
            body: formData,
            method: 'POST',
            url: `/v1/decks/${deckId}/cards`,
          };
        },
      }),

      deleteCard: builder.mutation<undefined, string>({
        invalidatesTags: ['GetCards'],
        query: id => {
          return {
            method: 'DELETE',
            url: `/v1/cards/${id}`,
          };
        },
      }),

      getCard: builder.query<Card, string>({
        query: id => {
          return {
            url: `v1/cards/${id}`,
          };
        },
      }),

      getCards: builder.query<PaginatedCardsWithGrade, GetCardQueryArgs>({
        providesTags: ['GetCards'],
        query: args => {
          const { deckId, ...rest } = args;

          return {
            params: rest,
            url: `v1/decks/${deckId}/cards`,
          };
        },
      }),

      updateCard: builder.mutation<Card, UpdateCardQueryArgs>({
        invalidatesTags: ['GetCards'],
        query: args => {
          const { formData, id } = args;

          return {
            body: formData,
            method: 'PATCH',
            url: `/v1/cards/${id}`,
          };
        },
      }),
    };
  },
});

export const {
  useCreateCardMutation,
  useDeleteCardMutation,
  useGetCardQuery,
  useGetCardsQuery,
  useUpdateCardMutation,
} = deckApi;
