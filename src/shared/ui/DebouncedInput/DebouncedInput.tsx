import { ComponentPropsWithoutRef, useEffect, useState } from 'react';

import { useDebounce } from '@/shared/hooks/useDebounce';
import { Input } from '@/shared/ui/Input';

type SearchProps = {
  changeSearchValue: (value: string) => void;
  containerClassName?: string;
  error?: string;
  label?: string;
  resetInput?: () => void;
  value: string;
} & ComponentPropsWithoutRef<'input'>;

export const DebouncedInput = (props: SearchProps) => {
  const { changeSearchValue, resetInput, value, ...restProps } = props;
  const [search, setSearch] = useState('');

  const debouncedInputChange = useDebounce((value: string) => {
    changeSearchValue(value);
  }, 800);

  const onInputChange = (search: string) => {
    setSearch(search);
    debouncedInputChange(search);
  };

  const onClearInput = () => {
    if (resetInput) {
      resetInput();
    }
    setSearch('');
  };

  useEffect(() => {
    setSearch(value);
  }, [value]);

  return (
    <Input
      onClearInput={restProps.type === 'search' ? onClearInput : undefined}
      onValueChange={onInputChange}
      value={search}
      {...restProps}
    />
  );
};
