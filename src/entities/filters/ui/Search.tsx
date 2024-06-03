import { ComponentPropsWithoutRef, useState } from 'react';

import { useDebounce } from '@/shared/hooks/useDebounce';
import { Input } from '@/shared/ui/Input';

type SearchProps = {
  changeSearchValue: (value: string) => void;
  containerClassName?: string;
  error?: string;
  label?: string;
  onClearInput?: () => void;
  onValueChange?: (value: string) => void;
} & ComponentPropsWithoutRef<'input'>;

const Search = (props: SearchProps) => {
  const { changeSearchValue, ...restProps } = props;
  const [search, setSearch] = useState('');

  const debouncedInputChange = useDebounce((value: string) => {
    changeSearchValue(value);
  }, 800);
  const onInputChange = (search: string) => {
    setSearch(search);
    debouncedInputChange(search);
  };

  return <Input onValueChange={onInputChange} value={search} {...restProps} />;
};

export default Search;
