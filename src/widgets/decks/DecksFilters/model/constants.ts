export type TabSwitcherStatesType = Record<string, string>;

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
