import { useEffect, useState } from 'react';

import { useDebounce } from '@/shared/hooks/useDebounce';
import { Slider } from '@/shared/ui/Slider';

type Props = {
  getNumberOfCards: (value: [number, number]) => void;
  max: number | undefined;
  min: number | undefined;
  range: [number, number];
};

export const SelectCardsNumber = (props: Props) => {
  const { getNumberOfCards, max, min, range } = props;
  const [cardsNumber, setCardsNumber] = useState<[number, number]>([0, 0]);

  const debouncedSliderChange = useDebounce((value: [number, number]) => {
    getNumberOfCards(value);
  }, 800);
  const onValueChange = (value: [number, number]) => {
    setCardsNumber(value);
    debouncedSliderChange(value);
  };

  useEffect(() => {
    setCardsNumber(range);
  }, [range]);

  return <Slider max={max} min={min} onValueChange={onValueChange} value={cardsNumber} />;
};
