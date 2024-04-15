import { InputHTMLAttributes, forwardRef, useState } from 'react';

import { Cross } from '@/assets/icons/Cross';
import { Eye } from '@/assets/icons/Eye/Eye';
import { EyeOff } from '@/assets/icons/EyeOff';
import { Search } from '@/assets/icons/Search';
import { clsx } from 'clsx';

import s from './Input.module.scss';

import { Typography } from '../Typography';
import { InputButton } from './InputButton';

export type InputProps = {
  clearInput?: () => void;
  containerClassName?: string;
  error?: string;
  label?: string;
  type?: 'password' | 'search';
} & InputHTMLAttributes<HTMLInputElement>;

export const Input = forwardRef<HTMLInputElement, InputProps>((props: InputProps, ref) => {
  const { clearInput, containerClassName, disabled, error, label, type, value, ...restProps } =
    props;

  const [maskedPassword, setMaskedPassword] = useState(false);

  const showPassword = () => {
    setMaskedPassword(!maskedPassword);
  };

  const typePassword = type === 'password';
  const typeSearch = type === 'search';

  const classNames = {
    container: clsx(s.container, disabled && s.disabled, error && s.error, containerClassName),
    cross: clsx(),
    field: clsx(s.field, disabled && s.disabled),
    input: clsx(s.input, error && s.error, typePassword && s.password, typeSearch && s.search),
    label: clsx(s.label, disabled && s.disabled),
  };

  return (
    <div className={classNames.container}>
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
          ref={ref}
          type={typePassword && maskedPassword ? 'password' : 'text'}
          value={value}
          {...restProps}
          id={label}
        />

        {typePassword && (
          <InputButton onClick={showPassword}>{maskedPassword ? <EyeOff /> : <Eye />}</InputButton>
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
});
