import { AccessTokenController } from '@/shared/api/accessTokenController';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const accessTokenController = new AccessTokenController();

export const flashcardsApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.flashcards.andrii.es',
    prepareHeaders: headers => {
      const accessToken = accessTokenController.getToken() ?? '';

      headers.set('Authorization', `Bearer ${accessToken}`);
    },
  }),
  endpoints: () => ({}),
  reducerPath: 'flashcardsApi',
  tagTypes: ['Me', 'Decks', 'GetCards'],
});
