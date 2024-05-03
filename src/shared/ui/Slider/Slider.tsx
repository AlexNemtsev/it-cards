import { ChangeEvent, ComponentPropsWithoutRef, useState } from 'react';

import { useDebounce } from '@/shared/hooks/useDebounce';
import { Input } from '@/shared/ui/Input';
import { Range, Root, Thumb, Track } from '@radix-ui/react-slider';
import clsx from 'clsx';

import s from './Slider.module.scss';

type RangeValue = [number, number];

type RedefinedProps = {
  defaultValue: RangeValue;
  delay?: number;
  onValueChange?: (value: RangeValue) => void;
  wrapperClassName?: string;
};

type RadixSliderOmittedProps = Omit<
  ComponentPropsWithoutRef<typeof Root>,
  'onValueCommit' | 'value' | keyof RedefinedProps
>;

type Props = RadixSliderOmittedProps & RedefinedProps;

export const Slider = (props: Props) => {
  const { defaultValue, delay, onValueChange, wrapperClassName, ...restProps } = props;
  const { max = 10, min = 0 } = restProps;
  const [sliderValue, setSliderValue] = useState<RangeValue>(defaultValue);

  const classNames = {
    sliderWrapper: clsx(s.sliderWrapper, wrapperClassName),
  };

  const debouncedOnValueChange = useDebounce(onValueChange ?? (() => {}), delay);

  const onSliderValueChange = (value: RangeValue) => {
    setSliderValue(value);
    debouncedOnValueChange(value);
  };

  const onLeftValueChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    if (Number.isNaN(+value)) {
      return;
    }

    const inputValue = Math.max(+value ?? min, min);

    const leftSliderValue = Math.min(inputValue, sliderValue[1]);

    onSliderValueChange([leftSliderValue, sliderValue[1]]);
  };

  const onRightValueChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    if (Number.isNaN(+value)) {
      return;
    }

    const inputValue = Math.min(+value ?? max, max);

    const rightSliderValue = Math.max(inputValue, sliderValue[0]);

    onSliderValueChange([sliderValue[0], rightSliderValue]);
  };

  return (
    <div className={classNames.sliderWrapper}>
      <Input className={s.sliderInput} onChange={onLeftValueChange} value={sliderValue[0]} />
      <Root
        className={s.sliderRoot}
        {...restProps}
        onValueChange={onSliderValueChange}
        value={sliderValue}
      >
        <Track className={s.sliderTrack}>
          <Range className={s.sliderRange} />
        </Track>
        <Thumb className={s.sliderThumb} />
        <Thumb className={s.sliderThumb} />
      </Root>
      <Input className={s.sliderInput} onChange={onRightValueChange} value={sliderValue[1]} />
    </div>
  );
};