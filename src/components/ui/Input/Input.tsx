import { InputHTMLAttributes } from 'react';

import { Close } from '@/assets/icons/Close';
import { Eye } from '@/assets/icons/Eye/Eye';
import { Search } from '@/assets/icons/Search';
import { clsx } from 'clsx';

import s from './Input.module.scss';

import { Typography } from '../Typography';

type Props = {
  clearSearch?: () => void;
  error?: string;
  labelValue?: string;
  maskedPassword?: boolean;
  showPassword?: (value: boolean) => void;
  typeValue?: 'password' | 'search';
} & InputHTMLAttributes<HTMLInputElement>;

export const Input = (props: Props) => {
  const {
    clearSearch,
    disabled,
    error,
    labelValue,
    maskedPassword,
    showPassword,
    typeValue,
    value,
    ...otherProps
  } = props;

  const typePassword = typeValue === 'password';
  const typeSearch = typeValue === 'search';

  const classNames = {
    input: clsx(s.input, error && s.error, typePassword && s.password, typeSearch && s.search),
    label: clsx(s.label, disabled && s.disabled),
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
          type={typePassword && maskedPassword ? 'password' : 'text'}
          value={value}
          {...otherProps}
          id={labelValue}
        />
        {typePassword && (
          <Eye disabled={disabled} maskedPassword={maskedPassword} showPassword={showPassword!} />
        )}
        {typeSearch && value && <Close handleClickClose={clearSearch!} isError={!!error} />}
      </div>

      {error && <Typography.Caption className={s.errorText}>{error}</Typography.Caption>}
    </div>
  );
};
