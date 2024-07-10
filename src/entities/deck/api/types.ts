export type Author = {
  id: string;
  name: string;
};

export type Deck = {
  cardsCount: number;
  cover: string;
  created: string;
  id: string;
  isPrivate: boolean;
  name: string;
  updated: string;
  userId: string;
};

export type DeletedDeck = {
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

export type UpdateDeckArgs = {
  data: {
    cover?: File;
    isPrivate?: boolean;
    name?: string;
  };
  id: string;
};

export type GetMinMaxCardsResponse = {
  max: number;
  min: number;
};

export type CreateDeckArgs = {
  cover?: File;
  isPrivate: boolean;
  name: string;
};

export type CreateDecksArgs = { file?: any; pack: string; private?: boolean | undefined };
export type UpdateDecksArgs = {
  data: { file?: any; pack: string; private?: boolean | undefined };
  id: string;
};
