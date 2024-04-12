import { ComponentPropsWithoutRef, ReactNode, forwardRef } from 'react';

import { CheckedMark } from '@/assets/icons/CheckedMark/CheckedMark';
import { Typography } from '@/components/ui/Typography';
import { Indicator, Root } from '@radix-ui/react-checkbox';
import clsx from 'clsx';

import s from './Checkbox.module.scss';

type Props = {
  icon?: ReactNode;
  label?: string;
} & ComponentPropsWithoutRef<typeof Root>;
export const Checkbox = forwardRef<HTMLButtonElement, Props>((props: Props, ref) => {
  const { checked, className, disabled, icon, id, label, ...restProps } = props;
  const classNames = clsx(s.checkbox, disabled && s.disabled, className);

  return (
    <label className={classNames}>
      <div className={s.buttonWrapper}>
        <Root {...restProps} defaultChecked={checked} disabled={disabled} ref={ref}>
          <Indicator>{icon ? icon : <CheckedMark />}</Indicator>
        </Root>
      </div>

      {label && <Typography.Body2>{label}</Typography.Body2>}
    </label>
  );
});
