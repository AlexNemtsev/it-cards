import { flashcardsApi } from '@/shared/api/flashcardsApi';

export const deckApi = flashcardsApi.injectEndpoints({
  endpoints: builder => {
    return {
      getDecks: builder.query<getDecksResponse, void>({
        query: () => `v2/decks`,
      }),
    };
  },
});

export const { useGetDecksQuery } = deckApi;

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
  maxCardsCount: number;
  pagination: Pagination;
};
