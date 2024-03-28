import { InputHTMLAttributes, useState } from 'react';

import { Cross } from '@/assets/icons/Cross';
import { Eye } from '@/assets/icons/Eye/Eye';
import { Search } from '@/assets/icons/Search';
import { clsx } from 'clsx';

import s from './Input.module.scss';

import { EyeOff } from '../../../assets/icons/EyeOff';
import { Typography } from '../Typography';
import { InputButton } from './InputButton';

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
    cross: clsx(),
    field: clsx(s.field, disabled && s.disabled),
    input: clsx(s.input, error && s.error, typePassword && s.password, typeSearch && s.search),
    inputWrapper: clsx(s.inputWrapper, disabled && s.disabled, error && s.error),
    label: clsx(s.label, disabled && s.disabled),
  };

  return (
    <div className={classNames.inputWrapper}>
      {label && !typeSearch && (
        <label htmlFor={label}>
          <Typography.Body2 className={classNames.label}>{label}</Typography.Body2>
        </label>
      )}

      <div className={classNames.field}>
        {typeSearch && (
          <InputButton className="search">
            <Search />
          </InputButton>
        )}
        <input
          className={classNames.input}
          disabled={disabled}
          type={typePassword && maskedPassword ? 'password' : 'text'}
          value={value}
          {...restProps}
          id={label}
        />

        {typePassword && (
          <InputButton className={s.buttonEye} onClick={showPassword}>
            {maskedPassword ? <EyeOff /> : <Eye />}
          </InputButton>
        )}

        {typeSearch && value && (
          <InputButton onClick={clearInput}>
            <Cross />
          </InputButton>
        )}
      </div>

      {error && <Typography.Caption className={s.errorText}>{error}</Typography.Caption>}
    </div>
  );
};
