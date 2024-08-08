export const ITEMS_PER_PAGE_VARIANTS = ['10', '20', '30', '50', '100'];

type OrderVariants = {
  cardsCount: string;
  created: string;
  name: string;
  updated: string;
};

export const orderVariants: OrderVariants = {
  cardsCount: 'cardsCount',
  created: 'created',
  name: 'name',
  updated: 'updated',
};

type SortByVAriants = {
  cardsCount: string;
  created: string;
  name: string;
  sortBy: string;
  updated: string;
};

export const sortByVAriants: SortByVAriants = {
  cardsCount: 'Cards count',
  created: 'Created',
  name: 'Name',
  sortBy: 'Sort by',
  updated: 'Updated',
};
