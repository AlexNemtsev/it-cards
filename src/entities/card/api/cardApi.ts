import { flashcardsApi } from '@/shared/api/flashcardsApi';

import { Card, CreateCardRequest, GetCardsArgs, PaginatedCardsWithGrade } from './types';

export const deckApi = flashcardsApi.injectEndpoints({
  endpoints: builder => {
    return {
      createCard: builder.mutation<CreateCardRequest, { deckId: string } & Card>({
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

export const { useCreateCardMutation, useGetCardsQuery } = deckApi;
