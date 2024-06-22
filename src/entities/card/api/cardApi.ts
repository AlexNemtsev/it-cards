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
          const { answer, answerImg, deckId, question, questionImg } = args;
          const formData = new FormData();

          if (answerImg) {
            formData.append('answerImg', answerImg);
          }

          if (questionImg) {
            formData.append('questionImg', questionImg);
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

      getCard: builder.query<CreateCardResponse, string>({
        query: id => {
          return {
            url: `v1/cards/${id}`,
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

      updateCard: builder.mutation<CreateCardResponse, { id: string } & CreateCardRequest>({
        invalidatesTags: ['GetCards'],
        query: args => {
          const { answer, answerImg, id, question, questionImg } = args;
          const formData = new FormData();

          if (answerImg) {
            formData.append('answerImg', answerImg);
          }

          if (questionImg) {
            formData.append('questionImg', questionImg);
          }

          formData.append('answer', answer);
          formData.append('question', question);

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
