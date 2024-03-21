import { ChangeEvent, InputHTMLAttributes, useState } from 'react';

import { Close } from '@/assets/icons/Close';
import { Eye } from '@/assets/icons/Eye/Eye';
import { Search } from '@/assets/icons/Search';
import { clsx } from 'clsx';

import s from './Input.module.scss';

import { Typography } from '../Typography';

type Props = {
  error?: string;
  labelValue?: string;
  typeValue?: 'password' | 'search';
} & InputHTMLAttributes<HTMLInputElement>;

export const Input = (props: Props) => {
  const { disabled, error, labelValue, typeValue, ...otherProps } = props;

  const [inputValue, setInputValue] = useState('');

  const typePassword = typeValue === 'password';
  const typeSearch = typeValue === 'search';

  const classNames = {
    input: clsx(s.input, error && s.error, typePassword && s.password, typeSearch && s.search),
    label: clsx(s.label, disabled && s.disabled),
  };

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleClickClose = () => {
    setInputValue('');
  };

  return (
    <div className={s.inputWrapper}>
      {labelValue && !typeSearch && (
        <label htmlFor={labelValue}>
          <Typography.Caption className={classNames.label}>{labelValue}</Typography.Caption>
        </label>
      )}

      <div className={s.field}>
        {typeSearch && <Search isError={!!error} />}
        <input
          className={classNames.input}
          disabled={disabled}
          onChange={handleChangeInput}
          value={inputValue}
          {...otherProps}
          id={labelValue}
        />
        {typePassword && <Eye disabled={disabled} />}
        {typeSearch && inputValue && (
          <Close handleClickClose={handleClickClose} isError={!!error} />
        )}
      </div>

      {error && <Typography.Caption className={s.errorText}>{error}</Typography.Caption>}
    </div>
  );
};
