import { useGetMinMaxCardsQuery } from '@/entities/deck/api/deckApi';
import { useDecksSearchParams } from '@/pages/DecksPage/useDecksSearchParams';
import { Delete } from '@/shared/assets/icons/Delete/Delete';
import { Button } from '@/shared/ui/Button';
import { DebouncedInput } from '@/shared/ui/DebouncedInput';
import { DebouncedSlider } from '@/shared/ui/DebouncedSlider';
import { Spinner } from '@/shared/ui/Spinner';
import { TabSwitcher } from '@/shared/ui/TabSwitcher';
import { tabSwitcherStates } from '@/widgets/decks/DecksFilters/model/constants';

import s from './DecksFilters.module.scss';

import { tabOptions } from './model/constants';

export const DecksFilters = () => {
  const { data: minMaxCards, isLoading } = useGetMinMaxCardsQuery();
  const minCards = minMaxCards?.min;
  const maxCards = minMaxCards?.max;

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
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className={s.filters}>
          <DebouncedInput
            changeSearchValue={getSearchByName}
            containerClassName={s.input}
            placeholder="Input search"
            resetInput={clearSearchByName}
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
          <DebouncedSlider
            getNumberOfCards={getDecksNumberRange}
            max={maxCards}
            min={minCards}
            range={range}
          />
          <Button className={s.button} onClick={clearFilters} variant="secondary">
            <Delete />
            Clear Filter
          </Button>
        </div>
      )}
    </>
  );
};
