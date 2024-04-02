import { ChangeEvent, ComponentPropsWithoutRef, useState } from 'react';

import { Input } from '@/components/ui/Input';
import { Range, Root, Thumb, Track } from '@radix-ui/react-slider';

import s from './Slider.module.scss';

type RangeValue = [number, number];

type RedefinedProps = {
  defaultValue: RangeValue;
  delay?: number;
  onValueChange?: (value: RangeValue) => void;
};

type RadixSliderOmittedProps = Omit<
  ComponentPropsWithoutRef<typeof Root>,
  'onValueCommit' | 'value' | keyof RedefinedProps
>;

type Props = RedefinedProps & RadixSliderOmittedProps;

export const Slider = (props: Props) => {
  const { defaultValue, delay, onValueChange, ...restProps } = props;
  const [sliderValue, setSliderValue] = useState<RangeValue>(defaultValue);

  const [timerId, setTimerId] = useState<ReturnType<typeof setTimeout> | undefined>(undefined);

  const onSliderValueChange = (value: RangeValue) => {
    setSliderValue(value);
    if (onValueChange) {
      clearTimeout(timerId);

      const newTimerId = setTimeout(() => {
        onValueChange(value);
      }, delay ?? 0);

      setTimerId(newTimerId);
    }
  };

  const onLeftValueChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = (+event.target.value || restProps.min) ?? 0;

    onSliderValueChange([value, sliderValue[1]]);
  };

  const onRightValueChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = (+event.target.value || restProps.max) ?? 1;

    onSliderValueChange([sliderValue[0], value]);
  };

  return (
    <div className={s.sliderWrapper}>
      <Input centerValue onChange={onLeftValueChange} value={sliderValue[0]} />
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
      <Input centerValue onChange={onRightValueChange} value={sliderValue[1]} />
    </div>
  );
};
