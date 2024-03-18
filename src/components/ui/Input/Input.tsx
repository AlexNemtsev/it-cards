import { ChangeEvent, InputHTMLAttributes, useState } from 'react';

import { Close } from '@/assets/icons/Close';
import { Eye } from '@/assets/icons/Eye/Eye';
import { Search } from '@/assets/icons/Search';
import { clsx } from 'clsx';

import s from './Input.module.scss';

import { Typography } from '../Typography';

type Props = {
  error?: string;
  labelValue?: string | undefined;
  typeInput?: string;
} & InputHTMLAttributes<HTMLInputElement>;

export const Input = (props: Props) => {
  const { disabled, error, labelValue, type, typeInput, ...otherProps } = props;

  const [search, setSearch] = useState<boolean>(false);
  const [inputValue, setSearchValue] = useState('');

  const show = true;

  const typePassword = typeInput === 'password';
  const typeSearch = typeInput === 'search';

  const cl = {
    field: clsx(s.field, disabled && s.field_disabled, error && s.field_error),
    input: clsx(
      s.input,
      error && s.input_error,
      typePassword && s.input_password,
      typeSearch && s.input_search
    ),
  };

  const handleMouseDownInput = () => {
    setSearch(true);
  };
  const handleMouseUpInput = () => {
    setSearch(false);
  };
  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const handleClickClose = () => {
    setSearchValue('');
  };

  return (
    <div className={s.inputWrapper}>
      {labelValue && (
        <label className={s.label} htmlFor={labelValue}>
          {labelValue}
        </label>
      )}

      <div className={cl.field}>
        {typeSearch && <Search isError={!!error} search={search} />}
        <input
          className={cl.input}
          disabled={disabled}
          onChange={handleChangeInput}
          onMouseDown={handleMouseDownInput}
          onMouseUp={handleMouseUpInput}
          value={inputValue}
          {...otherProps}
          id={labelValue}
        />
        {typePassword && <Eye disabled={disabled} show={show} />}
        {typeSearch && inputValue && (
          <Close handleClickClose={handleClickClose} isError={!!error} />
        )}
      </div>

      {error && <div className={s.error}>{error}</div>}
      <Typography.H1></Typography.H1>
    </div>
  );
};
