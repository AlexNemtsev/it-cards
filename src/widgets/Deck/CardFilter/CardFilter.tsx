import { DebouncedInput } from '@/shared/ui/DebouncedInput';

import s from './CardFilter.module.scss';

import { useDeck } from '../lib/useDeck';

export const CardFilter = () => {
  const { changeSearchValue, onInputClear, question } = useDeck();

  return (
    <DebouncedInput
      changeSearchValue={changeSearchValue}
      containerClassName={s.input}
      placeholder="Search by question"
      resetInput={onInputClear}
      type="search"
      value={question}
    />
  );
};
