import { flashcardsApi } from '@/shared/api/flashcardsApi';

import {
  CreateCardRequest,
  CreateCardResponse,
  GetCardsArgs,
  PaginatedCardsWithGrade,
} from './types';

export const deckApi = flashcardsApi.injectEndpoints({
  endpoints: builder => {
    return {
      createCard: builder.mutation<CreateCardResponse, { deckId: string } & CreateCardRequest>({
        invalidatesTags: ['GetCards'],
        query: args => {
          const { answer, answerImg, deckId, question } = args;
          const formData = new FormData();

          if (answerImg) {
            formData.append('answerImg', answerImg);
          }

          formData.append('answer', answer);
          formData.append('question', question);

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

      getCards: builder.query<PaginatedCardsWithGrade, GetCardsArgs>({
        providesTags: ['GetCards'],
        query: args => {
          const { deckId, ...rest } = args;

          return {
            params: rest,
            url: `v1/decks/${deckId}/cards`,
          };
        },
      }),
    };
  },
});

export const { useCreateCardMutation, useDeleteCardMutation, useGetCardsQuery } = deckApi;
