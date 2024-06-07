import { useEffect, useState } from 'react';

import { useDebounce } from '@/shared/hooks/useDebounce';
import { Slider } from '@/shared/ui/Slider';
import { RangeValue } from '@/shared/ui/Slider/Slider';

type Props = {
  getNumberOfCards: (value: RangeValue) => void;
  max?: number;
  min?: number;
  range: RangeValue;
};

export const SelectCardsNumber = (props: Props) => {
  const { getNumberOfCards, max, min, range } = props;
  const [cardsNumber, setCardsNumber] = useState<RangeValue>([0, 0]);

  const debouncedSliderChange = useDebounce((value: RangeValue) => {
    getNumberOfCards(value);
  }, 800);
  const onValueChange = (value: RangeValue) => {
    setCardsNumber(value);
    debouncedSliderChange(value);
  };

  useEffect(() => {
    setCardsNumber(range);
  }, [range]);

  return <Slider max={max} min={min} onValueChange={onValueChange} value={cardsNumber} />;
};
