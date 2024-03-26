import { InputHTMLAttributes, useState } from 'react';

import { Cross } from '@/assets/icons/Cross';
import { Eye } from '@/assets/icons/Eye/Eye';
import { Search } from '@/assets/icons/Search';
import { clsx } from 'clsx';

import s from './Input.module.scss';

import { Typography } from '../Typography';

type Props = {
  clearInput?: () => void;
  error?: string;
  label?: string;
  type?: 'password' | 'search';
} & InputHTMLAttributes<HTMLInputElement>;

export const Input = (props: Props) => {
  const { clearInput, disabled, error, label, type, value, ...restProps } = props;

  const [maskedPassword, setMaskedPassword] = useState(false);

  const showPassword = () => {
    setMaskedPassword(!maskedPassword);
  };

  const typePassword = type === 'password';
  const typeSearch = type === 'search';

  const classNames = {
    input: clsx(s.input, error && s.error, typePassword && s.password, typeSearch && s.search),
    label: clsx(s.label, disabled && s.disabled),
  };

  return (
    <div className={s.inputWrapper}>
      {label && !typeSearch && (
        <label htmlFor={label}>
          <Typography.Caption className={classNames.label}>{label}</Typography.Caption>
        </label>
      )}

      <div className={s.field}>
        {typeSearch && <Search isError={!!error} />}
        <input
          className={classNames.input}
          disabled={disabled}
          type={typePassword && maskedPassword ? 'password' : 'text'}
          value={value}
          {...restProps}
          id={label}
        />
        {typePassword && (
          <Eye disabled={disabled} maskedPassword={maskedPassword} onClick={showPassword} />
        )}
        {typeSearch && value && <Cross isError={!!error} onClick={clearInput} />}
      </div>

      {error && <Typography.Caption className={s.errorText}>{error}</Typography.Caption>}
    </div>
  );
};
