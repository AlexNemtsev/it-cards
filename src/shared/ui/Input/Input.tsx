import {
  ChangeEvent,
  ComponentPropsWithoutRef,
  ElementRef,
  forwardRef,
  useId,
  useState,
} from 'react';

import { Cross } from '@/shared/assets/icons/Cross';
import { Eye } from '@/shared/assets/icons/Eye/Eye';
import { EyeOff } from '@/shared/assets/icons/EyeOff';
import { Search } from '@/shared/assets/icons/Search';
import { getInputType } from '@/shared/ui/Input/lib/getInputTypes';
import { Typography } from '@/shared/ui/Typography';
import { clsx } from 'clsx';

import s from './Input.module.scss';

import { InputButton } from './InputButton';

export type InputProps = {
  containerClassName?: string;
  error?: string;
  label?: string;
  onClearInput?: () => void;
  onValueChange?: (value: string) => void;
} & ComponentPropsWithoutRef<'input'>;

export const Input = forwardRef<ElementRef<'input'>, InputProps>((props: InputProps, ref) => {
  const {
    className,
    containerClassName,
    disabled,
    error,
    id,
    label,
    onChange,
    onClearInput,
    onValueChange,
    type,
    ...inputProps
  } = props;

  const generatedId = useId();
  const finalId = id ?? generatedId;

  const [isPasswordHidden, setIsPasswordHidden] = useState(true);

  const showPassword = () => {
    setIsPasswordHidden(!isPasswordHidden);
  };

  const typePassword = type === 'password';
  const typeSearch = type === 'search';

  const finalType = getInputType(type, isPasswordHidden);

  const classNames = {
    container: clsx(s.container, disabled && s.disabled, error && s.error, containerClassName),
    field: clsx(s.field, disabled && s.disabled),
    input: clsx(
      s.input,
      error && s.error,
      typePassword && s.password,
      typeSearch && s.search,
      className
    ),
    label: clsx(s.label, disabled && s.disabled),
  };

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    onChange?.(e);
    onValueChange?.(e.target.value);
  }

  return (
    <div className={classNames.container}>
      {!!label && !typeSearch && (
        <label htmlFor={finalId}>
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
          type={finalType}
          {...inputProps}
          id={finalId}
          onChange={handleChange}
        />

        {typePassword && (
          <InputButton onClick={showPassword}>
            {isPasswordHidden ? <EyeOff /> : <Eye />}
          </InputButton>
        )}

        {typeSearch && !!inputProps.value && (
          <InputButton onClick={onClearInput}>
            <Cross />
          </InputButton>
        )}
      </div>

      {error && <Typography.Caption className={s.errorText}>{error}</Typography.Caption>}
    </div>
  );
});
