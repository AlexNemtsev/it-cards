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
    defaultValue: [25, 75],
    max: 100,
    min: -50,
  },
  render: ({ defaultValue, max, min }) => {
    const [range, setRange] = useState<[number, number]>(defaultValue);

    const onValueChange = (value: [number, number]) => {
      setRange(value);
    };

    return (
      <>
        <Slider defaultValue={defaultValue} max={max} min={min} onValueChange={onValueChange} />
        <p>
          Range: {range[0]} - {range[1]}
        </p>
      </>
    );
  },
};

export const SliderWithoutOnValueChang: Story = {
  args: {
    defaultValue: [25, 75],
    max: 100,
    min: -50,
  },
};
