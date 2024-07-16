import { useDeckPage } from '@/pages/DeckPage/useDeckPage';
import { DebouncedInput } from '@/shared/ui/DebouncedInput';

import s from './CardFilter.module.scss';

export const CardFilter = () => {
  const { changeSearchValue, onInputClear, question } = useDeckPage();

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
