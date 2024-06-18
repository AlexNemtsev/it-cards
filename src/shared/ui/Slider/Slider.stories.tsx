import type { Meta, StoryObj } from '@storybook/react';

import { useState } from 'react';

import { Slider } from './Slider';

const meta = {
  component: Slider,
  tags: ['autodocs'],
  title: 'Components/Slider',
} satisfies Meta<typeof Slider>;

export default meta;

type Story = StoryObj<typeof meta>;

export const SliderExample: Story = {
  args: {
    max: 100,
    min: -50,
    value: [25, 75],
  },
  render: ({ max, min, value }) => {
    const [range, setRange] = useState<[number, number]>(value);

    const onValueChange = (value: [number, number]) => {
      setRange(value);
    };

    return (
      <>
        <Slider max={max} min={min} onValueChange={onValueChange} value={range} />
        <p>
          Range: {range[0]} - {range[1]}
        </p>
      </>
    );
  },
};

export const SliderWithoutOnValueChang: Story = {
  args: {
    max: 100,
    min: -50,
    value: [25, 75],
  },
};
