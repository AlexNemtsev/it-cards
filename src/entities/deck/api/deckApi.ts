import { flashcardsApi } from '@/shared/api/flashcardsApi';

import { Card, CreateCardRequest, Deck } from '../types';

export const deckApi = flashcardsApi.injectEndpoints({
  endpoints: builder => {
    return {
      createCard: builder.mutation<CreateCardRequest, Card>({
        query: args => {
          const { answer, deckId, question } = args;
          const formData = new FormData();

          formData.append('answer', answer);
          formData.append('question', question);

          return {
            body: formData,
            method: 'POST',
            url: `/v1/decks/${deckId}/cards`,
          };
        },
      }),

      getDeck: builder.query<Deck, string>({
        query: id => `v1/decks/${id}`,
      }),
    };
  },
});

export const { useCreateCardMutation, useGetDeckQuery } = deckApi;
