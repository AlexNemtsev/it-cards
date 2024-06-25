export const VARIANTS_ITEMS_PER_PAGE = ['10', '20', '30', '50', '100'];

export type TabSwitcherStatesType = {
  [key: string]: string;
};

export const tabSwitcherStates: TabSwitcherStatesType = {
  ALL: 'All Cards',
  MY: 'My Cards',
};

export const tabOptions = [
  {
    label: tabSwitcherStates.MY,
    value: tabSwitcherStates.MY,
  },
  {
    label: tabSwitcherStates.ALL,
    value: tabSwitcherStates.ALL,
  },
];

export const orderVariants = {
  cardsCount: 'cardsCount',
  created: 'created',
  name: 'name',
  updated: 'updated',
};
