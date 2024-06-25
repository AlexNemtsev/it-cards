import { tabOptions, tabSwitcherStates } from '@/pages/DecksPage/consts';
import { useDecksSearchParams } from '@/pages/DecksPage/useDecksSearchParams';
import { Delete } from '@/shared/assets/icons/Delete/Delete';
import { Button } from '@/shared/ui/Button';
import { Input } from '@/shared/ui/Input';
import { Slider } from '@/shared/ui/Slider';
import { TabSwitcher } from '@/shared/ui/TabSwitcher';

import s from './DecksFilters.module.scss';

type Props = {
  maxCards?: number;
  minCards?: number;
};

export const DecksFilters = (props: Props) => {
  const { maxCards, minCards } = props;

  const {
    clearFilters,
    clearSearchByName,
    decksAuthor,
    decksNumberRange,
    getDecksAuthor,
    getDecksNumberRange,
    getSearchByName,
    searchByName,
  } = useDecksSearchParams();

  const range: [number, number] = [
    decksNumberRange?.[0] || minCards || 0,
    decksNumberRange?.[1] || maxCards || 0,
  ];

  return (
    <div className={s.filters}>
      <Input
        containerClassName={s.input}
        onClearInput={clearSearchByName}
        onValueChange={getSearchByName}
        placeholder="Input search"
        type="search"
        value={searchByName}
      />
      <TabSwitcher
        className={s.tabs}
        defaultValue={tabSwitcherStates.ALL}
        onValueChange={getDecksAuthor}
        tabOptions={tabOptions}
        value={decksAuthor}
      />
      <Slider max={maxCards} min={minCards} onValueChange={getDecksNumberRange} value={range} />
      <Button className={s.button} onClick={clearFilters} variant="secondary">
        <Delete />
        Clear Filter
      </Button>
    </div>
  );
};
