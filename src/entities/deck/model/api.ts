import { flashcardsApi } from '@/shared/api/flashcardsApi';

export const deckApi = flashcardsApi.injectEndpoints({
  endpoints: builder => {
    return {
      getDecks: builder.query<getDecksResponse, GetDecksArgs | void>({
        providesTags: ['Decks'],
        query: args => ({
          params: args ?? undefined,
          url: `v2/decks`,
        }),
      }),
      getMinMaxCards: builder.query<getMinMaxCardsResponse, void>({
        providesTags: ['Decks'],
        query: () => ({
          url: `v2/decks/min-max-cards`,
        }),
      }),
    };
  },
});

export const { useGetDecksQuery, useGetMinMaxCardsQuery } = deckApi;

export type Author = {
  id: string;
  name: string;
};

export type Deck = {
  author: Author;
  cardsCount: number;
  cover: string;
  created: string;
  id: string;
  isPrivate: boolean;
  name: string;
  updated: string;
  userId: string;
};

export type Pagination = {
  currentPage: number;
  itemsPerPage: number;
  totalItems: number;
  totalPages: number;
};

export type getDecksResponse = {
  items: Deck[];
  pagination: Pagination;
};

export type GetDecksArgs = {
  authorId?: string;
  currentPage?: number;
  itemsPerPage?: number;
  maxCardsCount?: number;
  minCardsCount?: number;
  name?: string;
  orderBy?: string;
};

export type getMinMaxCardsResponse = {
  max: number;
  min: number;
};