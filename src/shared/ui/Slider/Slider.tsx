import { ChangeEvent, ComponentPropsWithoutRef } from 'react';

import { Input } from '@/shared/ui/Input';
import { Range, Root, Thumb, Track } from '@radix-ui/react-slider';
import clsx from 'clsx';

import s from './Slider.module.scss';

type RangeValue = [number, number];

type RedefinedProps = {
  onValueChange?: (value: RangeValue) => void;
  value: RangeValue;
  wrapperClassName?: string;
};

type RadixSliderOmittedProps = Omit<
  ComponentPropsWithoutRef<typeof Root>,
  'defaultValue' | 'onValueCommit' | keyof RedefinedProps
>;

type Props = RadixSliderOmittedProps & RedefinedProps;

export const Slider = (props: Props) => {
  const { max = 10, min = 0, onValueChange, value, wrapperClassName, ...restProps } = props;

  const classNames = {
    sliderWrapper: clsx(s.sliderWrapper, wrapperClassName),
  };

  const onSliderValueChange = (value: RangeValue) => {
    if (onValueChange) {
      onValueChange(value);
    }
  };

  const onLeftValueChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value: targetValue } = event.target;

    if (Number.isNaN(+targetValue)) {
      return;
    }

    const inputValue = Math.max(+targetValue ?? min, min);

    const leftSliderValue = Math.min(inputValue, value[1]);

    onSliderValueChange([leftSliderValue, value[1]]);
  };

  const onRightValueChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value: targetValue } = event.target;

    if (Number.isNaN(+targetValue)) {
      return;
    }

    const inputValue = Math.min(+targetValue ?? max, max);

    const rightSliderValue = Math.max(inputValue, value[0]);

    onSliderValueChange([value[0], rightSliderValue]);
  };

  return (
    <div className={classNames.sliderWrapper}>
      <Input className={s.sliderInput} onChange={onLeftValueChange} value={value[0]} />
      <Root
        {...restProps}
        className={s.sliderRoot}
        max={max}
        min={min}
        onValueChange={onSliderValueChange}
        value={value}
      >
        <Track className={s.sliderTrack}>
          <Range className={s.sliderRange} />
        </Track>
        <Thumb className={s.sliderThumb} />
        <Thumb className={s.sliderThumb} />
      </Root>
      <Input className={s.sliderInput} onChange={onRightValueChange} value={value[1]} />
    </div>
  );
};
