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
} & InputHTMLAttributes<HTMLInputElement>;

export const Input = (props: Props) => {
  const { disabled, error, labelValue, type, ...otherProps } = props;

  const [inputValue, setSearchValue] = useState('');

  const show = true;

  const typePassword = type === 'password';
  const typeSearch = type === 'search';

  const cl = {
    field: clsx(s.field, disabled && s.field_disabled, error && s.field_error),
    input: clsx(
      s.input,
      error && s.input_error,
      typePassword && s.input_password,
      typeSearch && s.input_search
    ),
    label: clsx(s.label, disabled && s.label_disabled),
  };

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const handleClickClose = () => {
    setSearchValue('');
  };

  return (
    <div className={s.inputWrapper}>
      {labelValue && !typeSearch && (
        <label htmlFor={labelValue}>
          <Typography.Caption className={cl.label}>{labelValue}</Typography.Caption>
        </label>
      )}

      <div className={cl.field}>
        {typeSearch && <Search isError={!!error} />}
        <input
          className={cl.input}
          disabled={disabled}
          onChange={handleChangeInput}
          value={inputValue}
          {...otherProps}
          id={labelValue}
        />
        {typePassword && <Eye disabled={disabled} show={show} />}
        {typeSearch && inputValue && (
          <Close handleClickClose={handleClickClose} isError={!!error} />
        )}
      </div>

      {error && <Typography.Caption className={s.error}>{error}</Typography.Caption>}
    </div>
  );
};
