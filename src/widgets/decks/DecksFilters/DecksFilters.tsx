import { TabSwitcherStatesType } from '@/pages/DecksPage/DecksPage';
import { Delete } from '@/shared/assets/icons/Delete/Delete';
import { Button } from '@/shared/ui/Button';
import { DebouncedInput } from '@/shared/ui/DebouncedInput';
import { DebouncedSlider } from '@/shared/ui/DebouncedSlider';
import { TabSwitcher } from '@/shared/ui/TabSwitcher';

import s from './DecksFilters.module.scss';

type Props = {
  clearFilters: () => void;
  clearValueSearch: () => void;
  getDecksAuthor: (value: string) => void;
  getNumberOfCards: (value: [number, number]) => void;
  getValueSearch: (value: string) => void;
  maxCards: number | undefined;
  minCards: number | undefined;
  range: [number, number];
  tabSwitcherStates: TabSwitcherStatesType;
};

export const DecksFilters = (props: Props) => {
  const {
    clearFilters,
    clearValueSearch,
    getDecksAuthor,
    getNumberOfCards,
    getValueSearch,
    maxCards,
    minCards,
    range,
    tabSwitcherStates,
  } = props;

  return (
    <div className={s.filters}>
      <DebouncedInput
        changeSearchValue={getValueSearch}
        containerClassName={s.input}
        onClearInput={clearValueSearch}
        placeholder="Input search"
        type="search"
      />
      <TabSwitcher
        className={s.tabs}
        defaultValue={tabSwitcherStates.ALL}
        onValueChange={getDecksAuthor}
        tabOptions={[
          {
            label: tabSwitcherStates.MY,
            value: tabSwitcherStates.MY,
          },
          {
            label: tabSwitcherStates.ALL,
            value: tabSwitcherStates.ALL,
          },
        ]}
      />
      <DebouncedSlider
        getNumberOfCards={getNumberOfCards}
        max={maxCards}
        min={minCards}
        range={range}
      />
      <Button className={s.button} onClick={clearFilters} variant="secondary">
        <Delete />
        Clear Filter
      </Button>
    </div>
  );
};
