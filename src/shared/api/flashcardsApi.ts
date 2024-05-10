import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const flashcardsApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.flashcards.andrii.es',
    credentials: 'include',
  }),
  endpoints: () => ({}),
  reducerPath: 'flashcardsApi',
  tagTypes: ['Me'],
});
