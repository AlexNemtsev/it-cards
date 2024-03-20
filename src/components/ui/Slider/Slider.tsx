import { Input } from '@/components/ui/Input';
import { Range, Root, Thumb, Track } from '@radix-ui/react-slider';

import s from './Slider.module.scss';

export const Slider = () => (
  <div className={s.sliderWrapper}>
    <Input className={s.sliderInput} />
    <Root className={s.sliderRoot} defaultValue={[25, 75]}>
      <Track className={s.sliderTrack}>
        <Range className={s.sliderRange} />
      </Track>
      <Thumb className={s.sliderThumb} />
      <Thumb className={s.sliderThumb} />
    </Root>
    <Input className={s.sliderInput} />
  </div>
);
