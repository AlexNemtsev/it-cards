import { baseQueryWithReauth } from '@/shared/api/flashcards-base-query';
import { createApi } from '@reduxjs/toolkit/query/react';

export const flashcardsApi = createApi({
  baseQuery: baseQueryWithReauth,
  endpoints: () => ({}),
  reducerPath: 'flashcardsApi',
  tagTypes: ['Decks', 'Me', 'Deck'],
});
