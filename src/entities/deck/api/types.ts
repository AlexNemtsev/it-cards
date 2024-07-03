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

export type GetDecksResponse = {
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

export type GetMinMaxCardsResponse = {
  max: number;
  min: number;
};

export type CreateDeck = {
  cardsCount: number;
  cover: string;
  created: string;
  id: string;
  isPrivate: true;
  name: string;
  updated: string;
  userId: string;
};

export type CreateDeckArgs = {
  cover?: File;
  isPrivate: boolean;
  name: string;
};
