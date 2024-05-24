import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const flashcardsApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.flashcards.andrii.es',
    prepareHeaders: headers => {
      const accessToken = localStorage.getItem('accessToken') ?? '';

      headers.set('Authorization', `Bearer ${accessToken}`);
    },
  }),
  endpoints: () => ({}),
  reducerPath: 'flashcardsApi',
  tagTypes: ['Me'],
});
