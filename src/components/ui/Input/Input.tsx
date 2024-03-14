import { InputHTMLAttributes } from 'react';

import { Eye } from '@/assets/icons/Eye/Eye';
import { EyeOff } from '@/assets/icons/EyeOff/EyeOff';
import { Search } from '@/assets/icons/Search';
import { clsx } from 'clsx';

import s from './Input.module.scss';

type OwnProps = {
  disabled?: boolean;
  error?: string;
  labelValue?: string;
  type: string;
};

type Props = OwnProps & Omit<InputHTMLAttributes<HTMLInputElement>, keyof OwnProps>;

export const Input = ({ disabled, error, labelValue, type, ...otherProps }: Props) => {
  const show = false;

  return (
    <div className={clsx(s.inputWrapper)}>
      {labelValue && (
        <label className={clsx(s.label)} htmlFor={labelValue}>
          {labelValue}
        </label>
      )}

      <div className={clsx(s.field, disabled && s.disabled, error && s.errorField)}>
        {type === 'search' && <Search />}

        <input
          className={clsx(s.input)}
          disabled={disabled}
          type={type}
          {...otherProps}
          id={labelValue}
        />

        {type === 'password' && show && <Eye disabled={disabled} />}
        {type === 'password' && !show && <EyeOff disabled={disabled} />}
      </div>

      {error && <div className={clsx(s.error)}>{error}</div>}
    </div>
  );
};
