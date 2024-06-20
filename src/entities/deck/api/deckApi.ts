import { flashcardsApi } from '@/shared/api/flashcardsApi';

import { Card, CreateCardRequest, Deck } from '../types';

export const deckApi = flashcardsApi.injectEndpoints({
  endpoints: builder => {
    return {
      createCard: builder.mutation<Card, CreateCardRequest>({
        query: args => {
          // const { id, ...rest } = args;
          const { answer, question } = args;
          const formData = new FormData();

          formData.append('answer', answer);
          formData.append('question', question);

          return {
            body: formData,
            method: 'POST',
            url: `/v1/decks/clx34f5fp03puo501nv25lbzc/cards`,
            // url: `/v1/decks/${id}/cards`,
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
